"use client";

import Image from "next/image";
import { useState } from "react";
import { BreaseImage, BreaseLink } from "brease-next";
import type {
  BreaseCollection,
  BreaseLinkData,
  BreaseMedia,
} from "brease-next";

type Props = {
  image?: BreaseMedia | null;
  imageOrientation?: "left" | "right" | null;
  title?: string | null;
  desc?: string | null;
  socials?: BreaseCollection | null;
};

export function ContactFormSection({
  image,
  imageOrientation,
  title,
  desc,
  socials,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const imageOnRight = imageOrientation === "right";
  const socialEntries = socials?.entries ?? [];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div
          className={
            "grid gap-10 lg:grid-cols-2 lg:items-center " +
            (imageOnRight ? "" : "")
          }
        >
          <div className={imageOnRight ? "lg:order-1" : "lg:order-2"}>
            {image && (
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                <BreaseImage
                  breaseImage={image}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

          <div className={imageOnRight ? "lg:order-2" : "lg:order-1"}>
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                {title}
              </h2>
            )}
            {desc && (
              <p className="mt-3 max-w-xl text-sm text-gray-600">{desc}</p>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="rounded bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Send message
                </button>
                {submitted && (
                  <span className="text-sm text-gray-600">
                    Thanks — we&apos;ll be in touch.
                  </span>
                )}
              </div>
            </form>

            {socialEntries.length > 0 && (
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Or find us on
                </p>
                <ul className="mt-3 flex items-center gap-3">
                  {socialEntries.map((entry) => {
                    const logo = entry.elements
                      ?.socialLogo as BreaseMedia | null;
                    const link = entry.elements
                      ?.socialLink as BreaseLinkData | null;
                    if (!link) return null;
                    return (
                      <li key={entry.uuid}>
                        <BreaseLink
                          linkData={link}
                          aria-label={link.label}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
