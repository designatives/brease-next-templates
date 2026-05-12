"use client";

import { BreaseImage } from "brease-next";
import type { BreaseCollection, BreaseMedia } from "brease-next";

type Props = {
  team?: BreaseCollection | null;
};

export function TeamMembers({ team }: Props) {
  const entries = team?.entries ?? [];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">

        {entries.length > 0 && (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {entries.map((entry) => {
              const avatar = entry.elements?.avatar as BreaseMedia | null;
              const name = (entry.elements?.name as string | null) ?? entry.name;
              const title = entry.elements?.title as string | null;
              return (
                <div key={entry.uuid} className="text-center">
                  <div className="mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-lg bg-gray-200">
                    {avatar && (
                      <BreaseImage
                        breaseImage={avatar}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  {name && (
                    <p className="mt-4 text-base font-semibold text-gray-900">
                      {name}
                    </p>
                  )}
                  {title && (
                    <p className="text-sm text-gray-600">{title}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
