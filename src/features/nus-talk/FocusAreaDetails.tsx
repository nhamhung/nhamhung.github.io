import type { CSSProperties } from "react";
import type { Area } from "./types";
import DemoHost from "./demos/DemoHost";
export default function FocusAreaDetails({
  area,
  motionAllowed,
  compact = false,
}: {
  area: Area;
  motionAllowed: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className="nt-detail"
      style={{ "--field": area.color } as CSSProperties}
    >
      <div className="nt-kicker nt-label">
        <span lang="en">{area.en}</span>
      </div>
      {!compact && (
        <>
          <h2>{area.vi}</h2>
          <p className="nt-lead">{area.explanation}</p>
        </>
      )}
      <DemoHost key={area.id} areaId={area.id} motionAllowed={motionAllowed} />
      <div className="nt-feature-copy">
        <strong style={{ color: area.color }}>Ứng dụng thực tế</strong> ·{" "}
        {area.application}
      </div>
      <div className="nt-careers">
        {area.careers.map((c) => (
          <article className="nt-card" key={c.title}>
            <span className="nt-label">VÍ DỤ NGHỀ NGHIỆP</span>
            <h3 lang="en">{c.title}</h3>
            <p>{c.work}</p>
          </article>
        ))}
      </div>
      {!compact && <p className="nt-feature-copy">◎ {area.interest}</p>}
      <p className="nt-caption" style={{ marginTop: 18 }}>
        Đây là một số công việc liên quan để các em tham khảo. Trong thực tế,
        mỗi công việc thường cần kiến thức và kỹ năng từ nhiều lĩnh vực.
      </p>
    </div>
  );
}
