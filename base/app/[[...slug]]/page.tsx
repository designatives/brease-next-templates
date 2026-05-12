import {
  generateBreasePageParams,
  generateBreasePageMetadata,
  BreasePage,
  BreaseStructuredData,
  BreaseCustomCode,
  BreaseFetchError,
} from "brease-next";
import { componentMap } from "@/lib/brease/component-map";
import { getPage } from "@/lib/brease/get-page";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const params = await generateBreasePageParams();
  return params.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = (slug ?? []).join("/");
  const result = await getPage(slugStr);
  if (!result.success) return {};
  return generateBreasePageMetadata(result.data, {
    // TODO: replace with your production domain
    metadataBase: "https://example.com",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = (slug ?? []).join("/");
  const result = await getPage(slugStr);

  if (!result.success) {
    if (result.status === 404) notFound();
    throw new BreaseFetchError(result.error, result.status, result.endpoint);
  }

  return (
    <>
      <BreaseStructuredData page={result.data} />
      <BreaseCustomCode page={result.data} />
      <BreasePage page={result.data} sectionMap={componentMap} />
    </>
  );
}
