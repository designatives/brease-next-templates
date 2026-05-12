"use client";

import { BreaseImage, useBrease } from "brease-next";
import type { BreaseMedia } from "brease-next";

type Props = {
  coverImage?: BreaseMedia | null;
  title?: string | null;
  author?: string | null;
  readTimeMin?: number | string | null;
  publishDate?: string | null;
  isSponsored?: boolean | null;
};

function formatDate(value: string | null | undefined, locale: string) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsHero({
  coverImage,
  title,
  author,
  readTimeMin,
  publishDate,
  isSponsored,
}: Props) {
  const { locale } = useBrease();
  const date = formatDate(publishDate, locale);

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-4xl px-6 pt-16 md:pt-24">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-500">
          {isSponsored && (
            <span className="rounded bg-gray-900 px-2 py-1 text-white">
              Sponsored
            </span>
          )}
          {date && <span>{date}</span>}
          {readTimeMin && (
            <span aria-label="Read time">{readTimeMin} min read</span>
          )}
        </div>
        {title && (
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {title}
          </h1>
        )}
        {author && (
          <p className="mt-4 text-sm text-gray-600">By {author}</p>
        )}
      </div>

      {coverImage && (
        <div className="mx-auto mt-10 max-w-5xl px-6">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
            <BreaseImage
              breaseImage={coverImage}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}
    </article>
  );
}
