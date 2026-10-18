import { expect, it } from "vitest";
import { slides } from "./content";
import {
  shortestPath,
  routeEdges,
  networkEdges,
  classify,
  lookup,
  encodeMessage,
  retrieve,
  schedule,
  brightness,
  initialSession,
  moveSlide,
  explore,
  resume,
} from "./models";
it("computes weighted routes and handles unavailable destinations", () => {
  expect(shortestPath(routeEdges, "F")).toEqual({
    path: ["A", "B", "C", "E", "F"],
    cost: 7,
  });
  expect(shortestPath(networkEdges, "D", ["B"]).path).toEqual(["A", "C", "D"]);
  expect(shortestPath(networkEdges, "D", ["D"]).path).toEqual([]);
});
it("keeps classification and search calculations consistent", () => {
  expect(classify(2, 3)?.label).toBe("Táo");
  expect(classify(8, 7)?.label).toBe("Xoài");
  expect(classify(NaN, 2)).toBeUndefined();
  expect(lookup(7)).toEqual({
    scan: [1, 2, 3, 4, 5, 6, 7],
    indexed: [4, 6, 7],
  });
  expect(lookup(9)).toBeUndefined();
  expect(retrieve("a")[0].id).toBe("d");
  expect(encodeMessage("HELLO")).toBe("62 6f 66 66 65");
});
it("models bounded light and ideal work distribution", () => {
  expect(brightness(0, 0)).toBe(1);
  expect(brightness(180, 0)).toBe(0.2);
  expect(
    schedule(4)
      .flat()
      .sort((a, b) => a - b),
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(schedule(3)).toEqual([]);
});
it("bounds slides and retains position when exploring a non-featured field", () => {
  expect(moveSlide(initialSession, -1).slide).toBe(0);
  const s = moveSlide(
    initialSession,
    slides.findIndex((s) => s.areaId === "ai"),
  );
  expect(explore(s).area).toBe("ai");
  expect(resume(explore(s, "networks")).slide).toBe(s.slide);
  expect(moveSlide(s, 99).slide).toBe(slides.length - 1);
  for (const area of ["algorithms", "ai", "graphics"]) {
    const position = slides.findIndex((slide) => slide.areaId === area);
    expect(explore(moveSlide(initialSession, position)).area).toBe(area);
  }
});
