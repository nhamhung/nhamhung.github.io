import { sectionIds } from "../data/navigation";
export const NUS_TALK_HASH = "#/talks/nus-cs";
export const isNusTalkHash = (hash: string) => hash === NUS_TALK_HASH;
export function portfolioReturnHash(hash?: string) {
  if (!hash) return "#home";
  const section = hash.replace(/^#\/?/, "");
  return (sectionIds as readonly string[]).includes(section) ||
    /^#\/journal\/[a-zA-Z0-9-]+$/.test(hash)
    ? hash
    : "#home";
}
export function navigateTalkHash(hash: string) {
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}
