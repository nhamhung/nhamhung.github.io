import { useState } from "react";
import { schedule } from "../models";
import DemoFrame from "./DemoFrame";
export default function ParallelDemo() {
  const [workers, setWorkers] = useState(1),
    [ran, setRan] = useState(false);
  return (
    <DemoFrame
      title="Cùng xử lý 8 bức ảnh"
      onReset={() => {
        setWorkers(1);
        setRan(false);
      }}
      note="Giả sử mỗi ảnh mất 1 đơn vị thời gian xử lý và việc phân chia công việc không tốn thời gian. Trong thực tế, tăng số bộ xử lý không phải lúc nào cũng giúp tốc độ tăng tương ứng."
    >
      <div className="nt-controls">
        <label>
          Số bộ xử lý{" "}
          <select
            data-testid="parallel-workers"
            value={workers}
            onChange={(e) => {
              setWorkers(Number(e.target.value));
              setRan(false);
            }}
          >
            {[1, 2, 4].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <button
          className="nt-primary"
          data-testid="parallel-run"
          onClick={() => setRan(true)}
        >
          Phân chia công việc
        </button>
      </div>
      <div style={{ margin: "28px 0" }}>
        {ran ? (
          schedule(workers).map((tasks, i) => (
            <div className="nt-worker" key={i}>
              <span>CPU {i + 1}</span>
              {tasks.map((n) => (
                <span className="nt-task" key={n}>
                  Ảnh {n}
                </span>
              ))}
            </div>
          ))
        ) : (
          <div className="nt-big-value">8 ảnh · {workers} bộ xử lý</div>
        )}
      </div>
      <output className="nt-result" aria-live="polite">
        {ran
          ? `Hoàn thành sau ${Math.ceil(8 / workers)} đơn vị thời gian trong mô hình lý tưởng.`
          : "Cùng một khối lượng công việc. Điều gì thay đổi khi thêm bộ xử lý?"}
      </output>
    </DemoFrame>
  );
}
