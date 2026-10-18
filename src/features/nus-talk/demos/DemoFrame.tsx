import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
export default function DemoFrame({
  title,
  children,
  onReset,
  note,
}: {
  title: string;
  children: ReactNode;
  onReset: () => void;
  note?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const anchor = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!expanded) return;
    const previous = document.activeElement as HTMLElement | null;
    close.current?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        setExpanded(false);
      }
    };
    window.addEventListener("keydown", escape, true);
    return () => {
      window.removeEventListener("keydown", escape, true);
      previous?.focus();
    };
  }, [expanded]);
  const panel = (
    <section className="nt-demo" aria-label={title}>
      <div className="nt-demo-top">
        <span className="nt-label">THỬ TƯƠNG TÁC / {title}</span>
        <div className="nt-actions">
          <button
            ref={expanded ? close : undefined}
            data-testid="demo-expand"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Đóng demo · Esc" : "Phóng to demo ⛶"}
          </button>
          <button data-testid="demo-reset" onClick={onReset}>
            ↺ Làm lại
          </button>
        </div>
      </div>
      {children}
      <p className="nt-demo-note">
        Đây là mô phỏng đơn giản để minh hoạ kiến thức. {note}
      </p>
    </section>
  );
  const host = anchor.current?.closest(".nus-talk");
  return (
    <div ref={anchor} className="nt-demo-anchor">
      {expanded && host
        ? createPortal(
            <div
              className="nt-demo-overlay"
              role="dialog"
              aria-modal="true"
              aria-label={`Demo: ${title}`}
              onKeyDown={(event) => {
                if (event.key === "Tab") {
                  const controls = [
                    ...event.currentTarget.querySelectorAll<HTMLElement>(
                      'button,select,input,a[href],[tabindex="0"]',
                    ),
                  ].filter((item) => !item.hasAttribute("disabled"));
                  const first = controls[0],
                    last = controls[controls.length - 1];
                  if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                  } else if (
                    !event.shiftKey &&
                    document.activeElement === last
                  ) {
                    event.preventDefault();
                    first?.focus();
                  }
                }
              }}
            >
              {panel}
            </div>,
            host,
          )
        : panel}
    </div>
  );
}
