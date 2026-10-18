import { useState } from "react";
import { routeEdges, shortestPath } from "../models";
import DemoFrame from "./DemoFrame";
import { Graph } from "./Diagram";
export default function AlgorithmsDemo() {
  const [target, setTarget] = useState("F");
  const [result, setResult] = useState<ReturnType<typeof shortestPath>>();
  return (
    <DemoFrame
      title="Tìm đường"
      onReset={() => {
        setTarget("F");
        setResult(undefined);
      }}
      note="Độ dài các đoạn đường là số liệu giả định. Thuật toán Dijkstra tìm đường đi có tổng độ dài nhỏ nhất."
    >
      <Graph edges={routeEdges} path={result?.path} />
      <div className="nt-controls">
        <label>
          Điểm đến{" "}
          <select
            data-testid="route-target"
            value={target}
            onChange={(e) => {
              setTarget(e.target.value);
              setResult(undefined);
            }}
          >
            {["C", "D", "E", "F"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <button
          className="nt-primary"
          data-testid="route-run"
          onClick={() => setResult(shortestPath(routeEdges, target))}
        >
          Tìm đường ngắn nhất
        </button>
      </div>
      <output className="nt-result" aria-live="polite">
        {result
          ? `${result.path.join(" → ")} · Tổng độ dài: ${result.cost}`
          : "Xuất phát từ A. Chọn điểm đến và thử tìm đường."}
      </output>
    </DemoFrame>
  );
}
