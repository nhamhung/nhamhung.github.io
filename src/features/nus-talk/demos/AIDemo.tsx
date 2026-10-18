import { useState } from "react";
import { classify, samples } from "../models";
import DemoFrame from "./DemoFrame";
import { Diagram } from "./Diagram";
export default function AIDemo() {
  const [x, setX] = useState(5),
    [y, setY] = useState(5);
  const [result, setResult] = useState<ReturnType<typeof classify>>();
  return (
    <DemoFrame
      title="Máy học từ ví dụ"
      onReset={() => {
        setX(5);
        setY(5);
        setResult(undefined);
      }}
      note="Mô hình chọn ví dụ gần nhất theo kích thước và độ ngọt giả định, chưa thể nhận diện trái cây trong thực tế."
    >
      <Diagram label="Các ví dụ táo, xoài và điểm cần phân loại">
        <line x1="70" y1="235" x2="520" y2="235" stroke="#6c8580" />
        <line x1="70" y1="235" x2="70" y2="20" stroke="#6c8580" />
        <text x="360" y="270">
          Kích thước →
        </text>
        <text x="85" y="25">
          Độ ngọt ↑
        </text>
        {samples.map((s, i) => (
          <g key={i}>
            <circle
              cx={70 + s.x * 43}
              cy={235 - s.y * 20}
              r="12"
              fill={s.label === "Táo" ? "#11695d" : "#9a541e"}
            />
            <text x={83 + s.x * 43} y={240 - s.y * 20} fontSize="12">
              {s.label}
            </text>
          </g>
        ))}
        {result && (
          <line
            x1={70 + x * 43}
            y1={235 - y * 20}
            x2={70 + result.x * 43}
            y2={235 - result.y * 20}
            stroke="#7250a2"
            strokeDasharray="5 5"
          />
        )}
        <circle
          cx={70 + x * 43}
          cy={235 - y * 20}
          r="17"
          fill="none"
          stroke="#19354a"
          strokeWidth="3"
        />
        <text x={70 + x * 43} y={242 - y * 20} textAnchor="middle">
          ?
        </text>
      </Diagram>
      <div className="nt-controls">
        {[
          ["Kích thước", x, setX],
          ["Độ ngọt", y, setY],
        ].map(([label, value, setter]) => (
          <label key={String(label)}>
            {String(label)}: {Number(value)}
            <input
              data-testid={`ai-${label === "Kích thước" ? "size" : "sweet"}`}
              type="range"
              min="0"
              max="10"
              value={Number(value)}
              onChange={(e) => {
                (setter as typeof setX)(Number(e.target.value));
                setResult(undefined);
              }}
            />
          </label>
        ))}
        <button
          data-testid="ai-run"
          className="nt-primary"
          onClick={() => setResult(classify(x, y))}
        >
          Dự đoán
        </button>
      </div>
      <output className="nt-result" aria-live="polite">
        {result
          ? `Ví dụ gần nhất là ${result.label}. Dự đoán: ${result.label}.`
          : "Vòng tròn ? là mẫu mới. Thử đặt nó gần một nhóm dữ liệu."}
      </output>
    </DemoFrame>
  );
}
