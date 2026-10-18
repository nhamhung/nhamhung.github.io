import { useState } from "react";
import { brightness } from "../models";
import DemoFrame from "./DemoFrame";
import { Diagram } from "./Diagram";
export default function GraphicsDemo() {
  const [angle, setAngle] = useState(45);
  const light = (normal: number) =>
    `rgb(${Math.round(brightness(angle, normal) * 100)} ${Math.round(brightness(angle, normal) * 195)} ${Math.round(brightness(angle, normal) * 215)})`;
  return (
    <DemoFrame
      title="Thay đổi hướng chiếu sáng"
      onReset={() => setAngle(45)}
      note="Ánh sáng khuếch tán + nền sáng 20%; chưa mô phỏng vật liệu và bóng đổ đầy đủ."
    >
      <Diagram label={`Khối lập phương với góc chiếu sáng ${angle} độ`}>
        <ellipse cx="300" cy="250" rx="130" ry="15" fill="#d4dfd7" />
        <polygon
          points="300,45 415,100 300,160 185,100"
          fill={light(270)}
          stroke="#537185"
        />
        <polygon
          points="185,100 300,160 300,255 185,195"
          fill={light(180)}
          stroke="#537185"
        />
        <polygon
          points="300,160 415,100 415,195 300,255"
          fill={light(0)}
          stroke="#537185"
        />
        <line
          x1="300"
          y1="140"
          x2={300 + 180 * Math.cos((angle * Math.PI) / 180)}
          y2={140 - 110 * Math.sin((angle * Math.PI) / 180)}
          stroke="#a66b0e"
          strokeDasharray="6 7"
        />
        <circle
          cx={300 + 180 * Math.cos((angle * Math.PI) / 180)}
          cy={140 - 110 * Math.sin((angle * Math.PI) / 180)}
          r="16"
          fill="#a66b0e"
        />
      </Diagram>
      <label className="nt-controls">
        Góc ánh sáng: {angle}°{" "}
        <input
          data-testid="graphics-angle"
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
        />
      </label>
      <output className="nt-result">
        Mặt hướng phải nhận {Math.round(brightness(angle, 0) * 100)}% độ sáng
        trong mô hình. Xoay đèn để thay đổi cảm giác về khối.
      </output>
    </DemoFrame>
  );
}
