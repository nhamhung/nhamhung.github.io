import type { ReactNode } from "react";
import type { Edge } from "../models";
export function Diagram({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <svg
      className="nt-diagram"
      viewBox="0 0 600 280"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}
export function Graph({
  edges,
  path = [],
  disabled = [],
}: {
  edges: Edge[];
  path?: string[];
  disabled?: string[];
}) {
  const points: Record<string, [number, number]> = {
    A: [65, 140],
    B: [220, 55],
    C: [220, 225],
    D: [390, 55],
    E: [390, 225],
    F: [535, 140],
  };
  const nodes = [...new Set(edges.flatMap(([a, b]) => [a, b]))];
  return (
    <Diagram
      label={
        path.length
          ? `Đường đi ${path.join(" → ")}`
          : "Mạng các điểm và kết nối"
      }
    >
      {edges.map(([a, b, w]) => {
        const active = path.some(
          (n, i) =>
            i < path.length - 1 &&
            ((n === a && path[i + 1] === b) || (n === b && path[i + 1] === a)),
        );
        const [x1, y1] = points[a],
          [x2, y2] = points[b];
        return (
          <g
            key={a + b}
            opacity={disabled.includes(a) || disabled.includes(b) ? 0.25 : 1}
          >
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={active ? "var(--field)" : "#728e81"}
              strokeWidth={active ? 6 : 2}
              className={active ? "nt-path" : ""}
            />
            <text
              x={(x1 + x2) / 2 + (x1 === x2 ? 18 : 0)}
              y={(y1 + y2) / 2 + (x1 === x2 ? 6 : -10)}
              textAnchor="middle"
            >
              {w}
            </text>
          </g>
        );
      })}
      {nodes.map((n) => (
        <g key={n}>
          <circle
            cx={points[n][0]}
            cy={points[n][1]}
            r="23"
            fill={
              disabled.includes(n)
                ? "#dde7e0"
                : path.includes(n)
                  ? "var(--field)"
                  : "#ffffff"
            }
            stroke="var(--field)"
            strokeWidth="2"
          />
          <text
            x={points[n][0]}
            y={points[n][1] + 7}
            textAnchor="middle"
            style={{
              fill:
                path.includes(n) && !disabled.includes(n)
                  ? "#ffffff"
                  : "#19354a",
            }}
          >
            {n}
          </text>
        </g>
      ))}
    </Diagram>
  );
}
