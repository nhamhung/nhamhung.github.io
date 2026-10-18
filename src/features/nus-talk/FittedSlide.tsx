import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export function fitSlide(width: number, height: number, slideHeight: number) {
  return Math.max(0, Math.min(width / 1440, height / Math.max(1, slideHeight)));
}

/** Measure the full scene, including dynamic demos, before scaling it as a unit. */
export default function FittedSlide({ children }: { children: ReactNode }) {
  const frame = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ scale: 1, height: 900 });
  useLayoutEffect(() => {
    const measure = () => {
      if (!frame.current || !canvas.current) return;
      const height = canvas.current.offsetHeight;
      const scale = fitSlide(
        frame.current.clientWidth,
        frame.current.clientHeight,
        height,
      );
      setLayout((old) =>
        old.scale === scale && old.height === height ? old : { scale, height },
      );
    };
    measure();
    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(measure);
    if (frame.current) observer?.observe(frame.current);
    if (canvas.current) observer?.observe(canvas.current);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [children]);
  return (
    <div className="nt-fit-frame" ref={frame} data-testid="talk-fit-frame">
      <div
        className="nt-fit-box"
        style={{
          width: 1440 * layout.scale,
          height: layout.height * layout.scale,
        }}
      >
        <div
          ref={canvas}
          className="nt-fit-canvas"
          style={{ transform: `scale(${layout.scale})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
