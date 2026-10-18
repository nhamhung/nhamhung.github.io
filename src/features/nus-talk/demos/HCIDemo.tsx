import { useState } from "react";
import DemoFrame from "./DemoFrame";
export default function HCIDemo() {
  const [simple, setSimple] = useState(false),
    [step, setStep] = useState(0);
  const done = step >= (simple ? 1 : 3);
  return (
    <DemoFrame
      title="Tìm thời khoá biểu"
      onReset={() => {
        setSimple(false);
        setStep(0);
      }}
      note="Kết quả chỉ ghi nhận số lần bấm trong lượt thử, không đại diện cho một nghiên cứu về người dùng."
    >
      <div className="nt-controls">
        <label>
          Kiểu giao diện{" "}
          <select
            data-testid="hci-variant"
            value={simple ? "clear" : "nested"}
            onChange={(e) => {
              setSimple(e.target.value === "clear");
              setStep(0);
            }}
          >
            <option value="nested">Menu nhiều tầng</option>
            <option value="clear">Truy cập trực tiếp</option>
          </select>
        </label>
      </div>
      <div className="nt-card" style={{ marginTop: 24 }}>
        <p className="nt-label">CỔNG HỌC SINH / NHIỆM VỤ: XEM LỊCH HỌC</p>
        {done ? (
          <>
            <h3>Thứ hai · Toán, Văn, Tiếng Anh</h3>
            <p>Các em đã tìm thấy thời khoá biểu.</p>
          </>
        ) : (
          <button
            data-testid="hci-task"
            className="nt-primary"
            onClick={() => setStep((s) => s + 1)}
          >
            {simple
              ? "Xem thời khoá biểu"
              : ["Mở menu", "Học tập", "Thời khoá biểu"][step]}
          </button>
        )}
      </div>
      <output className="nt-result" aria-live="polite">
        {done
          ? `Hoàn thành với ${step} lần bấm. ${simple ? "Nút truy cập trực tiếp giúp tìm lịch học ít bước hơn." : "Đường đi: Menu → Học tập → Thời khoá biểu."}`
          : `Đã bấm ${step} lần. Thử hoàn thành cùng nhiệm vụ ở cả hai giao diện.`}
      </output>
    </DemoFrame>
  );
}
