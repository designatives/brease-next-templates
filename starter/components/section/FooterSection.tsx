"use client";

import Image from "next/image";
import { useBrease, BreaseLink } from "brease-next";
import type {
  BreaseCollection,
  BreaseLinkData,
  BreaseMedia,
  BreaseNavigationItem,
} from "brease-next";

type Props = {
  footerCollection?: BreaseCollection | null;
  address?: string | null;
  phone?: string | null;
};

export function FooterSection({ footerCollection, address, phone }: Props) {
  const { navigations } = useBrease();
  const navItems = navigations.footerNavigation?.items ?? [];
  const socialEntries = footerCollection?.entries ?? [];

  return (
    <div className="border-t border-gray-200 bg-gray-50 text-gray-700">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {socialEntries.length > 0 ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Follow us
              </p>
              <ul className="mt-5 flex items-center gap-3">
                {socialEntries.map((entry) => {
                  const logo = entry.elements?.socialLogo as BreaseMedia | null;
                  const link = entry.elements?.socialLink as
                    | BreaseLinkData
                    | null;
                  if (!link) return null;
                  return (
                    <li key={entry.uuid}>
                      <BreaseLink
                        linkData={link}
                        aria-label={link.label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
                      >
                        {logo ? (
                          <Image
                            src={logo.path}
                            alt={logo.alt ?? link.label ?? "social"}
                            width={18}
                            height={18}
                            unoptimized
                          />
                        ) : (
                          <span className="text-xs">{link.label?.[0]}</span>
                        )}
                      </BreaseLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div />
          )}

          <FooterNav items={navItems} />

          {(address || phone) && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {address && <li>{address}</li>}
                {phone && (
                  <li>
                    <a
                      className="hover:text-gray-900"
                      href={`tel:${phone.replace(/\s/g, "")}`}
                    >
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FooterNav({ items }: { items: BreaseNavigationItem[] }) {
  if (items.length === 0) return <div />;
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-900">
        Sitemap
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.uuid}>
            <BreaseLink
              linkData={item}
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              {item.label}
            </BreaseLink>
            {item.children?.length > 0 && (
              <ul className="mt-2 space-y-1 pl-4">
                {item.children.map((child) => (
                  <li key={child.uuid}>
                    <BreaseLink
                      linkData={child}
                      className="text-xs text-gray-500 hover:text-gray-900"
                    >
                      {child.label}
                    </BreaseLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
