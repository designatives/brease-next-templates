"use client";

import { BreaseLink } from "brease-next";
import type { BreaseLinkData, BreaseMedia } from "brease-next";

type Props = {
  heroVideo?: BreaseMedia | null;
  heroTitle?: string | null;
  heroCta?: BreaseLinkData | null;
};

export function HomePageHero({ heroVideo, heroTitle, heroCta }: Props) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 text-white">
      {heroVideo && (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          src={heroVideo.path}
          poster={heroVideo.thumbnail}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900/40 to-gray-900/80" />

      <div className="mx-auto flex min-h-[480px] max-w-6xl flex-col items-start justify-end px-6 py-20 md:min-h-[640px] md:py-28">
        {heroTitle && (
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {heroTitle}
          </h1>
        )}
        {heroCta && (
          <BreaseLink
            linkData={heroCta}
            className="mt-8 inline-flex items-center rounded bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
          >
            {heroCta.label}
          </BreaseLink>
        )}
      </div>
    </div>
  );
}
