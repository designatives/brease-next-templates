"use client";

import { NewsCard, type NewsCardData } from "./NewsCard";

type Props = {
  newsCards?: NewsCardData[] | null;
};

export function AllNewsGrid({ newsCards }: Props) {
  const cards = newsCards ?? [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {cards.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <NewsCard key={i} {...card} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No articles yet.</p>
        )}
      </div>
    </div>
  );
}
