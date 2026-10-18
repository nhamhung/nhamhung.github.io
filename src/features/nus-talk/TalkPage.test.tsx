import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TalkPage from "./TalkPage";
import { slides } from "./content";
import { profile } from "../../data/profile";
afterEach(cleanup);
it("bounds narrative, preserves the featured position across exploration and exits", () => {
  const exit = vi.fn();
  render(<TalkPage onExit={exit} />);
  expect(screen.getByTestId("talk-previous")).toBeDisabled();
  for (let i = 0; i < slides.findIndex((s) => s.areaId === "ai"); i++)
    fireEvent.click(screen.getByTestId("talk-next"));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Trí tuệ nhân tạo",
  );
  fireEvent.click(screen.getByTestId("talk-mode"));
  expect(screen.getByTestId("area-ai")).toHaveAttribute("aria-pressed", "true");
  fireEvent.click(screen.getByTestId("area-networks"));
  expect(screen.getByTestId("demo-networks")).toBeInTheDocument();
  expect(screen.queryByTestId("demo-ai")).not.toBeInTheDocument();
  fireEvent.click(screen.getByTestId("talk-mode"));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Trí tuệ nhân tạo",
  );
  for (let i = 0; i < slides.length; i++)
    fireEvent.click(screen.getByTestId("talk-next"));
  expect(screen.getByTestId("talk-next")).toBeDisabled();
  fireEvent.click(screen.getByTestId("talk-exit"));
  expect(exit).toHaveBeenCalledOnce();
});
it("introduces the speaker second with the original portrait and engineering and student-advising expertise", () => {
  render(<TalkPage onExit={() => undefined} />);
  fireEvent.click(screen.getByTestId("talk-next"));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Nhâm Quốc Hùng",
  );
  expect(screen.getByRole("img", { name: /Nhâm Quốc Hùng/ })).toHaveAttribute(
    "src",
    profile.profileImage,
  );
  expect(screen.getByText(/bằng danh dự loại Distinction/)).toBeInTheDocument();
  expect(screen.getByText(/Đang theo học thạc sĩ/)).toBeInTheDocument();
  expect(screen.getByText(/Torilab/)).toHaveTextContent(
    "PSA International, Sea Group, Rakuten Group",
  );
  expect(screen.getByText(/12 năm sinh sống/)).toBeInTheDocument();
  expect(
    screen.getByText(/4 năm học bổng ASEAN bậc phổ thông/),
  ).toHaveTextContent("4 năm học bổng ASEAN bậc đại học");
  expect(screen.getByText(/Tư vấn lựa chọn ngành học/)).toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/\bCV\b/);
  fireEvent.click(screen.getByTestId("talk-next"));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Khoa học máy tính là gì?",
  );
  expect(screen.getByText("Vai trò của lập trình")).toBeInTheDocument();
  expect(
    screen.getByRole("list", { name: /xếp thời khoá biểu/ }),
  ).toBeInTheDocument();
});
it("retains readable content while paused and explains fullscreen absence", async () => {
  render(<TalkPage onExit={() => undefined} />);
  fireEvent.click(screen.getByTestId("talk-pause"));
  expect(screen.getByTestId("talk-pause")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  expect(document.querySelector(".nus-talk")).toHaveAttribute(
    "data-motion",
    "false",
  );
  fireEvent.click(screen.getByTestId("talk-fullscreen"));
  expect(await screen.findByRole("status")).toHaveTextContent("không hỗ trợ");
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Các em muốn giải quyết",
  );
});

it("moves from the labelled CS/CE comparison directly to the field map", () => {
  render(<TalkPage onExit={() => undefined} />);
  for (
    let i = 0;
    i < slides.findIndex((slide) => slide.id === "comparison");
    i++
  )
    fireEvent.click(screen.getByTestId("talk-next"));
  expect(
    screen.getByRole("list", { name: "Ví dụ về Khoa học máy tính" }),
  ).toHaveTextContent("Thuật toán tìm đường");
  expect(
    screen.getByRole("list", { name: "Ví dụ về Kỹ thuật máy tính" }),
  ).toHaveTextContent("Cảm biến");
  fireEvent.click(screen.getByTestId("talk-next"));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Các hướng chuyên sâu trong Khoa học máy tính",
  );
  expect(document.body.textContent).not.toMatch(/\bCV\b/);
});
it("fits slides in the window when fullscreen is unsupported and restores reading mode on Escape", () => {
  render(<TalkPage onExit={() => undefined} />);
  fireEvent.click(screen.getByTestId("talk-fullscreen"));
  expect(screen.getByTestId("talk-fit-frame")).toBeInTheDocument();
  expect(screen.getByTestId("talk-fullscreen")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  fireEvent.keyDown(window, { key: "PageDown" });
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Nhâm Quốc Hùng",
  );
  fireEvent.keyDown(window, { key: "PageUp" });
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Các em muốn giải quyết",
  );
  fireEvent.keyDown(window, { key: "Escape" });
  expect(screen.queryByTestId("talk-fit-frame")).not.toBeInTheDocument();
  expect(document.body.style.overflow).not.toBe("hidden");
});
it("expands an interactive demo and returns to the same slide without losing its result", () => {
  render(<TalkPage onExit={() => undefined} />);
  for (
    let i = 0;
    i < slides.findIndex((slide) => slide.id === "algorithms");
    i++
  )
    fireEvent.click(screen.getByTestId("talk-next"));
  fireEvent.click(screen.getByTestId("route-run"));
  fireEvent.click(screen.getByTestId("demo-expand"));
  expect(screen.getByRole("dialog", { name: /Demo:/ })).toBeInTheDocument();
  expect(screen.getByTestId("demo-expand")).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  expect(screen.getByText(/Tổng độ dài:/)).toBeInTheDocument();
  fireEvent.keyDown(window, { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(screen.getByText(/Tổng độ dài:/)).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Thuật toán",
  );
});

it.each(["algorithms", "ai", "graphics", "networks", "security"])(
  "opens exploration for the featured %s simulation and returns to its scene",
  (id) => {
    render(<TalkPage onExit={() => undefined} />);
    const index = slides.findIndex((slide) => slide.areaId === id);
    for (let i = 0; i < index; i++)
      fireEvent.click(screen.getByTestId("talk-next"));
    fireEvent.click(screen.getByTestId("talk-mode"));
    expect(screen.getByTestId(`area-${id}`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByTestId(`demo-${id}`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("talk-mode"));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      slides[index].title,
    );
  },
);
