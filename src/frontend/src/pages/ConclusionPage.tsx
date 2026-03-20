import { ArrowLeft } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";
import { useRouter } from "../router";

export default function ConclusionPage() {
  const { navigate } = useRouter();
  useFadeIn();

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 text-center">
        <div className="section-fade">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            Final Thoughts
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Conclusion
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Why Ethical Leadership Matters in Technology
          </p>
        </div>
      </section>

      {/* Quote card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12">
        <div className="section-fade relative bg-white rounded-3xl p-10 border border-border shadow-card">
          <div className="absolute top-6 left-8 text-6xl gold-text opacity-20 font-serif leading-none select-none">
            &ldquo;
          </div>
          <blockquote className="text-xl leading-relaxed text-foreground font-medium relative z-10">
            Technology without ethics is power without wisdom. The Ramayana
            teaches us that even the most capable individual — Hanuman, who
            could alter his size, fly across oceans, and lift mountains — chose
            to serve a righteous purpose rather than his own ambition.
            <span className="gold-text font-bold">
              {" "}
              The future of engineering belongs to builders who combine
              technical excellence with moral clarity.
            </span>
          </blockquote>
          <div className="absolute bottom-6 right-8 text-6xl gold-text opacity-20 font-serif leading-none select-none">
            &rdquo;
          </div>
        </div>
      </section>

      {/* Theme pills */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12">
        <div className="section-fade grid sm:grid-cols-3 gap-4 text-center">
          {[
            { label: "Value-based", sub: "Engineering Culture" },
            { label: "Dharmic", sub: "Leadership Principles" },
            { label: "Human-centered", sub: "Technology Design" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-accent rounded-xl px-6 py-4 border border-amber-200 hover-lift"
            >
              <div className="text-base font-bold gold-text">{item.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12">
        <div className="section-fade bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-8 border border-amber-200 text-center">
          <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">ॐ</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-4">
            The Hanuman Execution Model is a beginning, not an endpoint.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every project is a Yatra — a sacred journey toward a goal that
            matters. HEM gives engineers a vocabulary, a framework, and a moral
            compass for that journey. As India's technology sector grows, the
            builders who will shape it must be both technically excellent and
            deeply human. That is the promise of the Hanuman Execution Model.
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <div className="section-fade px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <button
          type="button"
          onClick={() => navigate("home")}
          data-ocid="conclusion.back.button"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 gold-border gold-text font-semibold rounded-full hover:gold-bg hover:text-white transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>
    </div>
  );
}
