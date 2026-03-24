import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Map as MapIcon,
  MessageSquare,
  RefreshCw,
  ScrollText,
  Star,
  Target,
  Zap,
} from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";
import { useRouter } from "../router";

const PILLARS = [
  { num: "01", title: "Purpose Alignment", icon: Target },
  { num: "02", title: "Strategic Planning", icon: MapIcon },
  { num: "03", title: "Courageous Execution", icon: Zap },
  { num: "04", title: "Adaptability", icon: RefreshCw },
  { num: "05", title: "Communication", icon: MessageSquare },
  { num: "06", title: "Delivery", icon: CheckCircle },
];

export default function HomePage() {
  const { navigate } = useRouter();
  useFadeIn();

  return (
    <div>
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="section-fade">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent rounded-full text-xs font-semibold gold-text mb-6 border border-amber-200">
              <Star className="w-3 h-3" />
              Ancient Wisdom for Modern Engineering
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight text-foreground mb-4">
              Hanuman
              <br />
              <span className="gold-text italic">Execution</span>
              <br />
              Model
            </h1>
            <p className="text-lg font-semibold text-foreground mb-2">
              A Dharmic Framework for Project Execution in Technology
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              HEM bridges India's ancient leadership wisdom from the Ramayana
              with modern software engineering practices — creating a
              principled, human-centered approach to technology project
              management.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate("framework")}
                data-ocid="hero.primary_button"
                className="flex items-center gap-2 px-6 py-3 gold-bg text-white font-semibold rounded-full hover:shadow-gold transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Framework
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate("story")}
                data-ocid="hero.secondary_button"
                className="flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-full hover:border-amber-400 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>

          <div
            className="section-fade hidden lg:block"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-card border border-border p-6 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ॐ</span>
                  </div>
                  <span className="font-bold text-sm text-foreground">
                    6 Pillars of HEM
                  </span>
                </div>
                {PILLARS.map((p, idx) => (
                  <div
                    key={p.num}
                    className="flex items-center gap-3 p-3 rounded-xl bg-accent/50 border border-amber-100"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <span className="text-xs font-bold gold-text w-6">
                      {p.num}
                    </span>
                    <p.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {p.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-amber-100/60 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-orange-100/40 -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="section-fade text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Explore the Project
          </h2>
          <p className="text-muted-foreground mt-2">
            Dive into any section of the Hanuman Execution Model
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              label: "Framework",
              desc: "The 6 pillars of HEM — Purpose, Planning, Execution, Adaptability, Communication, Delivery.",
              page: "framework" as const,
              tag: "Core Model",
            },
            {
              icon: BookOpen,
              label: "Case Study",
              desc: "A food delivery startup applied HEM from day one. See the results.",
              page: "case-study" as const,
              tag: "Real-World",
            },
            {
              icon: ScrollText,
              label: "The Story",
              desc: "New to the Ramayana? Start here for a beginner-friendly introduction to Hanuman's mission.",
              page: "story" as const,
              tag: "Beginner Friendly",
            },
          ].map((card, idx) => (
            <div
              key={card.label}
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
              <h3 className="text-base font-bold text-foreground mb-2">
                {card.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {card.desc}
              </p>
              <button
                type="button"
                onClick={() => navigate(card.page)}
                data-ocid={`home.${card.label.toLowerCase().replace(" ", "_")}.button`}
                className="flex items-center gap-1.5 text-sm font-semibold gold-text hover:underline"
              >
                Explore <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 warm-section">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { value: "6", label: "Core Pillars" },
              { value: "3000+", label: "Years of Wisdom" },
              { value: "∞", label: "Applications" },
            ].map((stat) => (
              <div key={stat.label} className="section-fade">
                <div className="text-4xl font-black gold-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
