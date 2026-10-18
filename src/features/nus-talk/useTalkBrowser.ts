import { useCallback, useEffect, useState } from "react";
import type { RefObject } from "react";
export function shouldNavigate(event: KeyboardEvent) {
  return (
    !event.defaultPrevented &&
    !event.isComposing &&
    !event.altKey &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !(
      event.target instanceof Element &&
      event.target.closest(
        'input,select,textarea,button,a,[contenteditable="true"],[role="slider"],[role="combobox"],[role="listbox"],[role="menu"],[role="tablist"]',
      )
    )
  );
}
export function useTalkKeyboard(
  enabled: boolean,
  onPrevious: () => void,
  onNext: () => void,
) {
  useEffect(() => {
    if (!enabled) return;
    const listener = (e: KeyboardEvent) => {
      if (!shouldNavigate(e)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        onNext();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        onPrevious();
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [enabled, onPrevious, onNext]);
}
export function useTalkMotion() {
  const [paused, setPaused] = useState(false),
    [reduced, setReduced] = useState(
      () =>
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
        false,
    ),
    [visible, setVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const motion = () => setReduced(query?.matches ?? false),
      visibility = () => setVisible(!document.hidden);
    query?.addEventListener("change", motion);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      query?.removeEventListener("change", motion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return {
    paused,
    setPaused,
    reduced,
    motionAllowed: !paused && !reduced && visible,
  };
}
export function useTalkFullscreen(ref: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(false),
    [presenting, setPresenting] = useState(false),
    [status, setStatus] = useState("");
  const supported =
    typeof document.documentElement.requestFullscreen === "function";
  useEffect(() => {
    const owner = ref.current;
    const update = () => {
      const owns = document.fullscreenElement === ref.current;
      setActive(owns);
      setPresenting(owns);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !document.fullscreenElement) {
        setPresenting(false);
        setStatus("");
      }
    };
    window.addEventListener("keydown", escape);
    document.addEventListener("fullscreenchange", update);
    return () => {
      document.removeEventListener("fullscreenchange", update);
      window.removeEventListener("keydown", escape);
      if (
        owner &&
        document.fullscreenElement === owner &&
        document.exitFullscreen
      )
        void document.exitFullscreen().catch(() => undefined);
    };
  }, [ref]);
  const toggle = useCallback(async () => {
    if (presenting) {
      if (document.fullscreenElement === ref.current) {
        try {
          await document.exitFullscreen();
        } catch {
          return;
        }
      }
      setPresenting(false);
      setStatus("");
      return;
    }
    setPresenting(true);
    if (!ref.current?.requestFullscreen) {
      setStatus(
        "Trình duyệt không hỗ trợ toàn màn hình. Đang trình chiếu vừa cửa sổ; nhấn Esc để thoát.",
      );
      return;
    }
    try {
      if (document.fullscreenElement === ref.current)
        await document.exitFullscreen();
      else await ref.current.requestFullscreen();
      setStatus("");
    } catch {
      setStatus(
        "Không thể bật toàn màn hình. Đang trình chiếu vừa cửa sổ; nhấn Esc để thoát.",
      );
    }
  }, [ref, presenting]);
  return { active, presenting, supported, status, toggle };
}
