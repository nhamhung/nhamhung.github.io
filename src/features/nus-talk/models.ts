import { areaIds, type AreaId, type Session } from "./types";
import { slides } from "./content";
export type Edge = [string, string, number];
export const routeEdges: Edge[] = [
  ["A", "B", 2],
  ["A", "C", 5],
  ["B", "C", 1],
  ["B", "D", 4],
  ["C", "E", 2],
  ["D", "E", 1],
  ["D", "F", 3],
  ["E", "F", 2],
];
export function shortestPath(
  edges: Edge[],
  target: string,
  disabled: string[] = [],
) {
  const nodes = [...new Set(edges.flatMap(([a, b]) => [a, b]))]
    .filter((n) => !disabled.includes(n))
    .sort();
  const distance: Record<string, number> = Object.fromEntries(
    nodes.map((n) => [n, Infinity]),
  );
  const previous: Record<string, string> = {};
  const pending = new Set(nodes);
  if (!pending.has("A") || !pending.has(target))
    return { path: [] as string[], cost: Infinity };
  distance.A = 0;
  while (pending.size) {
    const n = [...pending].sort(
      (a, b) => distance[a] - distance[b] || a.localeCompare(b),
    )[0];
    pending.delete(n);
    if (!Number.isFinite(distance[n])) break;
    for (const [a, b, w] of edges) {
      const next = a === n ? b : b === n ? a : undefined;
      if (next && pending.has(next) && distance[n] + w < distance[next]) {
        distance[next] = distance[n] + w;
        previous[next] = n;
      }
    }
  }
  if (!Number.isFinite(distance[target]))
    return { path: [] as string[], cost: Infinity };
  const path = [target];
  while (path[0] !== "A") path.unshift(previous[path[0]]);
  return { path, cost: distance[target] };
}
export const samples = [
  { x: 2, y: 3, label: "Táo" },
  { x: 3, y: 4, label: "Táo" },
  { x: 4, y: 3, label: "Táo" },
  { x: 7, y: 8, label: "Xoài" },
  { x: 8, y: 7, label: "Xoài" },
  { x: 9, y: 9, label: "Xoài" },
];
export function classify(x: number, y: number) {
  if (![x, y].every((v) => Number.isFinite(v) && v >= 0 && v <= 10))
    return undefined;
  return samples
    .map((s, i) => ({ ...s, i, d: (s.x - x) ** 2 + (s.y - y) ** 2 }))
    .sort((a, b) => a.d - b.d || a.i - b.i)[0];
}
export const brightness = (angle: number, normal: number) =>
  0.2 + 0.8 * Math.max(0, Math.cos(((angle - normal) * Math.PI) / 180));
export const encodeMessage = (message: string) =>
  Array.from(message, (c) =>
    (c.charCodeAt(0) ^ 42).toString(16).padStart(2, "0"),
  ).join(" ");
export function lookup(target: number) {
  if (!Number.isInteger(target) || target < 1 || target > 8) return undefined;
  let lo = 1,
    hi = 8;
  const indexed: number[] = [];
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    indexed.push(mid);
    if (mid === target) break;
    if (mid < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return { scan: Array.from({ length: target }, (_, i) => i + 1), indexed };
}
export const thumbnails = [
  { id: "a", name: "San hô", rgb: [0.95, 0.35, 0.3] },
  { id: "b", name: "Mặt trời", rgb: [1, 0.7, 0.25] },
  { id: "c", name: "Bầu trời", rgb: [0.3, 0.6, 1] },
  { id: "d", name: "Hoa hồng", rgb: [0.85, 0.3, 0.4] },
  { id: "e", name: "Lá cây", rgb: [0.3, 0.8, 0.5] },
  { id: "f", name: "Đại dương", rgb: [0.2, 0.5, 0.9] },
];
export function retrieve(id: string) {
  const q = thumbnails.find((t) => t.id === id);
  return q
    ? thumbnails
        .filter((t) => t.id !== id)
        .map((t) => ({
          ...t,
          d: Math.sqrt(
            t.rgb.reduce((sum, v, i) => sum + (v - q.rgb[i]) ** 2, 0),
          ),
        }))
        .sort((a, b) => a.d - b.d || a.id.localeCompare(b.id))
    : [];
}
export const networkEdges: Edge[] = [
  ["A", "B", 1],
  ["B", "D", 1],
  ["A", "C", 1],
  ["C", "D", 1],
];
export function schedule(workers: number) {
  if (![1, 2, 4].includes(workers)) return [];
  return Array.from({ length: workers }, (_, w) =>
    Array.from({ length: 8 / workers }, (_, i) => w + i * workers + 1),
  );
}
export const expressions = [
  ["2 + 3 × 4", "[2] [+] [3] [×] [4]", "2 + (3 × 4)", "2 + 12", "14"],
  ["(2 + 3) × 4", "[(] [2] [+] [3] [)] [×] [4]", "(2 + 3) × 4", "5 × 4", "20"],
];
export const initialSession: Session = {
  mode: "presentation",
  slide: 0,
  area: "algorithms",
};
export function moveSlide(s: Session, delta: number): Session {
  return Number.isInteger(delta)
    ? { ...s, slide: Math.max(0, Math.min(slides.length - 1, s.slide + delta)) }
    : s;
}
export function explore(s: Session, area?: AreaId): Session {
  return {
    ...s,
    mode: "exploration",
    area:
      area && areaIds.includes(area)
        ? area
        : (slides[s.slide]?.areaId ?? s.area),
  };
}
export const resume = (s: Session): Session => ({ ...s, mode: "presentation" });
