import { useState } from "react";
import { lookup } from "../models";
import DemoFrame from "./DemoFrame";
const products = [
  "Bút",
  "Vở",
  "Thước",
  "Balo",
  "Sách",
  "Màu",
  "Máy tính",
  "Đèn",
];
export default function DatabaseDemo() {
  const [target, setTarget] = useState(7),
    [ran, setRan] = useState(false);
  const result = lookup(target)!;
  return (
    <DemoFrame
      title="Tìm trong danh mục"
      onReset={() => {
        setTarget(7);
        setRan(false);
      }}
      note="Ví dụ dùng tìm kiếm nhị phân trên dữ liệu đã sắp xếp để minh hoạ lợi ích của việc tổ chức dữ liệu. Chỉ mục trong cơ sở dữ liệu thực tế phức tạp hơn."
    >
      <div className="nt-tiles">
        {products.map((p, i) => (
          <div
            key={p}
            className={`nt-tile ${ran && i + 1 === target ? "active" : ""}`}
          >
            {i + 1}
            <br />
            {p}
          </div>
        ))}
      </div>
      <div className="nt-controls">
        <label>
          Mã sản phẩm{" "}
          <select
            data-testid="database-target"
            value={target}
            onChange={(e) => {
              setTarget(Number(e.target.value));
              setRan(false);
            }}
          >
            {products.map((p, i) => (
              <option value={i + 1} key={p}>
                {i + 1} · {p}
              </option>
            ))}
          </select>
        </label>
        <button
          data-testid="database-run"
          className="nt-primary"
          onClick={() => setRan(true)}
        >
          So sánh cách tìm
        </button>
      </div>
      <output className="nt-result" aria-live="polite">
        {ran
          ? `Tìm lần lượt: ${result.scan.join(" → ")} (${result.scan.length} bước)\nTìm kiếm nhị phân: ${result.indexed.join(" → ")} (${result.indexed.length} bước)\nCùng tìm thấy: ${products[target - 1]}.`
          : "Chọn một sản phẩm để so sánh số bước tìm kiếm theo hai cách."}
      </output>
    </DemoFrame>
  );
}
