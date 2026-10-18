import type { CSSProperties } from "react";
import { areas, speakerHighlights } from "./content";
import { profile } from "../../data/profile";
import type { AreaId, Slide } from "./types";
import FocusAreaDetails from "./FocusAreaDetails";
export function FocusMap({ onExplore }: { onExplore: (id: AreaId) => void }) {
  return (
    <div className="nt-map">
      {areas.map((a) => (
        <button
          className="nt-area-choice"
          data-testid={`map-${a.id}`}
          key={a.id}
          onClick={() => onExplore(a.id)}
          style={{ "--field": a.color } as CSSProperties}
        >
          <span className="nt-symbol" aria-hidden="true">
            {a.symbol}
          </span>
          <span>
            <strong>{a.vi}</strong>
            <small lang="en">{a.en}</small>
          </span>
        </button>
      ))}
    </div>
  );
}
function Orbit() {
  return (
    <div className="nt-orbit" aria-hidden="true">
      <div className="nt-orbit-ring" />
      <div className="nt-orbit-ring" />
      <div className="nt-orbit-ring" />
      <div className="nt-orbit-core">✳</div>
      <span className="nt-orbit-label">ĐẶT CÂU HỎI</span>
      <span className="nt-orbit-label">THỬ LÀM MỘT DỰ ÁN</span>
      <span className="nt-orbit-label">GIẢI QUYẾT VẤN ĐỀ</span>
    </div>
  );
}
export default function PresentationView({
  slide,
  onExplore,
  motionAllowed,
}: {
  slide: Slide;
  onExplore: (id?: AreaId) => void;
  motionAllowed: boolean;
}) {
  const heading = (
    <>
      <p className="nt-label nt-kicker">{slide.eyebrow}</p>
      <h1>{slide.title}</h1>
      <p className="nt-lead">{slide.body}</p>
    </>
  );
  if (slide.areaId) {
    const area = areas.find((a) => a.id === slide.areaId)!;
    return (
      <section className="nt-slide">
        {heading}
        <FocusAreaDetails area={area} compact motionAllowed={motionAllowed} />
      </section>
    );
  }
  if (slide.id === "opening")
    return (
      <section className="nt-slide nt-two">
        <div>
          {heading}
          <div className="nt-actions">
            <button
              data-testid="opening-explore"
              className="nt-primary"
              onClick={() => onExplore()}
            >
              Khám phá 11 hướng chuyên sâu ↗
            </button>
            <span className="nt-caption">
              Giới thiệu ngành và định hướng nghề nghiệp
            </span>
          </div>
          <p className="nt-caption" style={{ marginTop: 30 }}>
            KHOA HỌC MÁY TÍNH · HỌC GÌ, LÀM GÌ?
          </p>
        </div>
        <Orbit />
      </section>
    );
  if (slide.id === "speaker")
    return (
      <section className="nt-slide nt-speaker-scene">
        {heading}
        <div className="nt-speaker-grid">
          <figure className="nt-speaker-portrait">
            <img
              src={profile.profileImage}
              alt="Nhâm Quốc Hùng — ảnh chân dung trên portfolio"
              width="400"
              height="400"
            />
            <figcaption>
              <span className="nt-label">NGƯỜI CHIA SẺ</span>
              <strong>{profile.name}</strong>
              <span>Kỹ sư dữ liệu · Tư vấn giáo dục</span>
            </figcaption>
          </figure>
          <div className="nt-speaker-highlights">
            {speakerHighlights.map((item) => (
              <article className="nt-card" key={item.label}>
                <span className="nt-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="nt-caption nt-speaker-note">
          Kết hợp kinh nghiệm kỹ thuật với tư vấn giáo dục để giúp các em hiểu
          ngành, đánh giá lựa chọn và xây dựng lộ trình phù hợp.
        </p>
      </section>
    );
  if (slide.id === "cs-overview")
    return (
      <section className="nt-slide nt-overview-scene">
        {heading}
        <div className="nt-overview-grid">
          {[
            [
              "01 / BIỂU DIỄN THÔNG TIN",
              "Máy tính cần biết gì?",
              "Biểu diễn văn bản, hình ảnh hay lịch học thành dữ liệu có cấu trúc để lưu trữ và xử lý.",
            ],
            [
              "02 / THIẾT KẾ LỜI GIẢI",
              "Giải bài toán như thế nào?",
              "Xây dựng thuật toán, kiểm tra tính đúng đắn và đánh giá thời gian, bộ nhớ cần sử dụng.",
            ],
            [
              "03 / XÂY DỰNG HỆ THỐNG",
              "Làm sao để dùng được trong thực tế?",
              "Kết hợp phần mềm, dữ liệu và hệ thống để sản phẩm đáng tin cậy, an toàn và dễ sử dụng.",
            ],
          ].map(([label, title, body]) => (
            <article className="nt-card" key={label}>
              <span className="nt-label">{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <article className="nt-card nt-overview-example">
          <span className="nt-label">VÍ DỤ GẦN GŨI / XẾP THỜI KHOÁ BIỂU</span>
          <h3>Từ một nhu cầu ở trường đến một giải pháp tính toán</h3>
          <ol
            className="nt-overview-flow"
            aria-label="Các bước xây dựng công cụ xếp thời khoá biểu"
          >
            <li>
              <strong>Dữ liệu</strong>
              <span>Lớp học, giáo viên, phòng và thời gian trống.</span>
            </li>
            <li>
              <strong>Thuật toán</strong>
              <span>
                Tìm cách xếp lịch không trùng giáo viên hoặc phòng học.
              </span>
            </li>
            <li>
              <strong>Phần mềm</strong>
              <span>
                Cho phép xem, điều chỉnh và kiểm tra lịch khi có thay đổi.
              </span>
            </li>
          </ol>
        </article>
        <aside className="nt-common-ground">
          <strong>Vai trò của lập trình</strong>
          <p>
            Lập trình là công cụ để diễn đạt và thử nghiệm lời giải. Học CS còn
            giúp các em xác định đúng vấn đề, giải thích vì sao lời giải đúng và
            đánh giá giải pháp có hiệu quả, phù hợp hay không.
          </p>
        </aside>
      </section>
    );
  if (slide.id === "comparison")
    return (
      <section className="nt-slide nt-comparison-scene">
        {heading}
        <div className="nt-compare-grid">
          {[
            {
              en: "COMPUTER SCIENCE",
              vi: "Khoa học máy tính",
              accent: "#205e99",
              focus:
                "Nghiên cứu thuật toán, dữ liệu, phần mềm và các nguyên lý của hệ thống tính toán.",
              steps: [
                "Dữ liệu đầu vào",
                "Thuật toán tìm đường",
                "Quyết định di chuyển",
              ],
              example:
                "Với robot giao hàng: xử lý thông tin về môi trường, tìm tuyến đường và lựa chọn hành động phù hợp.",
              careers: "Kỹ sư phần mềm · Kỹ sư AI",
            },
            {
              en: "COMPUTER ENGINEERING",
              vi: "Kỹ thuật máy tính",
              accent: "#11695d",
              focus:
                "Thiết kế và tích hợp phần cứng, hệ thống nhúng và phần mềm để thiết bị hoạt động hiệu quả.",
              steps: ["Cảm biến", "Bộ xử lý", "Động cơ"],
              example:
                "Với cùng robot: kết nối cảm biến, thiết kế bộ xử lý và lập trình hệ thống điều khiển chuyển động.",
              careers: "Kỹ sư hệ thống nhúng · Kỹ sư phần cứng",
            },
          ].map((field) => (
            <article
              className="nt-card nt-compare-card"
              key={field.en}
              style={{ "--field": field.accent } as CSSProperties}
            >
              <span className="nt-label" lang="en">
                {field.en}
              </span>
              <h2>{field.vi}</h2>
              <p className="nt-compare-focus">{field.focus}</p>
              <ol
                className="nt-explained-flow"
                aria-label={`Ví dụ về ${field.vi}`}
              >
                {field.steps.map((step, i) => (
                  <li key={step}>
                    <span className="nt-flow-number" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <strong>{step}</strong>
                    {i < 2 && (
                      <span className="nt-flow-arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="nt-compare-example">{field.example}</p>
              <div className="nt-compare-careers">
                <span className="nt-label">VÍ DỤ NGHỀ NGHIỆP</span>
                <strong>{field.careers}</strong>
              </div>
            </article>
          ))}
        </div>
        <aside className="nt-common-ground">
          <strong>Nền tảng chung</strong>
          <p>
            Cả hai ngành đều sử dụng lập trình, kiến thức hệ thống máy tính và
            tư duy giải quyết vấn đề. Trong thực tế, kỹ sư CS và CE thường phối
            hợp để phát triển một sản phẩm hoàn chỉnh.
          </p>
        </aside>
      </section>
    );
  if (slide.id === "map")
    return (
      <section className="nt-slide">
        {heading}
        <FocusMap onExplore={onExplore} />
        <p className="nt-caption" style={{ marginTop: 22 }}>
          Chọn một lĩnh vực để xem ứng dụng và nghề nghiệp liên quan.
          Human-Computer Interaction áp dụng cho CS từ khoá 2025 trở đi.
        </p>
      </section>
    );
  if (slide.id === "careers")
    return (
      <section className="nt-slide">
        {heading}
        <div className="nt-map">
          {[
            [
              "Thiết kế trò chơi và giao diện",
              "graphics",
              "Ví dụ: xây dựng trò chơi, thiết kế giao diện ứng dụng và phát triển công cụ vẽ.",
            ],
            [
              "Dạy máy tính nhận biết và dự đoán",
              "ai",
              "Ví dụ: nhận diện hình ảnh, gợi ý bài hát và dự báo nhu cầu mua sắm.",
            ],
            [
              "Giữ ứng dụng hoạt động ổn định",
              "networks",
              "Ví dụ: giúp tin nhắn đến đúng người, bảo vệ tài khoản và giữ ứng dụng hoạt động khi nhiều người cùng dùng.",
            ],
          ].map(([title, id, body]) => (
            <article className="nt-card" key={id}>
              <span className="nt-label">GỢI Ý HƯỚNG KHÁM PHÁ</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <button
                data-testid={`career-${id}`}
                onClick={() => onExplore(id as AreaId)}
              >
                Khám phá lĩnh vực liên quan ↗
              </button>
            </article>
          ))}
        </div>
        <p className="nt-feature-copy">
          Các em chưa cần quyết định nghề nghiệp ngay hôm nay. Hãy thử một dự án
          nhỏ, tìm hiểu trải nghiệm của người trong ngành và xem mình hứng thú
          với loại công việc nào.
        </p>
        <p className="nt-caption">
          Mỗi công việc có thể cần kiến thức từ nhiều lĩnh vực. Các em có thể
          tìm hiểu dần qua dự án, môn học và trải nghiệm thực tế.
        </p>
      </section>
    );
  return (
    <section className="nt-slide">
      <div className="nt-two">
        <div>
          {heading}
          <button
            data-testid="closing-explore"
            className="nt-primary"
            onClick={() => onExplore()}
          >
            Chọn một lĩnh vực để tìm hiểu thêm ↗
          </button>
        </div>
        <Orbit />
      </div>
      <div className="nt-challenge">
        <span className="nt-label" style={{ color: "#805d16" }}>
          THỬ BẮT ĐẦU NGAY TUẦN NÀY
        </span>
        <h3 style={{ marginTop: 12 }}>
          Chọn một vấn đề ở trường và phác thảo giải pháp.
        </h3>
        <p style={{ marginTop: 14 }}>
          Thông tin lịch học khó tra cứu? Căn tin thường xuyên phải xếp hàng?
          Các em muốn xây dựng một trò chơi học tập? Hãy chọn một việc muốn cải
          thiện, phác thảo cách giải quyết và trao đổi với bạn bè.
        </p>
        <strong>Các em muốn giúp ai? Người đó đang gặp khó khăn gì?</strong>
      </div>
    </section>
  );
}
