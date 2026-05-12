import { BreaseContext } from "brease-next";
import { contextData } from "@/lib/brease/component-map";
import { getPage } from "@/lib/brease/get-page";
import { Header } from "@/components/layout/Header";

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
      <Header />
      <main>{children}</main>
    </BreaseContext>
  );
}
