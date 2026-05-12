"use client";

import { useState } from "react";
import { useBrease, BreaseLink } from "brease-next";
import Link from "next/link";

export function Header() {
  const { navigations, alternateLinks, availableLocales, locale } = useBrease();
  const nav = navigations.headerNavigation;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-gray-900"
        >
          Brease Starter
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav?.items.map((item) => (
              <li key={item.uuid}>
                <BreaseLink
                  linkData={item}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                >
                  {item.label}
                </BreaseLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {availableLocales.map((loc) => (
            <a
              key={loc}
              href={alternateLinks[loc] || `/${loc}`}
              aria-current={loc === locale ? "page" : undefined}
              className={
                "rounded px-2 py-1 text-xs font-semibold uppercase transition-colors " +
                (loc === locale
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100")
              }
            >
              {loc}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-gray-200 text-gray-700 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col gap-3">
              {nav?.items.map((item) => (
                <li key={item.uuid}>
                  <BreaseLink
                    linkData={item}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                  </BreaseLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
              {availableLocales.map((loc) => (
                <a
                  key={loc}
                  href={alternateLinks[loc] || `/${loc}`}
                  aria-current={loc === locale ? "page" : undefined}
                  className={
                    "rounded px-2 py-1 text-xs font-semibold uppercase " +
                    (loc === locale
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100")
                  }
                >
                  {loc}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
