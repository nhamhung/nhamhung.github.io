import { useCallback, useEffect, useRef, useState } from "react";
import { areas, slides, sources, verifiedOn } from "./content";
import { explore, initialSession, moveSlide, resume } from "./models";
import type { AreaId } from "./types";
import {
  useTalkFullscreen,
  useTalkKeyboard,
  useTalkMotion,
} from "./useTalkBrowser";
import PresentationView from "./PresentationView";
import FittedSlide from "./FittedSlide";
import ExplorationView from "./ExplorationView";
import "./talk.css";
export default function TalkPage({ onExit }: { onExit: () => void }) {
  const [session, setSession] = useState(initialSession);
  const root = useRef<HTMLDivElement>(null),
    content = useRef<HTMLElement>(null);
  const motion = useTalkMotion(),
    fullscreen = useTalkFullscreen(root);
  const previous = useCallback(() => setSession((s) => moveSlide(s, -1)), []),
    next = useCallback(() => setSession((s) => moveSlide(s, 1)), []);
  const open = useCallback(
    (id?: AreaId) => setSession((s) => explore(s, id)),
    [],
  );
  useTalkKeyboard(session.mode === "presentation", previous, next);
  useEffect(() => {
    content.current?.focus({ preventScroll: true });
    if (root.current) root.current.scrollTop = 0;
    root.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [session.slide, session.mode, session.area]);
  useEffect(() => {
    const title = document.title;
    document.title = "Khoa học máy tính · Tìm hiểu ngành và nghề nghiệp";
    return () => {
      document.title = title;
    };
  }, []);
  useEffect(() => {
    if (!fullscreen.presenting) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    content.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = before;
    };
  }, [fullscreen.presenting]);
  const scene = (
    <PresentationView
      slide={slides[session.slide]}
      onExplore={open}
      motionAllowed={motion.motionAllowed}
    />
  );
  const area = areas.find((a) => a.id === session.area)!;
  return (
    <div
      ref={root}
      lang="vi"
      className="nus-talk"
      data-presenting={fullscreen.presenting}
      data-view={session.mode}
      data-motion={motion.motionAllowed}
    >
      <a
        className="nt-skip"
        data-testid="talk-skip"
        href="#talk-content"
        onClick={(e) => {
          e.preventDefault();
          content.current?.focus();
        }}
      >
        Đến nội dung
      </a>
      <header className="nt-toolbar">
        <div className="nt-brand">
          <span>TÌM HIỂU CS</span> / ĐỊNH HƯỚNG NGHỀ NGHIỆP
        </div>
        <div className="nt-tools">
          <button data-testid="talk-exit" onClick={onExit}>
            ← Portfolio
          </button>
          <button
            data-testid="talk-mode"
            onClick={() =>
              session.mode === "presentation"
                ? open()
                : setSession((s) => resume(s))
            }
          >
            {session.mode === "presentation"
              ? "Khám phá 11 hướng"
              : "Quay lại bài trình bày"}
          </button>
          <button
            data-testid="talk-pause"
            aria-pressed={motion.paused}
            onClick={() => motion.setPaused(!motion.paused)}
          >
            {motion.paused ? "Tiếp tục chuyển động" : "Dừng chuyển động"}
          </button>
          <button
            data-testid="talk-fullscreen"
            onClick={fullscreen.toggle}
            aria-pressed={fullscreen.presenting}
            title={
              !fullscreen.supported
                ? "Trình duyệt có thể không hỗ trợ tính năng này"
                : undefined
            }
          >
            {fullscreen.presenting
              ? "Thoát trình chiếu"
              : "Trình chiếu toàn màn hình"}
          </button>
        </div>
      </header>
      {fullscreen.status && (
        <p
          className="nt-caption"
          role="status"
          style={{ padding: "12px 24px" }}
        >
          {fullscreen.status}
        </p>
      )}
      {motion.reduced && (
        <p className="nt-caption" style={{ padding: "8px 24px" }}>
          Đã giảm chuyển động theo cài đặt thiết bị. Các thử nghiệm vẫn dùng
          được.
        </p>
      )}
      <main
        ref={content}
        tabIndex={-1}
        id="talk-content"
        className={`nt-main ${session.mode === "presentation" ? "nt-presentation" : ""}`}
        aria-label={
          session.mode === "presentation"
            ? slides[session.slide].title
            : area.vi
        }
      >
        {session.mode === "presentation" ? (
          fullscreen.presenting ? (
            <FittedSlide>{scene}</FittedSlide>
          ) : (
            scene
          )
        ) : (
          <>
            <p className="nt-label nt-kicker">KHÁM PHÁ CÁC HƯỚNG CHUYÊN SÂU</p>
            <ExplorationView
              selected={session.area}
              motionAllowed={motion.motionAllowed}
              onSelect={(id) => setSession((s) => ({ ...s, area: id }))}
            />
          </>
        )}
        <details className="nt-source">
          <summary data-testid="talk-sources">
            Nguồn tham khảo và ghi chú
          </summary>
          <p>
            Bài chia sẻ sử dụng chương trình NUS làm ví dụ tham khảo. Các mô
            phỏng và nghề nghiệp là ví dụ định hướng. Đối chiếu nguồn:{" "}
            {verifiedOn}.
          </p>
          <p>
            11 hướng chuyên sâu theo danh sách NUS; HCI dành cho CS từ khoá 2025
            trở đi. Các yêu cầu học phần có thể khác theo khoá.
          </p>
          {sources.map((s) => (
            <a
              key={s.url}
              data-testid={`source-${sources.indexOf(s)}`}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              lang="en"
            >
              {s.title} ↗
            </a>
          ))}
        </details>
      </main>
      {session.mode === "presentation" && (
        <>
          <div className="nt-progress" aria-hidden="true">
            <div
              style={{
                width: `${((session.slide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
          <footer className="nt-footer">
            <span className="nt-caption">
              {String(session.slide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")} · ← → / Page Up, Page
              Down · Esc để thoát khi không thao tác điều khiển
            </span>
            <div className="nt-actions">
              <button
                data-testid="talk-previous"
                disabled={session.slide === 0}
                onClick={previous}
              >
                ← Trước
              </button>
              <button
                data-testid="talk-next"
                className="nt-primary"
                disabled={session.slide === slides.length - 1}
                onClick={next}
              >
                Tiếp theo →
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
