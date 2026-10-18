import { useState } from "react";
import { networkEdges, shortestPath } from "../models";
import DemoFrame from "./DemoFrame";
import { Graph } from "./Diagram";
export default function NetworksDemo() {
  const [failed, setFailed] = useState(false),
    [offline, setOffline] = useState(false),
    [ran, setRan] = useState(false);
  const disabled = [...(failed ? ["B"] : []), ...(offline ? ["D"] : [])];
  const result = shortestPath(networkEdges, "D", disabled);
  return (
    <DemoFrame
      title="Đường truyền của gói tin"
      onReset={() => {
        setFailed(false);
        setOffline(false);
        setRan(false);
      }}
      note="Đồ thị cạnh bằng nhau minh hoạ đường đi ít chặng nhất; chưa phải giao thức mạng đầy đủ."
    >
      <Graph
        edges={networkEdges}
        path={ran ? result.path : []}
        disabled={disabled}
      />
      <div className="nt-controls">
        <label>
          <input
            data-testid="network-fail"
            type="checkbox"
            checked={failed}
            onChange={(e) => {
              setFailed(e.target.checked);
              setRan(false);
            }}
          />{" "}
          Máy B gặp sự cố
        </label>
        <label>
          <input
            data-testid="network-offline"
            type="checkbox"
            checked={offline}
            onChange={(e) => {
              setOffline(e.target.checked);
              setRan(false);
            }}
          />{" "}
          Máy đích D ngoại tuyến
        </label>
        <button
          data-testid="network-send"
          className="nt-primary"
          onClick={() => setRan(true)}
        >
          Gửi gói tin
        </button>
      </div>
      <output className="nt-result" aria-live="polite">
        {ran
          ? result.path.length
            ? `Đã gửi: ${result.path.join(" → ")}. ${failed ? "Mạng chọn đường qua C." : "Đường đi qua B."}`
            : "Không thể gửi: máy đích không có đường kết nối."
          : "Máy A cần gửi dữ liệu đến máy D. Hãy thử cho một máy gặp sự cố rồi gửi lại."}
      </output>
    </DemoFrame>
  );
}
