import {
  CheckCircle,
  Map as MapIcon,
  MessageSquare,
  RefreshCw,
  Target,
  Zap,
} from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const PILLARS = [
  {
    num: "01",
    title: "Purpose Alignment",
    desc: 'Know your "why" before execution. Every team member must understand the mission\'s deeper meaning to sustain motivation and clarity throughout the project lifecycle.',
    icon: Target,
    detail:
      "Hanuman's unwavering devotion to Rama was his 'why'. It guided every decision when he was alone in Lanka with no supervision.",
  },
  {
    num: "02",
    title: "Strategic Planning",
    desc: "Map every move before acting. Like Hanuman's meticulous reconnaissance of Lanka, thorough planning identifies risks, resources, and optimal paths to success.",
    icon: MapIcon,
    detail:
      "Hanuman spent significant time studying Lanka before acting — its layout, guard rotations, and vulnerabilities. No step was taken without intelligence.",
  },
  {
    num: "03",
    title: "Courageous Execution",
    desc: "Act boldly despite uncertainty. Hanuman leapt across the ocean with conviction — great engineers ship with confidence, learn from failure, and never freeze in doubt.",
    icon: Zap,
    detail:
      "The leap across the ocean had no guaranteed outcome. Hanuman committed fully because his purpose was clear. Conviction precedes competence.",
  },
  {
    num: "04",
    title: "Adaptability",
    desc: "Pivot wisely when obstacles arise. Hanuman changed form and strategy multiple times. Agile teams embrace feedback, refactor early, and adapt without losing focus.",
    icon: RefreshCw,
    detail:
      "Hanuman changed size, disguised himself, and altered his approach multiple times in Lanka. Adaptability is not weakness — it is intelligence applied in motion.",
  },
  {
    num: "05",
    title: "Communication",
    desc: "Build trust through clarity. Hanuman's honest reports to Rama aligned the entire Vanara army. Stakeholder transparency and clear documentation drive team cohesion.",
    icon: MessageSquare,
    detail:
      "When Hanuman returned from Lanka, his detailed, honest report gave Rama and the Vanara army everything they needed to plan the final campaign with confidence.",
  },
  {
    num: "06",
    title: "Delivery",
    desc: "Complete the mission and close the loop. True execution isn't done until the outcome is delivered, verified, and handed over. Hanuman didn't just find Sita — he returned with proof and enabled the rescue.",
    icon: CheckCircle,
    detail:
      "Hanuman's mission was complete only when Rama received his report, believed it, and could act on it. Delivery means the value reaches the end recipient — not just that work was done.",
  },
];

const FLOW_STEPS = [
  "Purpose",
  "Planning",
  "Execution",
  "Adaptability",
  "Communication",
  "Delivery",
];

export default function FrameworkPage() {
  useFadeIn();

  return (
    <div className="pt-28 pb-24">
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="section-fade text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            Core Model
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            The HEM Framework
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Six pillars of execution — each a phase of the project and a quality
            of character. HEM is as much a leadership philosophy as a project
            methodology.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-5">
          {PILLARS.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="section-fade bg-white rounded-2xl p-7 border border-border shadow-card hover-lift"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <PillarIcon className="w-5 h-5 gold-text" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black gold-text tracking-wider">
                        {pillar.num}
                      </span>
                      <h3 className="text-base font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {pillar.desc}
                    </p>
                    <div className="bg-accent/50 rounded-lg p-3 border border-amber-100">
                      <p className="text-xs text-foreground/70 italic leading-relaxed">
                        <span className="font-semibold gold-text not-italic">
                          Ramayana insight:{" "}
                        </span>
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 warm-section">
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="section-fade text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest gold-text">
              Visual Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
              The HEM Flow
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              A sequential, iterative execution loop that mirrors both Hanuman's
              journey and the modern Agile sprint cycle.
            </p>
          </div>

          <div className="section-fade hidden md:flex items-center justify-center gap-0 flex-wrap">
            {FLOW_STEPS.map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold text-sm shadow-card ${
                      step === "Delivery"
                        ? "gold-bg text-white border-transparent shadow-gold"
                        : "bg-white gold-border gold-text"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                    {step}
                  </span>
                </div>
                {idx < FLOW_STEPS.length - 1 && (
                  <div className="flex items-center mb-5 px-1">
                    <div className="w-8 h-0.5 bg-amber-300" />
                    <div
                      className="w-0 h-0"
                      style={{
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "7px solid oklch(0.82 0.08 75)",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="section-fade md:hidden space-y-3 max-w-xs mx-auto">
            {FLOW_STEPS.map((step, idx) => (
              <div key={step} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm shrink-0 ${
                    step === "Delivery"
                      ? "gold-bg text-white border-transparent"
                      : "bg-white gold-border gold-text"
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {step}
                </span>
                {idx < FLOW_STEPS.length - 1 && (
                  <div className="ml-auto w-5 h-5 flex items-center justify-center">
                    <div className="w-0.5 h-4 bg-amber-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="section-fade text-center text-xs text-muted-foreground mt-10 max-w-md mx-auto">
            Each phase feeds into the next. After Delivery, teams loop back to
            Purpose for the next sprint — creating a continuous dharmic
            execution cycle.
          </p>
        </div>
      </section>
    </div>
  );
}
