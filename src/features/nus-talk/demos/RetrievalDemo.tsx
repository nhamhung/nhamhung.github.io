import { useState } from "react";
import { retrieve, thumbnails } from "../models";
import DemoFrame from "./DemoFrame";
export default function RetrievalDemo() {
  const [query, setQuery] = useState("a"),
    [ran, setRan] = useState(false);
  const results = retrieve(query);
  return (
    <DemoFrame
      title="Tìm bằng màu sắc"
      onReset={() => {
        setQuery("a");
        setRan(false);
      }}
      note="Kết quả được sắp xếp theo độ giống nhau về màu RGB; mô hình chưa phân tích nội dung của hình ảnh."
    >
      <div className="nt-tiles">
        {thumbnails.map((t, i) => (
          <button
            key={t.id}
            data-testid={`retrieval-${t.id}`}
            aria-pressed={query === t.id}
            onClick={() => {
              setQuery(t.id);
              setRan(false);
            }}
            style={{ borderColor: query === t.id ? "#19354a" : "#7a9188" }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                color: `rgb(${t.rgb.map((v) => v * 255).join(" ")})`,
                fontSize: 42,
              }}
            >
              {["●", "◆", "▲", "■", "⬟", "●"][i]}
            </span>
            {t.name}
            <small style={{ display: "block" }}>RGB {t.rgb.join(", ")}</small>
          </button>
        ))}
      </div>
      <button
        data-testid="retrieval-run"
        className="nt-primary"
        onClick={() => setRan(true)}
      >
        Tìm ảnh có màu gần nhất
      </button>
      <output className="nt-result" aria-live="polite">
        {ran
          ? results
              .map(
                (t, i) => `${i + 1}. ${t.name} · khoảng cách ${t.d.toFixed(2)}`,
              )
              .join("\n")
          : "Chọn một mẫu. Những kết quả nào sẽ giống nó nhất về màu?"}
      </output>
    </DemoFrame>
  );
}
