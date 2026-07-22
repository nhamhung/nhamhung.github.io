import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import App, { PortfolioApp } from "./App";
import { Provider } from "./components/ui/provider";
import {
  journalPosts,
  navigation,
  profile,
  sectionContent,
} from "./data/portfolio";
import { selectedTemplateId } from "./data/template";
import { businessTemplate } from "./templates/business";
import { engineeringTemplate } from "./templates/engineering";
import { neutralTemplate } from "./templates/neutral";
import type { PortfolioTemplate } from "./templates/types";

const enabledNavigationItems = navigation.filter((item) => item.enabled);

type ActiveTemplateControls = {
  primaryAction: string;
  resume: string;
  layout: string;
  theme: string;
  menu?: string;
  projectLink: string;
};

const activeTemplateControls: ActiveTemplateControls = {
  engineering: {
    primaryAction: "hero-primary-action",
    resume: "hero-resume-download",
    layout: "navbar-layout-toggle",
    theme: "navbar-theme-toggle",
    menu: "navbar-menu-toggle",
    projectLink: "navbar-mobile-link-projects",
  },
  neutral: {
    primaryAction: "neutral-hero-primary-action",
    resume: "neutral-hero-resume-download",
    layout: "neutral-layout-toggle",
    theme: "neutral-theme-toggle",
    projectLink: "neutral-nav-link-projects",
  },
  business: {
    primaryAction: "business-hero-primary-action",
    resume: "business-hero-resume-download",
    layout: "business-layout-toggle",
    theme: "business-theme-toggle",
    projectLink: "business-contents-link-projects",
  },
}[selectedTemplateId];

const renderPortfolio = () =>
  render(
    <Provider>
      <App />
    </Provider>,
  );

const renderTemplate = (template: PortfolioTemplate) =>
  render(
    <Provider>
      <PortfolioApp template={template} />
    </Provider>,
  );

beforeEach(() => {
  window.localStorage.clear();
  window.history.pushState(null, "", "/");
});

afterEach(() => {
  cleanup();
});

describe("App smoke render", () => {
  it("renders core portfolio content from local data files", () => {
    renderPortfolio();

    expect(document.body.textContent).toContain(profile.name);
    expect(document.body.textContent).toContain(profile.role);
    expect(
      screen.getByTestId(activeTemplateControls.primaryAction),
    ).toBeInTheDocument();
    expect(screen.getByTestId(activeTemplateControls.resume)).toHaveAttribute(
      "download",
      profile.resume.fileName,
    );
    expect(
      screen.getAllByText(enabledNavigationItems[0].label).length,
    ).toBeGreaterThan(0);
  });

  it("renders school achievements with accessible school logos", () => {
    renderPortfolio();

    expect(screen.getByText("Model Student Award")).toBeInTheDocument();
    expect(
      screen.getByText("Singapore Youth Festival Choir - Silver Award"),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("img", { name: "Zhonghua Secondary School logo" }),
    ).toHaveLength(2);
  });

  it("renders student-editable descriptions below every non-home section heading", () => {
    renderPortfolio();

    for (const copy of Object.values(sectionContent)) {
      expect(screen.getByText(copy.description)).toBeInTheDocument();
    }
  });

  it("renders the layout switch control and all enabled sections in single-page mode", () => {
    renderPortfolio();

    expect(
      screen.getByTestId(activeTemplateControls.layout),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(activeTemplateControls.theme),
    ).toBeInTheDocument();
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "single",
    );
    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      selectedTemplateId,
    );
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.getAllByText("IN_SITE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("WORDPRESS").length).toBeGreaterThan(0);
    expect(screen.getByTestId("writing-image-local-0")).toHaveAttribute(
      "data-image-fit",
      "cover",
    );
    expect(screen.getByTestId("writing-image-frame-local-0")).toHaveAttribute(
      "data-thumbnail-height",
      "190px",
    );
    expect(
      screen.getAllByTestId(/^writing-image-wordpress-/)[0],
    ).toHaveAttribute("data-image-fit", "cover");
    expect(
      screen.getAllByTestId(/^writing-image-frame-wordpress-/)[0],
    ).toHaveAttribute("data-thumbnail-height", "190px");
  });

  it("switches to multi-page mode and renders one selected page section", async () => {
    renderPortfolio();

    fireEvent.click(screen.getByTestId(activeTemplateControls.layout));

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    if (activeTemplateControls.menu) {
      fireEvent.click(screen.getByTestId(activeTemplateControls.menu));
    }
    fireEvent.click(
      await screen.findByTestId(activeTemplateControls.projectLink),
    );

    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#/projects");
  });

  it("initializes multi-page mode from a direct GitHub Pages-safe section hash", async () => {
    window.history.pushState(null, "", "#/projects");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#/projects");
  });

  it("keeps a direct anchor hash in single-page mode", () => {
    window.history.pushState(null, "", "#about");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "single",
    );
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("resolves an invalid slash route to the first enabled section without rendering an alternate tree", () => {
    window.history.pushState(null, "", "#/missing");

    renderPortfolio();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-layout-mode",
      "multi",
    );
    expect(
      document.getElementById(enabledNavigationItems[0].id),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    expect(screen.queryByTestId("projects-section")).not.toBeInTheDocument();
  });

  it("renders a local journal post from a direct GitHub Pages-safe hash", () => {
    window.history.pushState(null, "", journalPosts[0].href);

    renderPortfolio();

    expect(screen.getByTestId("journal-post-page")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: journalPosts[0].title }),
    ).toBeInTheDocument();
    expect(screen.getByText("IN_SITE")).toBeInTheDocument();
    expect(screen.getByTestId("journal-post-image")).toHaveAttribute(
      "data-image-fit",
      "contain",
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Mentoring at the SIM–LSE Data Analytics Challenge 2026",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("SIM–LSE Data Analytics Challenge 2026", {
        selector: "strong",
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("journal-post-back-link")).toHaveAttribute(
      "href",
      "#/journal",
    );
  });

  it("renders a graceful fallback for an unknown local journal post hash", () => {
    window.history.pushState(null, "", "#/journal/missing-post");

    renderPortfolio();

    expect(screen.getByTestId("journal-post-not-found")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Journal post not found" }),
    ).toBeInTheDocument();
  });

  it.each([
    [
      "engineering",
      engineeringTemplate,
      "navbar-layout-toggle",
      "navbar-theme-toggle",
    ],
    [
      "neutral",
      neutralTemplate,
      "neutral-layout-toggle",
      "neutral-theme-toggle",
    ],
    [
      "business",
      businessTemplate,
      "business-layout-toggle",
      "business-theme-toggle",
    ],
  ] as const)(
    "composes the %s template through the shared App boundary",
    (templateId, template, layoutToggleId, themeToggleId) => {
      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-template-id",
        templateId,
      );
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(screen.getByTestId("about-section")).toBeInTheDocument();
      expect(screen.getByTestId(layoutToggleId)).toBeInTheDocument();
      expect(screen.getByTestId(themeToggleId)).toBeInTheDocument();
      for (const copy of Object.values(sectionContent)) {
        expect(screen.getByText(copy.description)).toBeInTheDocument();
      }
    },
  );

  it.each([
    [engineeringTemplate, "hero-resume-download"],
    [neutralTemplate, "neutral-hero-resume-download"],
    [businessTemplate, "business-hero-resume-download"],
  ] as const)(
    "keeps shared external actions clear of their borders",
    (template, resumeActionId) => {
      renderTemplate(template);

      expect(screen.getByTestId(resumeActionId)).toHaveClass(
        "portfolio-action-link",
      );
    },
  );

  it("composes Neutral as a full-width magazine instead of a side-rail layout", () => {
    renderTemplate(neutralTemplate);

    expect(document.querySelector(".neutral-magazine-masthead")).toBeInTheDocument();
    expect(document.querySelector(".neutral-side-rail")).not.toBeInTheDocument();
    expect(
      document.querySelector('nav[aria-label="Neutral magazine contents"]'),
    ).toBeInTheDocument();
    expect(screen.getByTestId("neutral-nav-link-projects")).toBeInTheDocument();
  });

  it("composes Business as a consulting report with sticky contents", () => {
    renderTemplate(businessTemplate);

    expect(document.querySelector(".business-report-header")).toBeInTheDocument();
    expect(document.querySelector(".business-contents-rail")).toBeInTheDocument();
    expect(document.querySelector(".business-report-document")).toBeInTheDocument();
    expect(
      document.querySelector('nav[aria-label="Business report contents"]'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("business-contents-link-projects"),
    ).toBeInTheDocument();
  });

  it.each([
    ["engineering", engineeringTemplate, "navbar-layout-toggle"],
    ["neutral", neutralTemplate, "neutral-layout-toggle"],
    ["business", businessTemplate, "business-layout-toggle"],
  ] as const)(
    "keeps the %s template compatible with both layout modes",
    (_templateId, template, layoutToggleId) => {
      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-layout-mode",
        "single",
      );
      fireEvent.click(screen.getByTestId(layoutToggleId));
      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-layout-mode",
        "multi",
      );
      expect(document.getElementById("home")).toBeInTheDocument();
      expect(screen.queryByTestId("about-section")).not.toBeInTheDocument();
    },
  );

  it.each([
    ["engineering", engineeringTemplate, "navbar-link-journal"],
    ["neutral", neutralTemplate, "neutral-nav-link-journal"],
    ["business", businessTemplate, "business-contents-link-journal"],
  ] as const)(
    "keeps the %s shell and journal context for local journal routes",
    (templateId, template, journalLinkId) => {
      window.history.pushState(null, "", journalPosts[0].href);

      renderTemplate(template);

      expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
        "data-template-id",
        templateId,
      );
      expect(screen.getByTestId("journal-post-page")).toBeInTheDocument();
      expect(screen.getByTestId(journalLinkId)).toHaveAttribute(
        "aria-current",
        "page",
      );
    },
  );
});
