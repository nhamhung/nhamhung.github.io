import type { ComponentType } from "react";
import type { AreaId, DemoProps } from "../types";
import AlgorithmsDemo from "./AlgorithmsDemo";
import AIDemo from "./AIDemo";
import GraphicsDemo from "./GraphicsDemo";
import SecurityDemo from "./SecurityDemo";
import DatabaseDemo from "./DatabaseDemo";
import HCIDemo from "./HCIDemo";
import RetrievalDemo from "./RetrievalDemo";
import NetworksDemo from "./NetworksDemo";
import ParallelDemo from "./ParallelDemo";
import LanguagesDemo from "./LanguagesDemo";
import SoftwareDemo from "./SoftwareDemo";
const demos: Record<AreaId, ComponentType<DemoProps>> = {
  algorithms: AlgorithmsDemo,
  ai: AIDemo,
  graphics: GraphicsDemo,
  security: SecurityDemo,
  databases: DatabaseDemo,
  hci: HCIDemo,
  retrieval: RetrievalDemo,
  networks: NetworksDemo,
  parallel: ParallelDemo,
  languages: LanguagesDemo,
  software: SoftwareDemo,
};
export default function DemoHost({
  areaId,
  motionAllowed,
}: {
  areaId: AreaId;
  motionAllowed: boolean;
}) {
  const Demo = demos[areaId];
  return (
    <div
      className="nt-demo-host"
      data-motion={motionAllowed}
      data-testid={`demo-${areaId}`}
    >
      <Demo key={areaId} motionAllowed={motionAllowed} />
    </div>
  );
}
