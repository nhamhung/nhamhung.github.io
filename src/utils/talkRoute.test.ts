import { expect, it } from "vitest";
import { isNusTalkHash, portfolioReturnHash } from "./talkRoute";
it("recognises only the talk route and safe portfolio returns", () => {
  expect(isNusTalkHash("#/talks/nus-cs")).toBe(true);
  expect(isNusTalkHash("#/talks/nus-cs/extra")).toBe(false);
  expect(portfolioReturnHash("#/journal/first-local-journal")).toBe(
    "#/journal/first-local-journal",
  );
  expect(portfolioReturnHash("#projects")).toBe("#projects");
  expect(portfolioReturnHash("https://example.com")).toBe("#home");
  expect(portfolioReturnHash("#/talks/nus-cs")).toBe("#home");
});
