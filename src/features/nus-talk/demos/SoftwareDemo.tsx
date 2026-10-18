import { useState } from "react";
import DemoFrame from "./DemoFrame";
export default function SoftwareDemo() {
  const [fixed, setFixed] = useState(false),
    [tested, setTested] = useState(false),
    [released, setReleased] = useState(false);
  return (
    <DemoFrame
      title="Từ thay đổi đến phát hành"
      onReset={() => {
        setFixed(false);
        setTested(false);
        setReleased(false);
      }}
      note="Một kiểm thử minh hoạ không chứng minh ứng dụng thật không còn lỗi. Không triển khai dịch vụ bên ngoài."
    >
      <div className="nt-pipeline">
        <div className="nt-stage">
          Thay đổi
          <br />
          <span className="nt-code">2 + 2 = {fixed ? 4 : 5}</span>
        </div>
        <div className={`nt-stage ${tested ? "active" : ""}`}>
          Kiểm thử
          <br />
          {tested ? (fixed ? "✓ Đạt" : "× Không đạt") : "Chưa chạy"}
        </div>
        <div className={`nt-stage ${released ? "active" : ""}`}>
          Phát hành
          <br />
          {released ? "✓ Hoàn tất" : "Đang chờ"}
        </div>
      </div>
      <div className="nt-controls">
        <button
          data-testid="software-test"
          onClick={() => {
            setTested(true);
            setReleased(false);
          }}
        >
          Chạy kiểm thử
        </button>
        <button
          data-testid="software-fix"
          disabled={fixed}
          onClick={() => {
            setFixed(true);
            setTested(false);
            setReleased(false);
          }}
        >
          Sửa lỗi
        </button>
        <button
          data-testid="software-release"
          className="nt-primary"
          disabled={!tested || !fixed || released}
          onClick={() => setReleased(true)}
        >
          Phát hành mẫu
        </button>
      </div>
      <output className="nt-result" aria-live="polite">
        {released
          ? "Bản sửa đã qua kiểm thử hiện tại và được phát hành trong mô hình."
          : tested
            ? fixed
              ? "Kỳ vọng 4, thực tế 4. Có thể phát hành mẫu."
              : "Kỳ vọng 4, thực tế 5. Chặn phát hành để sửa lỗi."
            : "Thử chạy kiểm thử trước khi phát hành."}
      </output>
    </DemoFrame>
  );
}
