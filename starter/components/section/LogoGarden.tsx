"use client";

import Image from "next/image";
import type { BreaseCollection, BreaseMedia } from "brease-next";

type Props = {
  title?: string | null;
  logos?: BreaseCollection | null;
};

export function LogoGarden({ title, logos }: Props) {
  const entries = logos?.entries ?? [];

  return (
    <div className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {title && (
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500">
            {title}
          </p>
        )}

        {entries.length > 0 && (
          <div className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
            {entries.map((entry) => {
              const logo = entry.elements?.logo as BreaseMedia | null;
              if (!logo) return null;
              return (
                <div
                  key={entry.uuid}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.path}
                    alt={logo.alt ?? entry.name ?? "logo"}
                    width={200}
                    height={80}
                    className="h-16 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-20"
                    unoptimized
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
