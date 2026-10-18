import { afterEach, expect, it, vi } from "vitest";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { useRef } from "react";
import { useTalkKeyboard, useTalkFullscreen } from "./useTalkBrowser";
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
it("leaves input keys alone and removes its listener on unmount", () => {
  const next = vi.fn();
  function Test() {
    useTalkKeyboard(true, () => undefined, next);
    return <input aria-label="Value" />;
  }
  const { unmount } = render(<Test />);
  fireEvent.keyDown(screen.getByLabelText("Value"), { key: "ArrowRight" });
  expect(next).not.toHaveBeenCalled();
  fireEvent.keyDown(window, { key: "ArrowRight" });
  expect(next).toHaveBeenCalledTimes(1);
  unmount();
  fireEvent.keyDown(window, { key: "ArrowRight" });
  expect(next).toHaveBeenCalledTimes(1);
});
it("handles unsupported fullscreen without losing content", async () => {
  function Test() {
    const ref = useRef<HTMLDivElement>(null);
    const f = useTalkFullscreen(ref);
    return (
      <div ref={ref}>
        <button onClick={f.toggle}>Full</button>
        <output>{f.status}</output>
      </div>
    );
  }
  render(<Test />);
  await act(async () => fireEvent.click(screen.getByText("Full")));
  expect(screen.getByText(/không hỗ trợ/)).toBeInTheDocument();
});
it("handles a rejected fullscreen request", async () => {
  function Test() {
    const ref = useRef<HTMLDivElement>(null);
    const f = useTalkFullscreen(ref);
    return (
      <div ref={ref}>
        <button onClick={f.toggle}>Request</button>
        <output>{f.status}</output>
      </div>
    );
  }
  render(<Test />);
  const node = screen.getByText("Request").parentElement!;
  Object.defineProperty(node, "requestFullscreen", {
    configurable: true,
    value: vi.fn().mockRejectedValue(new Error("denied")),
  });
  await act(async () => fireEvent.click(screen.getByText("Request")));
  expect(screen.getByRole("status")).toHaveTextContent("Không thể bật");
});
it("tracks native fullscreen entry and browser Escape exit", async () => {
  function Test() {
    const ref = useRef<HTMLDivElement>(null);
    const f = useTalkFullscreen(ref);
    return (
      <div ref={ref}>
        <button onClick={f.toggle}>Present</button>
        <output>{String(f.presenting)}</output>
      </div>
    );
  }
  render(<Test />);
  const node = screen.getByText("Present").parentElement!;
  Object.defineProperty(node, "requestFullscreen", {
    configurable: true,
    value: vi.fn(async () => {
      Object.defineProperty(document, "fullscreenElement", {
        configurable: true,
        value: node,
      });
      document.dispatchEvent(new Event("fullscreenchange"));
    }),
  });
  await act(async () => fireEvent.click(screen.getByText("Present")));
  expect(screen.getByRole("status")).toHaveTextContent("true");
  await act(async () => {
    Object.defineProperty(document, "fullscreenElement", {
      configurable: true,
      value: null,
    });
    document.dispatchEvent(new Event("fullscreenchange"));
  });
  expect(screen.getByRole("status")).toHaveTextContent("false");
  Reflect.deleteProperty(document, "fullscreenElement");
});
