import { BookOpen, Brain, Flame, Heart, Lightbulb, Shield } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

export default function AboutPage() {
  useFadeIn();

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="section-fade text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            About
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            About This Project
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The Hanuman Execution Model draws on the timeless principles of the
            Ramayana to create a structured, human-centered framework for
            technology project management.
          </p>
        </div>
      </section>

      {/* What is this project */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-12">
        <div className="section-fade bg-white rounded-2xl p-8 border border-border shadow-card">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 gold-text" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                What is this project?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Hanuman Execution Model (HEM) is a conceptual framework that
                maps the five essential qualities demonstrated by Hanuman in his
                mission to Lanka onto the five critical phases of modern
                software project management. It is designed as a college
                mini-project exploring how ancient Indian knowledge systems can
                be integrated into contemporary engineering education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                HEM is both a methodology and a philosophy — it doesn't just
                describe what to do, but why it matters. By anchoring every
                phase in a virtuous quality (purpose, strategy, courage,
                adaptability, transparency), it ensures that engineers become
                not just skilled builders, but principled leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ramayana */}
      <section className="py-12 warm-section">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="section-fade">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-xs">
                <BookOpen className="w-5 h-5 gold-text" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why Ramayana is Relevant Today
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Ramayana is not merely a religious text — it is a
                sophisticated manual for leadership, crisis management,
                coalition building, and ethical decision-making. Written over
                3,000 years ago, it addresses challenges that remain deeply
                familiar to any project manager: unclear requirements, shifting
                alliances, resource constraints, and high-stakes decisions under
                uncertainty.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hanuman's mission to Lanka is especially instructive. He was
                given a single objective, operated alone in hostile territory,
                had to improvise when circumstances changed, and reported
                truthfully to his principal even when the news was complex.
                Every modern engineering team faces analogous situations in
                every sprint.
              </p>
            </div>
            <div
              className="section-fade grid grid-cols-2 gap-4"
              style={{ transitionDelay: "0.15s" }}
            >
              {[
                {
                  icon: Flame,
                  label: "Courage",
                  desc: "Risk-taking with conviction",
                },
                {
                  icon: Brain,
                  label: "Intelligence",
                  desc: "Strategic reconnaissance",
                },
                {
                  icon: Heart,
                  label: "Devotion",
                  desc: "Unwavering goal commitment",
                },
                {
                  icon: Shield,
                  label: "Dharma",
                  desc: "Ethical decision-making",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-4 border border-amber-200 hover-lift"
                >
                  <item.icon className="w-5 h-5 gold-text mb-2" />
                  <div className="font-bold text-sm text-foreground">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Engineers Need Ethical Frameworks */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-12">
        <div className="section-fade text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Why Engineers Need Ethical Frameworks
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Decisions at Scale",
              body: "Software decisions affect millions. An engineer who hasn't internalized ethical principles will optimize for metrics at the expense of people — and won't even notice.",
            },
            {
              icon: Brain,
              title: "Leadership Vacuum",
              body: "India's tech sector is growing faster than its leadership culture. Technical brilliance without ethical grounding creates talented individuals who cannot build great teams or trusted products.",
            },
            {
              icon: Flame,
              title: "Ancient Advantage",
              body: "India's unique inheritance of Dharmic philosophy gives its engineers a distinct advantage: a rich, tested vocabulary for ethical reasoning that Western frameworks simply lack.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="section-fade bg-white rounded-2xl p-7 border border-border shadow-card hover-lift"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 gold-text" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
