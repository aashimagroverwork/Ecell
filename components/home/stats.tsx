import { FadeIn } from "@/components/ui/motion-primitives";
import type { ReactNode } from "react";

const STATS = [
  { value: "2012", label: "Founded by students" },
  { value: "120+", label: "Events hosted" },
  { value: "5K+", label: "E-Summit footfall" },
  { value: "30+", label: "Startups backed" },
] as const;

export function Stats(): ReactNode {
  return (
    <section className="mx-auto w-full max-w-275 px-6 sm:px-10">
      <FadeIn>
        <div className="grid grid-cols-2 overflow-hidden rounded-4xl border border-foreground/8 bg-background md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col items-center gap-1.5 px-4 py-8 text-center sm:py-10",
                index % 2 === 0
                  ? "border-r border-foreground/8 max-md:border-r"
                  : "",
                index < 3 ? "md:border-r md:border-foreground/8" : "",
                index >= 2 ? "max-md:border-t max-md:border-foreground/8" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <p className="font-serif text-[2rem] font-medium leading-none tracking-tight text-foreground sm:text-[2.5rem]">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
