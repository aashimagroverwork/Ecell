import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Mic2,
  Trophy,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { DottedPattern } from "@/components/ui/dotted-pattern";

type Flagship = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  name: string;
  edition: string;
  date: string;
  description: string;
};

const FLAGSHIPS: Flagship[] = [
  {
    id: "e-summit",
    icon: Trophy,
    name: "E-Summit",
    edition: "Annual flagship fest",
    date: "Every February",
    description:
      "Two days of competitions, keynotes and a startup expo — the biggest entrepreneurship celebration on campus.",
  },
  {
    id: "pitch-perfect",
    icon: CalendarDays,
    name: "Pitch Perfect",
    edition: "B-plan competition",
    date: "Semesterly",
    description:
      "Student ventures face a panel of founders and investors for mentorship, prizes and a shot at incubation.",
  },
  {
    id: "founder-fireside",
    icon: Mic2,
    name: "Founder Fireside",
    edition: "Talk series",
    date: "Monthly",
    description:
      "Unfiltered conversations with founders who started from a hostel room, a classroom or a crazy idea.",
  },
];

function FlagshipCard({
  flagship,
  index,
}: {
  flagship: Flagship;
  index: number;
}): ReactNode {
  const Icon = flagship.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.08, 0.3)}
      className="break-inside-avoid"
    >
      <article className="project-card flex h-full flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <div className="relative flex aspect-[16/9] w-full flex-col justify-between overflow-hidden rounded-2xl bg-foreground/5 p-5 ring-1 ring-foreground/5">
          <DottedPattern className="absolute inset-0 opacity-60" />
          <div className="relative flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-foreground/10 bg-background">
              <Icon
                className="h-3.5 w-3.5 text-foreground"
                aria-hidden="true"
              />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
              {flagship.edition}
            </span>
          </div>
          <p className="relative font-serif text-[1.75rem] font-medium leading-tight tracking-tight text-foreground sm:text-[2rem]">
            {flagship.name}
          </p>
        </div>

        <div className="flex grow flex-col gap-2 px-1 pb-1">
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {flagship.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-foreground/8 px-1 pb-1 pt-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50">
            {flagship.date}
          </p>
          <ArrowUpRight
            className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-foreground"
            aria-hidden="true"
          />
        </div>
      </article>
    </FadeIn>
  );
}

export function Flagships(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
          <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
            Flagship initiatives
          </h2>
          <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
            The events our members build all year — and the campus shows up
            for.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {FLAGSHIPS.map((flagship, index) => (
            <FlagshipCard
              key={flagship.id}
              flagship={flagship}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/archives/events"
            className="focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-foreground/8 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Explore past events
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
