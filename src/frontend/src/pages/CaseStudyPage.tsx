import { useFadeIn } from "../hooks/useFadeIn";

const CASE_STUDY_STEPS = [
  {
    pillar: "Purpose Alignment",
    action:
      "Team defined the core mission: democratize food access in Tier-2 cities. OKRs mapped to social impact, not just revenue.",
  },
  {
    pillar: "Strategic Planning",
    action:
      "30-day sprint roadmap created. Tech stack evaluated, competitor analysis done, risk register prepared before any line of code.",
  },
  {
    pillar: "Courageous Execution",
    action:
      "MVP launched in 6 weeks despite resource constraints. Team embraced bold deadlines and shipped a working prototype on schedule.",
  },
  {
    pillar: "Intelligent Adaptability",
    action:
      "After user testing revealed UX friction, the team pivoted the onboarding flow within one sprint — zero sunk-cost resistance.",
  },
  {
    pillar: "Transparent Communication",
    action:
      "Weekly stakeholder demos, open Slack channels, and honest blocker reports eliminated surprise failures and built investor trust.",
  },
];

const METRICS = [
  { value: "+35%", label: "Faster Delivery" },
  { value: "Zero", label: "Scope Creep" },
  { value: "100%", label: "Stakeholder Alignment" },
];

export default function CaseStudyPage() {
  useFadeIn();

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-14">
        <div className="section-fade text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            Real-World Application
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Case Study
          </h1>
          <p className="text-xl font-semibold text-foreground mb-3">
            HEM in Action: Building a Mobile App Startup
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A food delivery startup applied HEM from Day 1. Here's how each
            pillar transformed their execution — and the results they achieved.
          </p>
        </div>
      </section>

      {/* Timeline + Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="section-fade bg-white rounded-3xl border border-border shadow-card overflow-hidden">
          <div className="p-8 lg:p-10">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Timeline */}
              <div className="lg:col-span-3 space-y-0">
                <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
                  The HEM Journey
                </h2>
                {CASE_STUDY_STEPS.map((step, idx) => (
                  <div
                    key={step.pillar}
                    className="flex gap-5"
                    data-ocid={`case-study.item.${idx + 1}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      {idx < CASE_STUDY_STEPS.length - 1 && (
                        <div
                          className="w-0.5 flex-1 bg-amber-100 my-1"
                          style={{ minHeight: 32 }}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-xs font-bold gold-text uppercase tracking-wider mb-1">
                        {step.pillar}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="lg:col-span-2 flex flex-col gap-4 justify-center">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Outcomes
                </p>
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="bg-accent rounded-2xl p-5 border border-amber-200"
                  >
                    <div className="text-3xl font-black gold-text leading-none mb-1">
                      {m.value}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-10">
        <div className="section-fade bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 text-center">
          <h3 className="text-lg font-bold text-foreground mb-3">
            Key Takeaway
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            HEM doesn't replace Agile or Scrum — it supercharges them with a
            values layer. Teams using HEM don't just move faster; they move with
            clarity, courage, and alignment that compounds over every sprint.
          </p>
        </div>
      </section>
    </div>
  );
}
