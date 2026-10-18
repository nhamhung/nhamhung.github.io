import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import TalkRouteBoundary from "./components/TalkRouteBoundary";
import {
  isNusTalkHash,
  navigateTalkHash,
  portfolioReturnHash,
} from "./utils/talkRoute";

import "./App.css";
import { navigation } from "./data/portfolio";
import { selectedTemplateId } from "./data/template";
import { usePortfolioLayout } from "./hooks/usePortfolioLayout";
import { getPortfolioTemplate } from "./templates";
import type { PortfolioTemplate, PortfolioTemplateId } from "./templates/types";
import { parseJournalPostHash } from "./utils/journal";
import {
  getEnabledNavigationItems,
  getEnabledSectionIds,
  useActiveSection,
} from "./utils/scroll";
import {
  getInitialPortfolioTemplateId,
  persistPortfolioTemplateId,
} from "./utils/templateSelection";

type PortfolioAppProps = {
  initialTemplate?: PortfolioTemplate;
};

export function PortfolioApp({ initialTemplate }: PortfolioAppProps) {
  const [activeTemplateId, setActiveTemplateId] = useState<PortfolioTemplateId>(
    () =>
      getInitialPortfolioTemplateId(initialTemplate?.id ?? selectedTemplateId),
  );
  const [locationHash, setLocationHash] = useState(() => window.location.hash);
  const template = getPortfolioTemplate(activeTemplateId);
  const enabledNavigationItems = useMemo(
    () => getEnabledNavigationItems(navigation, template.isSectionVisible),
    [template],
  );
  const enabledSectionIds = useMemo(
    () => getEnabledSectionIds(enabledNavigationItems),
    [enabledNavigationItems],
  );
  const sectionComponents = template.sectionComponents;
  const scrollActiveSection = useActiveSection(enabledSectionIds);
  const {
    layoutMode,
    activeSection,
    activePageSection,
    isMultiPageLayout,
    getNavigationHref,
    navigateToSection,
    toggleLayoutMode,
  } = usePortfolioLayout(enabledSectionIds, scrollActiveSection);

  useEffect(() => {
    const syncLocationHash = () => setLocationHash(window.location.hash);

    window.addEventListener("hashchange", syncLocationHash);
    window.addEventListener("popstate", syncLocationHash);

    return () => {
      window.removeEventListener("hashchange", syncLocationHash);
      window.removeEventListener("popstate", syncLocationHash);
    };
  }, []);

  const localJournalPostSlug = parseJournalPostHash(locationHash);
  const visibleSectionIds = isMultiPageLayout
    ? [activePageSection]
    : enabledSectionIds;
  const ShellComponent = template.ShellComponent;
  const JournalPostComponent = template.JournalPostComponent;
  const shellActiveSection = localJournalPostSlug ? "journal" : activeSection;
  const selectTemplate = useCallback((templateId: PortfolioTemplateId) => {
    const resolvedTemplateId = getPortfolioTemplate(templateId).id;

    persistPortfolioTemplateId(resolvedTemplateId);
    setActiveTemplateId(resolvedTemplateId);
  }, []);
  const selectedContent = localJournalPostSlug ? (
    <JournalPostComponent slug={localJournalPostSlug} />
  ) : (
    visibleSectionIds.map((sectionId) => {
      const SectionComponent = sectionComponents[sectionId];

      return <SectionComponent key={sectionId} />;
    })
  );

  return (
    <ShellComponent
      activeSection={shellActiveSection}
      activeTemplateId={activeTemplateId}
      getNavigationHref={getNavigationHref}
      layoutMode={layoutMode}
      navigationItems={enabledNavigationItems}
      onNavigate={navigateToSection}
      onSelectTemplate={selectTemplate}
      onToggleLayoutMode={toggleLayoutMode}
    >
      {selectedContent}
    </ShellComponent>
  );
}

const TalkPage = lazy(() => import("./features/nus-talk/TalkPage"));
function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const returnHash = useRef(portfolioReturnHash(window.location.hash));
  useEffect(() => {
    const sync = () => {
      const next = window.location.hash;
      if (!isNusTalkHash(next)) returnHash.current = portfolioReturnHash(next);
      setHash(next);
    };
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);
  const exit = () => navigateTalkHash(returnHash.current);
  if (isNusTalkHash(hash))
    return (
      <TalkRouteBoundary onExit={exit}>
        <Suspense
          fallback={
            <section
              lang="vi"
              style={{
                padding: 40,
                minHeight: "100vh",
                background: "#f6f8f3",
                color: "#19354a",
              }}
            >
              <p role="status">Đang mở hành trình NUS CS…</p>
              <button data-testid="talk-loading-exit" onClick={exit}>
                Về portfolio
              </button>
            </section>
          }
        >
          <TalkPage onExit={exit} />
        </Suspense>
      </TalkRouteBoundary>
    );
  return <PortfolioApp />;
}

export default App;
