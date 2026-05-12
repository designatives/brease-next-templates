import { cache } from "react";
import { fetchPage } from "brease-next";

export const getPage = cache(async (slug: string) => fetchPage(slug));
