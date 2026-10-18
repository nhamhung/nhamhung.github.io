import type { CSSProperties } from "react";
import { areas } from "./content";
import type { AreaId } from "./types";
import FocusAreaDetails from "./FocusAreaDetails";
export default function ExplorationView({
  selected,
  onSelect,
  motionAllowed,
}: {
  selected: AreaId;
  onSelect: (id: AreaId) => void;
  motionAllowed: boolean;
}) {
  const area = areas.find((a) => a.id === selected)!;
  return (
    <div className="nt-explore-layout">
      <label className="nt-mobile-picker">
        Chọn hướng chuyên sâu
        <select
          data-testid="area-mobile-select"
          value={selected}
          onChange={(e) => onSelect(e.target.value as AreaId)}
        >
          {areas.map((a) => (
            <option key={a.id} value={a.id}>
              {a.vi}
            </option>
          ))}
        </select>
      </label>
      <nav className="nt-area-nav" aria-label="11 hướng chuyên sâu">
        {areas.map((a) => (
          <button
            data-testid={`area-${a.id}`}
            className="nt-area-choice"
            key={a.id}
            style={{ "--field": a.color } as CSSProperties}
            aria-pressed={selected === a.id}
            onClick={() => onSelect(a.id)}
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
      </nav>
      <FocusAreaDetails area={area} motionAllowed={motionAllowed} />
    </div>
  );
}
