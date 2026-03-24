import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cohortHighlights, fitList, siteContent } from "@/content/site";

const pillars = [
  {
    title: "Conversation over compliance",
    body: "Students are expected to think aloud, question assumptions, and contribute to shared understanding instead of quietly consuming content."
  },
  {
    title: "Rigor with room for originality",
    body: "Academic standards stay high while students build voice, initiative, and creative confidence through meaningful work."
  },
  {
    title: "Human-scale accountability",
    body: "In a small community, each learner is known well. Expectations are clear, support is personal, and growth is visible."
  }
];

const tablePrinciples = [
  "At the table, every student is seen and expected to participate.",
  "Dialogue builds sharper reasoning, deeper listening, and intellectual courage.",
  "Responsibility is shared: preparation, contribution, and respect for ideas matter.",
  "Learning becomes active work in community, not passive seat time."
];

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-thh-cream text-thh-charcoal">
      <SiteHeader />

      <main>
        <section className="section-shell section-padding pt-20 md:pt-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-thh-gold">{siteContent.cohortLabel}</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-thh-navy md:text-6xl">
            A different kind of high school, built around conversation, challenge, and real human attention.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-thh-slate md:text-lg">
            The Harkness House is launching an inaugural 12-student cohort for 2026–27, designed for students who are ready
            for serious academics, creative ownership, and preparation that reaches beyond the factory model.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteContent.ctas.request.href}
              className="focus-ring inline-flex items-center justify-center rounded-sm border border-thh-navy bg-thh-navy px-6 py-3 text-sm font-semibold text-thh-cream transition hover:bg-thh-navy/90"
            >
              {siteContent.ctas.request.label}
            </Link>
            <Link
              href={siteContent.ctas.apply.href}
              className="focus-ring inline-flex items-center justify-center rounded-sm border border-thh-navy/30 px-6 py-3 text-sm font-semibold text-thh-navy transition hover:border-thh-navy"
            >
              {siteContent.ctas.apply.label}
            </Link>
          </div>
          <p className="mt-6 text-sm text-thh-slate">{siteContent.cohortMeta}</p>
        </section>

        <section id="different" className="section-padding border-y border-thh-navy/10 bg-white/60">
          <div className="section-shell">
            <SectionHeading
              eyebrow="A Different Kind of School"
              title="Built for depth, not scale."
              description="THH is not designed around standardization or passive compliance. It is designed around rigorous dialogue, autonomy, and human-scale learning that expects students to do substantial intellectual work."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-sm border border-thh-navy/10 bg-thh-cream p-6 shadow-soft">
                  <h3 className="font-serif text-2xl text-thh-navy">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-thh-slate">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="table" className="section-padding">
          <div className="section-shell grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <SectionHeading
              eyebrow="Education, Rebuilt at the Table"
              title="A seat at the table means a voice, a responsibility, and a standard."
              description="The table is not a symbol; it is a method. Students learn by entering live intellectual conversation, preparing carefully, listening deeply, and contributing with clarity."
            />
            <div className="rounded-sm border border-thh-navy/15 bg-thh-navy p-7 text-thh-cream shadow-soft">
              <ul className="space-y-4 text-sm leading-relaxed md:text-base">
                {tablePrinciples.map((principle) => (
                  <li key={principle} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-thh-gold" aria-hidden="true" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="cohort" className="section-padding border-y border-thh-navy/10 bg-white/70">
          <div className="section-shell">
            <SectionHeading
              eyebrow="The 12-Student Cohort"
              title="An intentionally small, selective launch for 2026–27."
              description="This inaugural high school cohort is built for students who are ready for challenge, close mentorship, and meaningful output."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cohortHighlights.map((highlight) => (
                <article key={highlight.title} className="rounded-sm border border-thh-navy/10 bg-thh-cream p-6">
                  <h3 className="text-lg font-semibold text-thh-navy">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-thh-slate">{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="section-padding">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Who This Is For"
              title="THH may be the right fit when a student needs more ownership and more intellectual challenge."
              description="We partner with families looking for rigorous academics without the impersonality of large systems."
            />
            <div className="rounded-sm border border-thh-navy/15 bg-thh-cream p-7">
              <ul className="space-y-3 text-sm leading-relaxed text-thh-slate md:text-base">
                {fitList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-thh-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="founder" className="section-padding bg-thh-navy text-thh-cream">
          <div className="section-shell">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-thh-gold">From the Founder</p>
            <blockquote className="mt-6 max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
              “I started The Harkness House because too many capable students are asked to perform school instead of inhabit it.
              In a truly small environment, students can be known, challenged, and trusted in ways that change trajectories.”
            </blockquote>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-thh-cream/85 md:text-lg">
              We built THH for families who want intellectual seriousness and relational depth in the same place. The goal is not
              to shelter students from difficulty, but to prepare them to meet it with judgment, discipline, and conviction.
            </p>
            <p className="mt-5 text-sm font-medium text-thh-cream/90">— Founder, The Harkness House</p>
          </div>
        </section>

        <section id="inquire" className="section-padding">
          <div className="section-shell rounded-sm border border-thh-gold/50 bg-white/70 p-8 md:p-12">
            <SectionHeading
              align="center"
              eyebrow="Final Inquiry"
              title="Inquire early for the 2026–27 12-student cohort."
              description="If your student is ready for serious conversation, clear expectations, and individualized academic direction, we invite you to start a conversation with us now."
            />
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#"
                className="focus-ring inline-flex items-center justify-center rounded-sm border border-thh-navy bg-thh-navy px-6 py-3 text-sm font-semibold text-thh-cream transition hover:bg-thh-navy/90"
              >
                Request Information
              </Link>
              <Link
                href="#"
                className="focus-ring inline-flex items-center justify-center rounded-sm border border-thh-navy/25 px-6 py-3 text-sm font-semibold text-thh-navy transition hover:border-thh-navy"
              >
                Apply / Join the Cohort
              </Link>
            </div>
            <p className="mt-5 text-center text-sm text-thh-slate">Limited space. Early inquiry encouraged.</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
