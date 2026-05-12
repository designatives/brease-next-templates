"use client";

import Link from "next/link";
import { BreaseImage, useBrease } from "brease-next";
import type { BreaseMedia } from "brease-next";

export type NewsCardData = {
  name?: string | null;
  slug?: string | null;
  references?: {
    coverImage?: BreaseMedia | null;
    title?: string | null;
    publishDate?: string | null;
    readTimeMin?: number | string | null;
    isSponsored?: boolean | null;
  } | null;
};

function formatDate(value: string | null | undefined, locale: string) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NewsCard({ name, slug, references }: NewsCardData) {
  const { locale } = useBrease();
  const title = references?.title ?? name ?? "Untitled";
  const date = formatDate(references?.publishDate, locale);
  const cover = references?.coverImage;
  const href = slug ?? "#";

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:border-gray-300 hover:shadow-sm"
    >
      <div className="relative aspect-[16/10] bg-gray-100">
        {cover ? (
          <BreaseImage
            breaseImage={cover}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-widest text-gray-400">
            No image
          </div>
        )}
        {references?.isSponsored && (
          <span className="absolute left-3 top-3 rounded bg-gray-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Sponsored
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-gray-900 group-hover:text-black">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          {date && <span>{date}</span>}
          {references?.readTimeMin && (
            <>
              {date && <span aria-hidden>·</span>}
              <span>{references.readTimeMin} min read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
