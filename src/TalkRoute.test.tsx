import { afterEach, expect, it, vi } from "vitest";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import App, { PortfolioApp } from "./App";
import { engineeringTemplate } from "./templates/engineering";
import { businessTemplate } from "./templates/business";
import { Provider } from "./components/ui/provider";
import TalkRouteBoundary from "./components/TalkRouteBoundary";
afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "#home");
  vi.restoreAllMocks();
});
it.each([
  [engineeringTemplate, "navbar"],
  [businessTemplate, "business"],
] as const)(
  "exposes the talk entry in the $0.id header",
  (template, prefix) => {
    render(
      <Provider>
        <PortfolioApp initialTemplate={template} />
      </Provider>,
    );
    expect(screen.getByTestId(`${prefix}-talk-link`)).toHaveAttribute(
      "href",
      "#/talks/nus-cs",
    );
  },
);
it("loads a direct talk hash and handles route history back to the portfolio", async () => {
  window.history.replaceState(null, "", "#/talks/nus-cs");
  render(
    <Provider>
      <App />
    </Provider>,
  );
  expect(
    await screen.findByRole("heading", {
      name: "Các em muốn giải quyết vấn đề gì bằng công nghệ?",
    }),
  ).toBeInTheDocument();
  await act(async () => {
    window.history.pushState(null, "", "#/projects");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
  expect(screen.queryByTestId("talk-mode")).not.toBeInTheDocument();
  expect(screen.getByTestId("portfolio-main")).toBeInTheDocument();
  await act(async () => {
    window.history.pushState(null, "", "#/talks/nus-cs");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
  expect(await screen.findByTestId("talk-exit")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("talk-exit"));
  expect(window.location.hash).toBe("#/projects");
});
it("contains a talk render failure and offers return without its bundle", () => {
  vi.spyOn(console, "error").mockImplementation(() => undefined);
  function Broken() {
    throw new Error("failed chunk");
    return null;
  }
  const exit = vi.fn();
  render(
    <TalkRouteBoundary onExit={exit}>
      <Broken />
    </TalkRouteBoundary>,
  );
  fireEvent.click(screen.getByTestId("talk-error-exit"));
  expect(exit).toHaveBeenCalledOnce();
  expect(screen.getByTestId("talk-error-reload")).toBeInTheDocument();
});
