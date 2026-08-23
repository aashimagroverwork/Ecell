import { ArrowUpRight, Mic, Play, Radio } from "lucide-react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { siteConfig } from "@/lib/metadata";

type Episode = {
  id: string;
  number: string;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  date: string;
  excerpt: string;
};

const EPISODES: Episode[] = [
  {
    id: "ep-12",
    number: "EP 12",
    title: "Selling chai to a country that runs on it",
    guest: "Aarav Mehta",
    guestRole: "Founder, Chai Circuit",
    duration: "42 min",
    date: "Aug 2026",
    excerpt:
      "From one stall outside campus to 40 outlets — on pricing, pan-wallahs and the myth of the saturated market.",
  },
  {
    id: "ep-11",
    number: "EP 11",
    title: "The pitch deck that got rejected 47 times",
    guest: "Sana Qureshi",
    guestRole: "Co-founder, Ledgerly",
    duration: "38 min",
    date: "Jul 2026",
    excerpt:
      "Why rejection number 48 mattered more than the yes, and how to iterate a deck without losing the plot.",
  },
  {
    id: "ep-10",
    number: "EP 10",
    title: "Building for Bharat from a Mumbai hostel",
    guest: "Rohan Iyer",
    guestRole: "Founder, GramSeva Tech",
    duration: "45 min",
    date: "Jun 2026",
    excerpt:
      "Agri-tech between lectures — on user research in villages your textbooks have never mentioned.",
  },
  {
    id: "ep-09",
    number: "EP 09",
    title: "What VCs actually read in your numbers",
    guest: "Priya Nair",
    guestRole: "Principal, Bombay Ventures",
    duration: "51 min",
    date: "May 2026",
    excerpt:
      "An investor's honest teardown of student pitches — the metrics that matter and the buzzwords that don't.",
  },
  {
    id: "ep-08",
    number: "EP 08",
    title: "Quitting the placement to keep the startup",
    guest: "Devang Shah",
    guestRole: "Founder, Rentro",
    duration: "36 min",
    date: "Apr 2026",
    excerpt:
      "A 9 LPA offer letter, two months of leave, and choosing uncertainty over comfort — with receipts.",
  },
];

function PlatformLinks(): ReactNode {
  const platforms = [
    { label: "Spotify", href: siteConfig.socials.spotify, icon: Radio },
    { label: "YouTube", href: siteConfig.socials.youtube, icon: Play },
    {
      label: "All platforms",
      href: siteConfig.socials.podcastFeed,
      icon: Mic,
    },
  ] as const;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {platforms.map((platform) => (
        <a
          key={platform.label}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-foreground/8 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
        >
          <platform.icon className="h-4 w-4" aria-hidden="true" />
          {platform.label}
          <ArrowUpRight
            className="h-3.5 w-3.5 text-foreground/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}

export function PodcastEpisodes(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div className="flex flex-col gap-4">
          {EPISODES.map((episode, index) => (
            <FadeIn key={episode.id} delay={Math.min(index * 0.05, 0.3)}>
              <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                <button
                  type="button"
                  aria-label={`Play episode ${episode.number}: ${episode.title}`}
                  className="focus-ring inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105"
                >
                  <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />
                </button>

                <div className="flex min-w-0 grow flex-col gap-1.5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50">
                    {episode.number} · {episode.date}
                  </p>
                  <h2 className="text-[19px] font-medium leading-snug tracking-tight text-foreground sm:text-[21px]">
                    {episode.title}
                  </h2>
                  <p className="text-[13px] font-medium tracking-tight text-foreground/70">
                    {episode.guest}
                    <span className="font-normal text-foreground/50">
                      {" "}
                      · {episode.guestRole}
                    </span>
                  </p>
                  <p className="mt-1 text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
                    {episode.excerpt}
                  </p>
                </div>

                <div className="shrink-0 self-start rounded-full bg-foreground/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/60 ring-1 ring-foreground/8 sm:self-center">
                  {episode.duration}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PlatformLinks };
