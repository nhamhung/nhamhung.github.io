import Awards from "../../components/Awards";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Gallery from "../../components/Gallery";
import Journal from "../../components/Journal";
import JournalPostPage from "../../components/JournalPostPage";
import Skills from "../../components/Skills";
import type { PortfolioTemplate } from "../types";
import NeutralAbout from "./NeutralAbout";
import NeutralHero from "./NeutralHero";
import NeutralProjects from "./NeutralProjects";
import NeutralShell from "./NeutralShell";

export const neutralChapterLabels = {
  home: "Introduction",
  about: "Profile",
  education: "Learning",
  experience: "Practice",
  awards: "Recognition",
  projects: "Selected Work",
  gallery: "Visual Notes",
  journal: "Journal",
  skills: "Capabilities",
  contact: "Contact",
} satisfies PortfolioTemplate["chapterLabels"];

export const neutralTemplate = {
  id: "neutral",
  label: "Neutral",
  description:
    "An editorial portfolio for multidisciplinary work, thoughtful writing, and balanced professional expression.",
  ShellComponent: NeutralShell,
  JournalPostComponent: JournalPostPage,
  chapterLabels: neutralChapterLabels,
  sectionComponents: {
    home: NeutralHero,
    about: NeutralAbout,
    education: Education,
    experience: Experience,
    awards: Awards,
    projects: NeutralProjects,
    gallery: Gallery,
    journal: Journal,
    skills: Skills,
    contact: Contact,
  },
} satisfies PortfolioTemplate;
