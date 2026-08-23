import { ContactCard } from "@/components/contact/contact-card";
import { Departments } from "@/components/departments/departments";
import { Flagships } from "@/components/home/flagships";
import { Stats } from "@/components/home/stats";
import { Hero } from "@/components/hero/hero";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.fullName}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />
      <Stats />
      <section className="mx-auto w-full max-w-160 px-6 sm:px-10">
        <FadeIn>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h2 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Who we are
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[17px]">
              <p>
                The <strong className="font-semibold text-foreground">Entrepreneurship Cell of St. Xavier&rsquo;s College (Mumbai)</strong> is a student-run body that exists for one reason — to make starting up feel less like a distant dream and more like a campus habit.
              </p>
              <p>
                We host the annual <strong className="font-semibold text-foreground">E-Summit</strong>, run B-plan competitions and founder talk series, publish a monthly newsletter, produce a podcast, and maintain an archive of everything we have ever built.
              </p>
              <p>
                No experience needed to join — just <strong className="font-semibold text-foreground">curiosity and consistency</strong>. The rest, we build together.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
      <Departments withHeadline viewMoreVisible />
      <Flagships />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
