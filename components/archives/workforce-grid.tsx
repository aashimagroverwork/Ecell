import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

type Member = {
  name: string;
  role: string;
};

type Group = {
  title: string;
  note: string;
  members: Member[];
};

const TEAM: Group[] = [
  {
    title: "Core Council",
    note: "The ones who sign off on everything",
    members: [
      { name: "Ananya Deshpande", role: "President" },
      { name: "Kabir Malhotra", role: "Vice President" },
      { name: "Ishita Rao", role: "General Secretary" },
      { name: "Arjun Khanna", role: "Treasurer" },
    ],
  },
  {
    title: "Department Leads",
    note: "One captain per crew",
    members: [
      { name: "Rhea Kulkarni", role: "Projects & Partnerships Lead" },
      { name: "Vivaan Sharma", role: "Incubation & Innovation Lead" },
      { name: "Zoya Contractor", role: "Sponsorships & Finance Lead" },
      { name: "Aditya Menon", role: "PR & Creatives Lead" },
      { name: "Sara Fernandes", role: "Research & Learning Lead" },
      { name: "Neel Bhatt", role: "Administration Lead" },
      { name: "Tanvi Shetty", role: "Operations & Logistics Lead" },
      { name: "Yash Agarwal", role: "Filming & Documentation Lead" },
    ],
  },
  {
    title: "Associates",
    note: "The workforce that ships it all",
    members: [
      { name: "Mihir Joshi", role: "Projects & Partnerships" },
      { name: "Kiara D'Souza", role: "Projects & Partnerships" },
      { name: "Aryan Saxena", role: "Incubation & Innovation" },
      { name: "Nitya Pillai", role: "Sponsorships & Finance" },
      { name: "Rehan Kapadia", role: "Sponsorships & Finance" },
      { name: "Ayesha Khan", role: "PR & Creatives" },
      { name: "Dhruv Naik", role: "PR & Creatives" },
      { name: "Myra Jain", role: "Operations & Logistics" },
      { name: "Karan Vazirani", role: "Operations & Logistics" },
      { name: "Shreya Bakshi", role: "Filming & Documentation" },
      { name: "Aman Dubey", role: "Filming & Documentation" },
      { name: "Alia Rupani", role: "Administration" },
    ],
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export function WorkforceGrid(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-275 flex-col gap-14 px-6 pb-8 sm:px-10 sm:gap-20">
        {TEAM.map((group) => (
          <div key={group.title} className="flex flex-col gap-6">
            <FadeIn className="flex flex-col gap-1">
              <h2 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
                {group.title}
              </h2>
              <p className="text-sm tracking-tight text-foreground/55">
                {group.note}
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {group.members.map((member, index) => (
                <FadeIn
                  key={member.name}
                  delay={Math.min(index * 0.03, 0.25)}
                  className="h-full"
                >
                  <article className="project-card flex h-full items-center gap-3 rounded-2xl border border-foreground/8 bg-background p-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/5 font-mono text-[12px] font-semibold tracking-tight text-foreground ring-1 ring-foreground/8"
                    >
                      {getInitials(member.name)}
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <p className="truncate text-[13px] font-medium tracking-tight text-foreground sm:text-[14px]">
                        {member.name}
                      </p>
                      <p className="truncate text-[11px] tracking-tight text-foreground/50 sm:text-[12px]">
                        {member.role}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
