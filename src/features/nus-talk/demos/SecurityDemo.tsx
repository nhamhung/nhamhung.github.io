import { useState } from "react";
import { encodeMessage } from "../models";
import DemoFrame from "./DemoFrame";
export default function SecurityDemo() {
  const [protectedMode, setProtected] = useState(false),
    [sent, setSent] = useState(false);
  return (
    <DemoFrame
      title="Kênh tin nhắn"
      onReset={() => {
        setProtected(false);
        setSent(false);
      }}
      note="XOR với khoá cố định 42 chỉ để minh hoạ, không an toàn cho tin nhắn thật."
    >
      <div className="nt-pipeline">
        <div className="nt-stage">
          Người gửi
          <br />
          <strong>HELLO</strong>
        </div>
        <div className="nt-stage active">
          {protectedMode ? "◇ Mã hoá mẫu" : "Kênh công khai"}
          <div className="nt-code">
            {sent ? (protectedMode ? encodeMessage("HELLO") : "HELLO") : "…"}
          </div>
        </div>
        <div className="nt-stage">
          Người nhận
          <br />
          <strong>{sent ? "HELLO" : "Chưa nhận"}</strong>
        </div>
      </div>
      <div className="nt-controls">
        <label>
          <input
            data-testid="security-protect"
            type="checkbox"
            checked={protectedMode}
            onChange={(e) => {
              setProtected(e.target.checked);
              setSent(false);
            }}
          />{" "}
          Bật mã hoá minh hoạ
        </label>
        <button
          data-testid="security-send"
          className="nt-primary"
          onClick={() => setSent(true)}
        >
          Gửi tin
        </button>
      </div>
      <output className="nt-result" aria-live="polite">
        {sent
          ? protectedMode
            ? "Trên kênh là các byte XOR; người nhận đảo phép XOR để đọc HELLO. Khoá cố định này không bảo vệ tin nhắn thật."
            : "Người quan sát kênh có thể đọc ngay HELLO."
          : "Thử gửi cùng thông điệp qua hai trạng thái của kênh."}
      </output>
    </DemoFrame>
  );
}
