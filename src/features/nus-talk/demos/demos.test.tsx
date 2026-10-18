import { afterEach, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DemoHost from "./DemoHost";
import type { AreaId } from "../types";
afterEach(cleanup);
const mount = (areaId: AreaId) =>
  render(<DemoHost areaId={areaId} motionAllowed={false} />);
it("recomputes and resets the delivery route", () => {
  mount("algorithms");
  fireEvent.click(screen.getByTestId("route-run"));
  expect(screen.getByRole("status")).toHaveTextContent("Tổng độ dài: 7");
  fireEvent.change(screen.getByTestId("route-target"), {
    target: { value: "C" },
  });
  expect(screen.getByRole("status")).not.toHaveTextContent("Tổng độ dài");
  fireEvent.click(screen.getByTestId("route-run"));
  expect(screen.getByRole("status")).toHaveTextContent("Tổng độ dài: 3");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("route-target")).toHaveValue("F");
});
it("classifies changed inputs and clears the old result", () => {
  mount("ai");
  fireEvent.change(screen.getByTestId("ai-size"), { target: { value: "2" } });
  fireEvent.change(screen.getByTestId("ai-sweet"), { target: { value: "3" } });
  fireEvent.click(screen.getByTestId("ai-run"));
  expect(screen.getByRole("status")).toHaveTextContent("Dự đoán: Táo");
  fireEvent.change(screen.getByTestId("ai-size"), { target: { value: "8" } });
  expect(screen.getByRole("status")).not.toHaveTextContent("Dự đoán:");
  fireEvent.change(screen.getByTestId("ai-sweet"), { target: { value: "7" } });
  fireEvent.click(screen.getByTestId("ai-run"));
  expect(screen.getByRole("status")).toHaveTextContent("Dự đoán: Xoài");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("ai-size")).toHaveValue("5");
});
it("changes lighting with the control and resets", () => {
  mount("graphics");
  fireEvent.change(screen.getByTestId("graphics-angle"), {
    target: { value: "180" },
  });
  expect(screen.getByRole("status")).toHaveTextContent("20%");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("graphics-angle")).toHaveValue("45");
});
it("contrasts channel representation with decoded message", () => {
  mount("security");
  fireEvent.click(screen.getByTestId("security-send"));
  expect(screen.getByRole("status")).toHaveTextContent("đọc ngay HELLO");
  fireEvent.click(screen.getByTestId("security-protect"));
  fireEvent.click(screen.getByTestId("security-send"));
  expect(screen.getByText("62 6f 66 66 65")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("security-protect")).not.toBeChecked();
});
it("shows computed scan and ordered-index steps", () => {
  mount("databases");
  fireEvent.click(screen.getByTestId("database-run"));
  expect(screen.getByRole("status")).toHaveTextContent("7 bước");
  expect(screen.getByRole("status")).toHaveTextContent("4 → 6 → 7");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByRole("status")).not.toHaveTextContent("7 bước");
});
it("counts the actual interface task actions", () => {
  mount("hci");
  for (let i = 0; i < 3; i++) fireEvent.click(screen.getByTestId("hci-task"));
  expect(screen.getByRole("status")).toHaveTextContent("3 lần bấm");
  fireEvent.change(screen.getByTestId("hci-variant"), {
    target: { value: "clear" },
  });
  fireEvent.click(screen.getByTestId("hci-task"));
  expect(screen.getByRole("status")).toHaveTextContent("1 lần bấm");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("hci-task")).toHaveTextContent("Mở menu");
});
it("ranks local media under its stated criterion", () => {
  mount("retrieval");
  fireEvent.click(screen.getByTestId("retrieval-run"));
  expect(screen.getByRole("status")).toHaveTextContent("1. Hoa hồng");
  fireEvent.click(screen.getByTestId("retrieval-c"));
  fireEvent.click(screen.getByTestId("retrieval-run"));
  expect(screen.getByRole("status")).toHaveTextContent("1. Đại dương");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("retrieval-a")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});
it("reroutes and reports no available delivery path", () => {
  mount("networks");
  fireEvent.click(screen.getByTestId("network-fail"));
  fireEvent.click(screen.getByTestId("network-send"));
  expect(screen.getByRole("status")).toHaveTextContent("A → C → D");
  fireEvent.click(screen.getByTestId("network-offline"));
  fireEvent.click(screen.getByTestId("network-send"));
  expect(screen.getByRole("status")).toHaveTextContent("Không thể gửi");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("network-fail")).not.toBeChecked();
});
it("distributes fixed work among selected workers", () => {
  mount("parallel");
  fireEvent.change(screen.getByTestId("parallel-workers"), {
    target: { value: "4" },
  });
  fireEvent.click(screen.getByTestId("parallel-run"));
  expect(screen.getByRole("status")).toHaveTextContent("2 đơn vị");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("parallel-workers")).toHaveValue("1");
});
it("respects expression precedence and bounded steps", () => {
  mount("languages");
  for (let i = 0; i < 4; i++)
    fireEvent.click(screen.getByTestId("language-step"));
  expect(screen.getByRole("status")).toHaveTextContent("14");
  expect(screen.getByTestId("language-step")).toBeDisabled();
  fireEvent.change(screen.getByTestId("language-expression"), {
    target: { value: "1" },
  });
  for (let i = 0; i < 4; i++)
    fireEvent.click(screen.getByTestId("language-step"));
  expect(screen.getByRole("status")).toHaveTextContent("20");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("language-step")).not.toBeDisabled();
});
it("blocks release until a current corrected test passes", () => {
  mount("software");
  expect(screen.getByTestId("software-release")).toBeDisabled();
  fireEvent.click(screen.getByTestId("software-test"));
  expect(screen.getByRole("status")).toHaveTextContent("Chặn phát hành");
  fireEvent.click(screen.getByTestId("software-fix"));
  expect(screen.getByTestId("software-release")).toBeDisabled();
  fireEvent.click(screen.getByTestId("software-test"));
  fireEvent.click(screen.getByTestId("software-release"));
  expect(screen.getByRole("status")).toHaveTextContent("được phát hành");
  fireEvent.click(screen.getByTestId("demo-reset"));
  expect(screen.getByTestId("software-release")).toBeDisabled();
});
