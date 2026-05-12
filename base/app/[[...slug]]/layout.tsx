import { BreaseContext } from "brease-next";
import { contextData } from "@/lib/brease/component-map";
import { getPage } from "@/lib/brease/get-page";

export default async function SlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = (slug ?? []).join("/");

  return (
    <BreaseContext config={contextData} slug={slugStr} getPage={getPage}>
      <main>{children}</main>
    </BreaseContext>
  );
}
