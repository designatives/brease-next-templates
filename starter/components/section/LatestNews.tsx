"use client";

import Link from "next/link";
import { NewsCard, type NewsCardData } from "./NewsCard";

type Props = {
  newsCards?: NewsCardData[] | null;
};

export function LatestNews({ newsCards }: Props) {
  const cards = newsCards ?? [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Latest News
          </h2>
          <Link
            href="/news"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            View all →
          </Link>
        </div>

        {cards.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cards.map((card, i) => (
              <NewsCard key={i} {...card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
