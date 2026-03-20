import { BookOpen, Globe, GraduationCap } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const ALIGNMENT_CARDS = [
  {
    icon: Globe,
    title: "SDG Goals",
    subtitle: "Quality Education & Reduced Inequalities",
    body: "HEM promotes ethical, equitable technology development aligned with UN Sustainable Development Goals 4 and 10 — ensuring technology serves all of society, not just the privileged few.",
    tag: "SDG 4 & 10",
    goals: [
      "Quality Education for all engineers",
      "Reduced inequality through ethical tech",
      "Responsible innovation at scale",
    ],
  },
  {
    icon: BookOpen,
    title: "NEP 2020",
    subtitle: "Value-Based Curriculum Integration",
    body: "The National Education Policy 2020 calls for integrating Indian Knowledge Systems into higher education. HEM directly implements this vision by applying Ramayana principles to modern engineering pedagogy.",
    tag: "IKS Integration",
    goals: [
      "Indian Knowledge Systems in curriculum",
      "Holistic and multidisciplinary learning",
      "Ethical and value-based education",
    ],
  },
  {
    icon: GraduationCap,
    title: "Value-Based Education",
    subtitle: "Ethical Leadership in Technology",
    body: "Technical education must cultivate character alongside capability. HEM ensures future engineers inherit both the brilliance of modern systems thinking and the moral clarity of India's ancient leadership wisdom.",
    tag: "Ethics in Tech",
    goals: [
      "Character alongside capability",
      "Moral clarity in engineering decisions",
      "Human-centered technology design",
    ],
  },
];

export default function AlignmentPage() {
  useFadeIn();

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="section-fade text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            Bigger Picture
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Alignment
          </h1>
          <p className="text-xl font-semibold text-foreground mb-3">
            National &amp; Global Goals
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            HEM is not just an academic exercise — it aligns with India's
            educational vision and the world's sustainability agenda.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {ALIGNMENT_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="section-fade bg-white rounded-2xl p-7 border border-border shadow-card hover-lift flex flex-col"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
                  <card.icon className="w-5 h-5 gold-text" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-amber-100 gold-text rounded-full">
                  {card.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">
                {card.title}
              </h3>
              <p className="text-xs font-semibold gold-text mb-3">
                {card.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {card.body}
              </p>
              <ul className="mt-auto space-y-2">
                {card.goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full gold-bg mt-1.5 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Alignment diagram */}
      <section className="py-16 warm-section mt-12">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="section-fade">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              HEM at the Intersection
            </h2>
            <div className="relative inline-flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center absolute -translate-x-12">
                <div className="text-center px-4">
                  <div className="text-xs font-bold text-amber-800 leading-tight">
                    Ramayana
                    <br />
                    Wisdom
                  </div>
                </div>
              </div>
              <div className="w-40 h-40 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center absolute translate-x-12">
                <div className="text-center px-4">
                  <div className="text-xs font-bold text-orange-800 leading-tight">
                    Modern
                    <br />
                    Engineering
                  </div>
                </div>
              </div>
              <div className="w-24 h-24 rounded-full gold-bg flex items-center justify-center z-10 shadow-gold">
                <div className="text-center">
                  <div className="text-white font-bold text-sm leading-tight">
                    HEM
                  </div>
                </div>
              </div>
              <div className="w-52 h-52" />
            </div>
            <p className="text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
              HEM sits at the intersection of ancient Dharmic wisdom and modern
              engineering practice — a bridge between India's intellectual
              heritage and its technological future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
