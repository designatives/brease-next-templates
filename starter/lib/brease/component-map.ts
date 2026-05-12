import type { BreaseContextConfig } from "brease-next";
import { HomePageHero } from "@/components/section/HomePageHero";
import { SubpageHero } from "@/components/section/SubpageHero";
import { NewsHero } from "@/components/section/NewsHero";
import { HomePageServicesCards } from "@/components/section/HomePageServicesCards";
import { LogoGarden } from "@/components/section/LogoGarden";
import { LatestNews } from "@/components/section/LatestNews";
import { AllNewsGrid } from "@/components/section/AllNewsGrid";
import { TeamMembers } from "@/components/section/TeamMembers";
import { ContactFormSection } from "@/components/section/ContactFormSection";
import { NewsBody } from "@/components/section/NewsBody";
import { FooterSection } from "@/components/section/FooterSection";

// Each section component receives the CMS section's `elements` object
// directly as props. The map key must match the section `type`/`key` from
// Brease.
export const componentMap: Record<string, React.ComponentType<any>> = {
  homePageHero: HomePageHero,
  subpageHero: SubpageHero,
  newsHero: NewsHero,
  homePageServicesCards: HomePageServicesCards,
  logoGarden: LogoGarden,
  latestNews: LatestNews,
  allNewsGrid: AllNewsGrid,
  teamMembers: TeamMembers,
  contactFormSection: ContactFormSection,
  newsBody: NewsBody,
  footer: FooterSection,
};

export const contextData: BreaseContextConfig = {
  navigations: [
    {
      key: "headerNavigation",
      id: "nav-a1c2b734-2dfe-476a-ad95-9ad93b7179ed",
    },
    {
      key: "footerNavigation",
      id: "nav-a1c2b76b-4cc1-4bb3-8c2c-e905fa48e8c5",
    },
  ],
  collections: [],
  userParams: {},
};
