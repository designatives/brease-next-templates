"use client";

import { BreaseImage } from "brease-next";
import type { BreaseMedia } from "brease-next";

type Props = {
  heroImage?: BreaseMedia | null;
  heroTitle?: string | null;
  heroSubtitle?: string | null;
};

export function SubpageHero({ heroImage, heroTitle, heroSubtitle }: Props) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 text-white">
      {heroImage && (
        <div className="absolute inset-0 -z-10">
          <BreaseImage
            breaseImage={heroImage}
            className="h-full w-full object-cover opacity-50"
            sizes="100vw"
          />
        </div>
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {heroTitle && (
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {heroTitle}
          </h1>
        )}
        {heroSubtitle && (
          <p className="mt-4 max-w-2xl text-base text-gray-200 md:text-lg">
            {heroSubtitle}
          </p>
        )}
      </div>
    </div>
  );
}
