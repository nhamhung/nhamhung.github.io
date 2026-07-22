import Awards from "../../components/Awards";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Gallery from "../../components/Gallery";
import Journal from "../../components/Journal";
import JournalPostPage from "../../components/JournalPostPage";
import Skills from "../../components/Skills";
import type { PortfolioTemplate } from "../types";
import BusinessAbout from "./BusinessAbout";
import BusinessHero from "./BusinessHero";
import BusinessProjects from "./BusinessProjects";
import BusinessShell from "./BusinessShell";

export const businessChapterLabels = {
  home: "Overview",
  about: "Profile",
  education: "Education",
  experience: "Experience",
  awards: "Recognition",
  projects: "Case Studies",
  gallery: "Portfolio",
  journal: "Insights",
  skills: "Capabilities",
  contact: "Contact",
} satisfies PortfolioTemplate["chapterLabels"];

export const businessTemplate = {
  id: "business",
  label: "Business",
  description:
    "An executive portfolio focused on value, evidence, capabilities, and decision-ready project summaries.",
  ShellComponent: BusinessShell,
  JournalPostComponent: JournalPostPage,
  chapterLabels: businessChapterLabels,
  sectionComponents: {
    home: BusinessHero,
    about: BusinessAbout,
    education: Education,
    experience: Experience,
    awards: Awards,
    projects: BusinessProjects,
    gallery: Gallery,
    journal: Journal,
    skills: Skills,
    contact: Contact,
  },
} satisfies PortfolioTemplate;
