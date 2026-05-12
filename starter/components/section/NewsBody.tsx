"use client";

type Props = {
  // Brease rich text comes back as an HTML string when populated.
  articleBody?: string | null;
};

export function NewsBody({ articleBody }: Props) {
  if (!articleBody) return null;

  return (
    <div className="bg-white">
      <article
        className="prose prose-gray prose-headings:font-semibold prose-headings:tracking-tight prose-h1:mt-0 prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-gray-700 prose-blockquote:border-l-gray-900 prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-img:rounded-lg prose-img:border prose-img:border-gray-200 prose-hr:border-gray-200 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-lg prose-pre:border prose-pre:border-gray-200 prose-pre:bg-gray-50 prose-pre:text-gray-900 mx-auto max-w-3xl px-6 py-12 md:py-16"
        dangerouslySetInnerHTML={{ __html: articleBody }}
      />
    </div>
  );
}
