import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Issue = {
  id: string;
  index: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
};

const ISSUES: Issue[] = [
  {
    id: "quick-commerce",
    index: "Vol. V · Issue 04",
    title: "The 10-Minute Economy",
    date: "Aug 2026",
    tags: ["Quick commerce", "Unit economics"],
    excerpt:
      "How dark stores rewired Mumbai's grocery habits, and what the unit economics actually look like when delivery gets faster than the elevator.",
  },
  {
    id: "bootstrap-bharat",
    index: "Vol. V · Issue 03",
    title: "Bootstrapping in Bharat",
    date: "Jul 2026",
    tags: ["Bootstrapping", "Tier-2 India"],
    excerpt:
      "Founders outside the funding circuit on profitable from day one, growing slow, and why their churn is enviable.",
  },
  {
    id: "creator-economy",
    index: "Vol. V · Issue 02",
    title: "Creators Are the New Distributors",
    date: "Jun 2026",
    tags: ["Creator economy", "D2C"],
    excerpt:
      "Why D2C brands are hiring influencers before engineers, and how attention became the cheapest customer acquisition channel.",
  },
  {
    id: "student-startups",
    index: "Vol. V · Issue 01",
    title: "From Classroom to Cap Table",
    date: "May 2026",
    tags: ["Student founders", "Campus ventures"],
    excerpt:
      "Six startups that began as semester projects at St. Xavier's — and what happened after the grades came in.",
  },
  {
    id: "ai-stack",
    index: "Vol. IV · Issue 12",
    title: "Everyone Is an AI Company Now",
    date: "Apr 2026",
    tags: ["AI", "SaaS"],
    excerpt:
      "A field guide to separating the thin wrappers from the real moats, with a checklist investors actually use.",
  },
  {
    id: "funding-winter",
    index: "Vol. IV · Issue 11",
    title: "Surviving the Funding Winter",
    date: "Mar 2026",
    tags: ["Venture capital", "Runway"],
    excerpt:
      "Founders who raised in 2021 and cut costs in 2024 share the playbook nobody put in their pitch deck.",
  },
];

export function NewsletterList(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div className="flex flex-col gap-4">
          {ISSUES.map((issue, index) => (
            <FadeIn key={issue.id} delay={Math.min(index * 0.05, 0.3)}>
              <article className="project-card group flex cursor-pointer flex-col gap-3 rounded-3xl border border-foreground/8 bg-background p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-7">
                <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50 sm:w-36">
                  {issue.index}
                </p>
                <div className="flex min-w-0 grow flex-col gap-2">
                  <h2 className="text-[19px] font-medium leading-snug tracking-tight text-foreground sm:text-[21px]">
                    {issue.title}
                  </h2>
                  <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
                    {issue.excerpt}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    {issue.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] font-medium tracking-tight text-foreground/70 ring-1 ring-foreground/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-center sm:gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                    {issue.date}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    Read issue
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
