import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";

import { ContactButton } from "@/components/contact/contact-button";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.fullName} — partnerships, recruitment and everything in between.`,
  path: "/contact",
});

type InfoBlock = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
};

const INFO_BLOCKS: InfoBlock[] = [
  {
    icon: MapPin,
    title: "Find us on campus",
    lines: [siteConfig.address, "E-Cell room, ground floor, above the library"],
  },
  {
    icon: Mail,
    title: "Write to us",
    lines: [
      siteConfig.email,
      "We usually reply within 48 hours during the semester",
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: siteConfig.socials.instagram, icon: Instagram },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: Youtube },
  { label: "X", href: siteConfig.socials.x, icon: Twitter },
] as const;

export default function ContactPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-14 sm:px-10 sm:pt-100 sm:pb-16">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            Say hello
          </h1>
          <p className="max-w-[36ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            Sponsorships, collaborations, recruitment or just a hello — our
            inbox is always open.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pb-8 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {INFO_BLOCKS.map((block, index) => (
            <FadeIn key={block.title} delay={Math.min(index * 0.08, 0.3)}>
              <article className="project-card flex h-full flex-col gap-3 rounded-3xl border border-foreground/8 bg-background p-6 sm:p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/10 bg-background">
                  <block.icon
                    className="h-4 w-4 text-foreground"
                    aria-hidden="true"
                  />
                </span>
                <h2 className="text-[17px] font-medium tracking-tight text-foreground sm:text-[18px]">
                  {block.title}
                </h2>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[14px] font-medium tracking-tight text-foreground/80">
                    {block.lines[0]}
                  </p>
                  <p className="text-[13px] tracking-tight text-foreground/55">
                    {block.lines[1]}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <article className="project-card mt-4 flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex flex-col gap-2">
              <h2 className="text-[17px] font-medium tracking-tight text-foreground sm:text-[18px]">
                Follow the hustle
              </h2>
              <div className="flex items-center gap-2.5 opacity-75">
                {SOCIALS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="focus-ring inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-foreground/8 bg-background text-foreground/70 transition-colors hover:border-foreground/15 hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon
                      className="h-4 w-4"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-foreground/8 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              @ecell_sxm
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </article>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-4">
          <div className="flex justify-center py-6">
            <ContactButton label={`Copy ${siteConfig.email}`} />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
