import { ContactCard } from "@/components/contact/contact-card";
import { WorkforceGrid } from "@/components/archives/workforce-grid";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Workforce",
  description:
    "Meet the workforce of E-Cell — the core council, department leads and associates who build everything.",
  path: "/archives/workforce",
});

export default function WorkforcePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-100 sm:pb-20">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
            Archives · Workforce
          </p>
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            The people behind it all
          </h1>
          <p className="max-w-[36ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            Twenty-four students, seven departments, one shared obsession
            with building things.
          </p>
        </FadeIn>
      </section>
      <WorkforceGrid />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
