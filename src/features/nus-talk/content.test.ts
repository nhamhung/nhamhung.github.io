import { expect, it } from "vitest";
import { areas, slides, sources } from "./content";
import { areaIds } from "./types";
it("covers every field and narrative reference", () => {
  expect(areas.map((a) => a.id)).toEqual([...areaIds]);
  expect(new Set(slides.map((s) => s.id)).size).toBe(12);
  expect(slides.slice(0, 4).map((s) => s.id)).toEqual([
    "opening",
    "speaker",
    "cs-overview",
    "comparison",
  ]);
  expect(slides.some((slide) => slide.id === "nus")).toBe(false);
  expect(
    slides.filter((slide) => slide.areaId).map((slide) => slide.areaId),
  ).toEqual(["algorithms", "ai", "graphics", "networks", "security"]);
  for (const a of areas) {
    expect(a.careers.length).toBeGreaterThanOrEqual(2);
    expect(a.explanation).toBeTruthy();
  }
  for (const s of slides) if (s.areaId) expect(areaIds).toContain(s.areaId);
  expect(
    sources.every((s) => s.url.startsWith("https://www.comp.nus.edu.sg/")),
  ).toBe(true);
});
