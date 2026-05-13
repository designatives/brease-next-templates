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
  // TODO: replace these placeholders with the navigation IDs from your
  // Brease project. The keys (`headerNavigation`, `footerNavigation`) are
  // used by `<Header />` and `<FooterSection />` to look up the right nav.
  navigations: [
    {
      key: "headerNavigation",
      id: "REPLACE_WITH_HEADER_NAV_ID",
    },
    {
      key: "footerNavigation",
      id: "REPLACE_WITH_FOOTER_NAV_ID",
    },
  ],
  collections: [],
  userParams: {},
};
