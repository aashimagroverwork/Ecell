import {
  ArrowRight,
  BookOpen,
  Clapperboard,
  ClipboardList,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  Package,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Department = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  name: string;
  tagline: string;
  description: string;
  responsibilities: string[];
};

export const DEPARTMENTS: Department[] = [
  {
    id: "projects-partnerships",
    icon: Handshake,
    name: "Projects & Partnerships",
    tagline: "The connectors",
    description:
      "Conceptualises flagship projects and builds lasting partnerships with startups, VCs and student communities.",
    responsibilities: ["Flagship projects", "Partner network", "Collaborations"],
  },
  {
    id: "incubation-innovation",
    icon: Lightbulb,
    name: "Incubation & Innovation",
    tagline: "The startup nursery",
    description:
      "Guides student ventures from idea to launch through mentorship, incubation drives and innovation challenges.",
    responsibilities: ["Startup incubation", "Mentor network", "Innovation challenges"],
  },
  {
    id: "sponsorships-finance",
    icon: Landmark,
    name: "Sponsorships & Finance",
    tagline: "The money managers",
    description:
      "Raises funds from brands and manages every rupee of the cell's budget with full transparency.",
    responsibilities: ["Brand outreach", "Sponsor decks", "Budgeting"],
  },
  {
    id: "pr-creatives",
    icon: Megaphone,
    name: "PR & Creatives",
    tagline: "The voice & the look",
    description:
      "Owns the cell's voice and visual identity — social media, campus buzz, posters and brand creatives.",
    responsibilities: ["Social media", "Campus publicity", "Creatives"],
  },
  {
    id: "research-learning",
    icon: BookOpen,
    name: "Research & Learning",
    tagline: "The insight engine",
    description:
      "Studies markets and startups, curates knowledge and runs learning sessions for the workforce.",
    responsibilities: ["Market studies", "Learning sessions", "Knowledge base"],
  },
  {
    id: "administration",
    icon: ClipboardList,
    name: "Administration",
    tagline: "The backbone",
    description:
      "Keeps the cell running — documentation, records, internal coordination and faculty liaison.",
    responsibilities: ["Documentation", "Records", "Coordination"],
  },
  {
    id: "operations-logistics",
    icon: Package,
    name: "Operations & Logistics",
    tagline: "The ground crew",
    description:
      "Handles on-ground execution — venues, materials, permissions and everything that moves during events.",
    responsibilities: ["Venue management", "Materials", "Permissions"],
  },
  {
    id: "filming-documentation",
    icon: Clapperboard,
    name: "Filming & Documentation",
    tagline: "The memory keepers",
    description:
      "Films events, cuts aftermovies and documents every chapter of the cell's story.",
    responsibilities: ["Aftermovies", "Event coverage", "Photo archive"],
  },
];

function DepartmentCard({
  department,
  index,
}: {
  department: Department;
  index: number;
}): ReactNode {
  const Icon = department.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-5 sm:p-6">
        <header className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-foreground/10 bg-background">
            <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
          </span>
          <div className="flex min-w-0 flex-col">
            <h3 className="text-[18px] font-medium leading-tight tracking-tight text-foreground sm:text-[20px]">
              {department.name}
            </h3>
            <p className="text-[12px] tracking-tight text-foreground/50">
              {department.tagline}
            </p>
          </div>
        </header>

        <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
          {department.description}
        </p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Responsibilities">
          {department.responsibilities.map((item) => (
            <li
              key={item}
              className="rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] font-medium tracking-tight text-foreground/70 ring-1 ring-foreground/8"
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </FadeIn>
  );
}

export type DepartmentsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Departments({
  withHeadline = false,
  viewMoreVisible = false,
}: DepartmentsProps): ReactNode {
  const items = viewMoreVisible ? DEPARTMENTS.slice(0, 4) : DEPARTMENTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              Our departments
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Eight teams, one mission. Every event, issue and episode is
              built by students across these crews.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((department, index) => (
            <DepartmentCard
              key={department.id}
              department={department}
              index={index}
            />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/departments"
              className="focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-foreground/8 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all departments
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
