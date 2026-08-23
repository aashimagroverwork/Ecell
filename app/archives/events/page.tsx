import { ContactCard } from "@/components/contact/contact-card";
import { EventsTimeline } from "@/components/archives/events-timeline";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Past Events & Works",
  description:
    "A year-by-year archive of every E-Cell event, competition, workshop and talk.",
  path: "/archives/events",
});

export default function PastEventsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-100 sm:pb-20">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
            Archives · Events & Works
          </p>
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            Everything we&rsquo;ve run
          </h1>
          <p className="max-w-[36ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            A living record of the fests, pitches, workshops and talks that
            shaped the cell.
          </p>
        </FadeIn>
      </section>
      <EventsTimeline />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
