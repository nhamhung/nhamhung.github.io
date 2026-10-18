import { useState } from "react";
import { expressions } from "../models";
import DemoFrame from "./DemoFrame";
export default function LanguagesDemo() {
  const [expression, setExpression] = useState(0),
    [step, setStep] = useState(0);
  const stages = [
    "Biểu thức",
    "Tách các thành phần",
    "Xác định cấu trúc và thứ tự tính",
    "Tính biểu thức trong ngoặc",
    "Kết quả",
  ];
  return (
    <DemoFrame
      title="Máy tính xử lý biểu thức"
      onReset={() => {
        setExpression(0);
        setStep(0);
      }}
      note="Hai ví dụ cố định minh hoạ ý nghĩa và thứ tự tính, không chạy mã do người dùng nhập."
    >
      <label className="nt-controls">
        Biểu thức{" "}
        <select
          data-testid="language-expression"
          value={expression}
          onChange={(e) => {
            setExpression(Number(e.target.value));
            setStep(0);
          }}
        >
          {expressions.map((e, i) => (
            <option value={i} key={i}>
              {e[0]}
            </option>
          ))}
        </select>
      </label>
      <div className="nt-pipeline">
        {stages.map((s, i) => (
          <div
            key={s}
            className={`nt-stage ${step === i ? "active" : ""}`}
            style={{ padding: 12, fontSize: 13 }}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="nt-big-value nt-code">
        {expressions[expression][step]}
      </div>
      <button
        data-testid="language-step"
        className="nt-primary"
        disabled={step === 4}
        onClick={() => setStep((s) => Math.min(4, s + 1))}
      >
        Bước tiếp theo
      </button>
      <output className="nt-result" aria-live="polite">
        {stages[step]}: {expressions[expression][step]}
        {step === 4
          ? " · Dấu ngoặc và quy tắc ưu tiên quyết định ý nghĩa."
          : ""}
      </output>
    </DemoFrame>
  );
}
