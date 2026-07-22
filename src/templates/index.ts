import { selectedTemplateId } from "../data/template";
import { businessTemplate } from "./business";
import { engineeringTemplate } from "./engineering";
import { neutralTemplate } from "./neutral";
import type { PortfolioTemplate, PortfolioTemplateId } from "./types";

export const portfolioTemplates = [
  engineeringTemplate,
  neutralTemplate,
  businessTemplate,
] satisfies PortfolioTemplate[];

export const getPortfolioTemplate = (
  templateId: PortfolioTemplateId | string,
): PortfolioTemplate =>
  portfolioTemplates.find((template) => template.id === templateId) ??
  engineeringTemplate;

export const activePortfolioTemplate = getPortfolioTemplate(selectedTemplateId);
