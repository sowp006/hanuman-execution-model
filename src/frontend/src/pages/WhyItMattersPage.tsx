import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  Clock,
  Compass,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { useRouter } from "../router";

const ENGINEER_CARDS = [
  {
    icon: Target,
    title: "Projects need purpose, not just code.",
    desc: "Without a clear 'why', teams build the wrong thing fast. Purpose alignment keeps everyone moving in the same direction.",
  },
  {
    icon: Lightbulb,
    title: "Technical skill alone isn't enough.",
    desc: "The best engineers also know how to communicate, plan, and lead. Pure coding skill without judgment leads to brilliant solutions to the wrong problems.",
  },
  {
    icon: AlertTriangle,
    title: "Ethics prevent shortcuts that cause harm.",
    desc: "Cutting corners on security, privacy, or accessibility might save time now — but they create real harm for real people. Ethical frameworks build trust that lasts.",
  },
];

const PLANNING_CARDS = [
  {
    icon: CheckCircle,
    title: "Clear goals save time.",
    desc: "A team that starts with a well-defined goal spends less time reworking. Clarity upfront eliminates ambiguity downstream.",
  },
  {
    icon: Shield,
    title: "Risk planning avoids failure.",
    desc: "Every project has unknowns. Teams that identify risks early can prepare contingencies instead of scrambling when things go wrong.",
  },
  {
    icon: Users,
    title: "Stakeholder alignment keeps teams focused.",
    desc: "When everyone — developers, managers, clients — agrees on the goal, there are fewer surprises, fewer pivots, and faster delivery.",
  },
];

const WISDOM_CARDS = [
  {
    icon: Clock,
    title: "Human nature hasn't changed.",
    desc: "The challenges Hanuman faced — uncertainty, pressure, adaptation, communication — are the same challenges modern project teams face. The context changes; the principles don't.",
  },
  {
    icon: Compass,
    title: "Values like integrity and courage are timeless.",
    desc: "Whether you're crossing an ocean or shipping a product, doing it with honesty, courage, and care for others produces better outcomes — and a better world.",
  },
];

interface IconCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  index: number;
}

function IconCard({ icon: Icon, title, desc, index }: IconCardProps) {
  return (
    <div
      className="section-fade bg-white rounded-2xl p-6 border border-border shadow-card hover-lift"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 gold-text" />
      </div>
      <h3 className="text-sm font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function WhyItMattersPage() {
  const { navigate } = useRouter();
  useFadeIn();

  return (
    <div className="pt-28 pb-24">
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="section-fade text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            Relevance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Why It Matters
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In a world of fast-moving technology, it's easy to focus only on
            what you can build. HEM asks a deeper question: how should you build
            it, and why?
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="section-fade mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="w-4 h-4 gold-text" />
            </div>
            <h2 className="text-xl font-bold text-foreground">
              Why Engineers Need This
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mt-2 ml-11">
            Engineering is more than writing code. It is decision-making under
            pressure, with real consequences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {ENGINEER_CARDS.map((card, idx) => (
            <IconCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              index={idx}
            />
          ))}
        </div>
      </section>

      <section className="py-16 warm-section">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="section-fade mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center">
                <BookOpen className="w-4 h-4 gold-text" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Why Planning Matters
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mt-2 ml-11">
              The Ramayana shows us: Hanuman didn't just leap. He prepared.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PLANNING_CARDS.map((card, idx) => (
              <IconCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-16 mb-16">
        <div className="section-fade mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Heart className="w-4 h-4 gold-text" />
            </div>
            <h2 className="text-xl font-bold text-foreground">
              Why Ancient Wisdom is Relevant
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mt-2 ml-11">
            3,000 years old. Still accurate.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {WISDOM_CARDS.map((card, idx) => (
            <IconCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              index={idx}
            />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div
          className="section-fade rounded-2xl p-8 text-center border-2 gold-border bg-accent/30"
          data-ocid="why.card"
        >
          <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center mx-auto mb-5">
            <span className="text-white text-lg font-bold">ॐ</span>
          </div>
          <blockquote className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed mb-4">
            “Engineering without ethics is just clever problem-solving.
            <span className="gold-text"> HEM adds the human dimension.”</span>
          </blockquote>
          <p className="text-xs text-muted-foreground">
            The Hanuman Execution Model — A Framework for Project Management in
            Technology
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mt-12">
        <div className="section-fade text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ready to see how HEM wraps up?
          </p>
          <button
            type="button"
            onClick={() => navigate("conclusion")}
            data-ocid="why.primary_button"
            className="inline-flex items-center gap-2 px-6 py-3 gold-bg text-white font-semibold rounded-full hover:shadow-gold transition-all duration-200 hover:-translate-y-0.5"
          >
            Read the Conclusion
          </button>
        </div>
      </section>
    </div>
  );
}
