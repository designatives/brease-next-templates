"use client";

type ServiceCard = {
  name?: string | null;
  value?: {
    serviceName?: string | null;
    serviceDescription?: string | null;
  } | null;
};

type Props = {
  title?: string | null;
  // Note: the CMS key is `srviceCards` (typo in the schema). Keep it as-is so
  // we read the data unmodified.
  srviceCards?: ServiceCard[] | null;
};

export function HomePageServicesCards({ title, srviceCards }: Props) {
  const cards = srviceCards ?? [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {title && (
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            {title}
          </h2>
        )}

        {cards.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => {
              const name = card.value?.serviceName ?? card.name;
              const desc = card.value?.serviceDescription;
              return (
                <div
                  key={i}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-6 transition-colors hover:bg-white hover:shadow-sm"
                >
                  {name && (
                    <h3 className="text-base font-semibold text-gray-900">
                      {name}
                    </h3>
                  )}
                  {desc && (
                    <p className="mt-2 text-sm text-gray-600">{desc}</p>
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
