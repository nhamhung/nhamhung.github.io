/// <reference types="node" />

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const appStyles = readFileSync(resolve(process.cwd(), "src/App.css"), "utf8");
const indexStyles = readFileSync(
  resolve(process.cwd(), "src/index.css"),
  "utf8",
);

const getThemeBlock = (source: string, selector: string): string => {
  const marker = `${selector} {`;
  const start = source.indexOf(marker);

  if (start === -1) {
    throw new Error(`Missing theme selector: ${selector}`);
  }

  const bodyStart = start + marker.length;
  const bodyEnd = source.indexOf("}", bodyStart);

  return source.slice(bodyStart, bodyEnd);
};

const getHexToken = (block: string, token: string): string => {
  const match = block.match(
    new RegExp(`--${token}:\\s*(#[0-9a-fA-F]{6})\\s*;`),
  );

  if (!match) {
    throw new Error(`Missing hexadecimal theme token: --${token}`);
  }

  return match[1];
};

const channelToLinear = (channel: number): number => {
  const normalized = channel / 255;

  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string): number => {
  const channels = [1, 3, 5].map((start) =>
    channelToLinear(Number.parseInt(hex.slice(start, start + 2), 16)),
  );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const contrastRatio = (foreground: string, background: string): number => {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort(
    (left, right) => right - left,
  );

  return (lighter + 0.05) / (darker + 0.05);
};

const themeScopes = [
  ["Engineering dark", indexStyles, ":root"],
  ["Engineering light", indexStyles, ".light"],
  ["Neutral dark", appStyles, ".portfolio-template-neutral"],
  ["Neutral light", appStyles, ".light .portfolio-template-neutral"],
  ["Business dark", appStyles, ".portfolio-template-business"],
  ["Business light", appStyles, ".light .portfolio-template-business"],
] as const;

describe("portfolio theme accessibility safeguards", () => {
  it.each(themeScopes)(
    "keeps critical %s text pairs at WCAG AA contrast",
    (_name, source, selector) => {
      const block = getThemeBlock(source, selector);
      const background = getHexToken(block, "bg-900");
      const primaryText = getHexToken(block, "primary-text");

      expect(contrastRatio(getHexToken(block, "text-300"), background)).toBeGreaterThanOrEqual(4.5);
      expect(contrastRatio(getHexToken(block, "accent-300"), background)).toBeGreaterThanOrEqual(4.5);
      expect(contrastRatio(primaryText, getHexToken(block, "primary-bg"))).toBeGreaterThanOrEqual(4.5);
      expect(contrastRatio(primaryText, getHexToken(block, "primary-hover-bg"))).toBeGreaterThanOrEqual(4.5);
    },
  );

  it("keeps compact actions and magazine navigation clear of their edges", () => {
    expect(appStyles).toMatch(
      /\.portfolio-action-link\s*{[^}]*min-height:\s*2\.5rem;[^}]*padding:\s*0\.5rem 1rem;/s,
    );
    expect(appStyles).toMatch(
      /\.neutral-magazine-nav a\s*{[^}]*min-height:\s*56px;[^}]*padding-block:\s*0\.5rem;/s,
    );
  });
});
