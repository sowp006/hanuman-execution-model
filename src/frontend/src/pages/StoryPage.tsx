import {
  BookOpen,
  ChevronRight,
  Crown,
  Flame,
  Heart,
  Lightbulb,
  Mountain,
  Waves,
} from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";
import { useRouter } from "../router";

const STORY_CARDS = [
  {
    step: "01",
    icon: Crown,
    title: "Who is Hanuman?",
    summary: "A legendary hero from an ancient Indian story",
    paragraphs: [
      "Imagine the most devoted, loyal, and capable person you know — then multiply that by ten. That's Hanuman.",
      "Hanuman is a central character in the Ramayana, one of India's most beloved ancient epics written over 3,000 years ago. He is depicted as a vanara (a forest warrior) with extraordinary strength, intelligence, and devotion.",
      "He served Prince Rama with complete dedication — not because he was ordered to, but because he chose to. His purpose was clear, his skills were sharp, and his character was unshakeable.",
    ],
    highlight:
      "Think of him as the ultimate team player — skilled, focused, and driven by purpose rather than personal gain.",
  },
  {
    step: "02",
    icon: Heart,
    title: "What Was His Mission?",
    summary: "A rescue mission across an ocean — alone",
    paragraphs: [
      "Prince Rama's wife, Sita, was kidnapped by Ravana — a powerful king who ruled the island of Lanka (modern-day Sri Lanka). Ravana took her across the ocean and held her captive.",
      "Rama needed someone he could trust completely to cross the ocean, find Sita, and report back. He chose Hanuman.",
      "This was not a small task. Hanuman had to cross a vast ocean alone, infiltrate a heavily guarded enemy kingdom, locate Sita without being caught, and return safely with life-saving information.",
    ],
    highlight:
      "The mission: scout the unknown, gather critical intelligence, and return — all without backup.",
  },
  {
    step: "03",
    icon: Mountain,
    title: "How Did He Succeed?",
    summary: "Careful planning, bold action, smart adaptation",
    paragraphs: [
      "Hanuman didn't rush in blindly. He first gathered information, assessed his strengths, and formed a plan. Then he leapt across the ocean — an act of extraordinary courage and commitment.",
      "Once in Lanka, he encountered unexpected challenges at every turn. Guards, traps, magical obstacles — he adapted his approach each time without losing sight of his goal.",
      "He found Sita, spoke with her, gathered critical intelligence about Lanka's defenses, and returned to Rama with a full report. His mission was a perfect execution from start to finish.",
    ],
    highlight:
      "Purpose guided him. Planning prepared him. Courage moved him. Adaptability saved him. Communication completed the mission.",
  },
  {
    step: "04",
    icon: Lightbulb,
    title: "Why This Becomes a Model",
    summary: "An ancient journey that mirrors modern projects",
    paragraphs: [
      "When you look at what Hanuman actually did — step by step — it maps almost perfectly onto how successful projects are run today.",
      "He didn't just 'get lucky.' He followed a disciplined process: align with purpose, plan strategically, execute courageously, adapt intelligently, and communicate transparently.",
      "These five qualities are exactly what separates great engineers and project managers from average ones. They are timeless — as relevant in a tech startup today as they were in Hanuman's mission 3,000 years ago.",
    ],
    highlight:
      "Hanuman's journey maps to: Purpose → Plan → Execute → Adapt → Communicate. That's the HEM Framework.",
  },
];

const JOURNEY_STEPS = [
  { icon: Flame, label: "Purpose", sub: "Rama's devotion" },
  { icon: BookOpen, label: "Plan", sub: "Studied Lanka" },
  { icon: Waves, label: "Execute", sub: "Leapt the ocean" },
  { icon: Mountain, label: "Adapt", sub: "Overcame obstacles" },
  { icon: Heart, label: "Communicate", sub: "Full report to Rama" },
];

export default function StoryPage() {
  const { navigate } = useRouter();
  useFadeIn();

  return (
    <div className="pt-28 pb-24">
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="section-fade text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            The Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            The Story Behind the Model
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Never heard of the Ramayana? That's perfectly fine. This page
            explains everything from scratch — who Hanuman is, what he did, and
            why his journey became the foundation for a modern project
            framework.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
        <div className="space-y-8">
          {STORY_CARDS.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <div
                key={card.step}
                className="section-fade bg-white rounded-2xl border border-border shadow-card overflow-hidden"
                style={{ transitionDelay: `${idx * 0.1}s` }}
                data-ocid={`story.item.${idx + 1}`}
              >
                <div className="flex items-start gap-4 p-7 pb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <CardIcon className="w-5 h-5 gold-text" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black gold-text tracking-wider">
                        {card.step}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {card.summary}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {card.title}
                    </h2>
                  </div>
                </div>
                <div className="px-7 pb-4 space-y-3">
                  {card.paragraphs.map((para) => (
                    <p
                      key={para.slice(0, 20)}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mx-7 mb-7 p-4 bg-accent/60 border border-amber-200 rounded-xl">
                  <p className="text-sm text-foreground/80 italic leading-relaxed">
                    <span className="font-semibold gold-text not-italic">
                      Key insight:{" "}
                    </span>
                    {card.highlight}
                  </p>
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
              The Pattern
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
              Hanuman's Journey in 5 Steps
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Look closely and you'll see the same pattern that powers every
              successful modern project.
            </p>
          </div>

          <div className="section-fade hidden md:flex items-start justify-center gap-0 flex-wrap">
            {JOURNEY_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-2 w-28">
                    <div className="w-14 h-14 rounded-full border-2 gold-border bg-white flex items-center justify-center shadow-card">
                      <StepIcon className="w-5 h-5 gold-text" />
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      {step.label}
                    </span>
                    <span className="text-xs text-muted-foreground text-center">
                      {step.sub}
                    </span>
                  </div>
                  {idx < JOURNEY_STEPS.length - 1 && (
                    <div className="flex items-center mb-8 px-1">
                      <div className="w-6 h-0.5 bg-amber-300" />
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
              );
            })}
          </div>

          <div className="section-fade md:hidden space-y-4 max-w-xs mx-auto">
            {JOURNEY_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.label}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-border shadow-card"
                >
                  <div className="w-10 h-10 rounded-full gold-border border-2 flex items-center justify-center shrink-0">
                    <StepIcon className="w-4 h-4 gold-text" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-foreground">
                      {step.label}
                    </span>
                    <p className="text-xs text-muted-foreground">{step.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto mt-16">
        <div className="section-fade bg-white rounded-2xl border border-border shadow-card p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Ready to See the Full Framework?
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Now that you know the story, explore how HEM translates it into a
            5-pillar model for modern project execution.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate("framework")}
              data-ocid="story.primary_button"
              className="flex items-center gap-2 px-6 py-3 gold-bg text-white font-semibold rounded-full hover:shadow-gold transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore Framework
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate("journey")}
              data-ocid="story.secondary_button"
              className="flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-full hover:border-amber-400 transition-all duration-200"
            >
              See Journey Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
