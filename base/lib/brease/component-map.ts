import type { BreaseContextConfig } from "brease-next";

// Add section components here as you build them. Each entry maps a CMS
// section `key` to a Client Component (must have `'use client'` at the top
// of its file).
export const componentMap: Record<string, React.ComponentType<any>> = {};

export const contextData: BreaseContextConfig = {
  // TODO: replace with the navigation IDs from your Brease project
  navigations: [],
  collections: [],
  userParams: {},
};
