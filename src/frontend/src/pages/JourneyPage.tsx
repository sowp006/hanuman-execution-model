import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";

interface Location {
  id: string;
  label: string;
  cx: number;
  cy: number;
  phase: string;
  story: string;
  phaseDesc: string;
  color: string;
}

const LOCATIONS: Location[] = [
  {
    id: "kishkindha",
    label: "Kishkindha",
    cx: 72,
    cy: 98,
    phase: "Planning & Stakeholder Alignment",
    story:
      "In the forests of Kishkindha (present-day Karnataka), Hanuman formed a powerful alliance with Rama, gathered intelligence about Lanka, and helped organize the Vanara army for the mission. Every detail was planned before a single step was taken toward the south.",
    phaseDesc:
      "Project teams must define objectives, identify stakeholders, build alliances, and create a detailed plan before any execution begins. Rushing into execution without alignment leads to chaos.",
    color: "#C9A46A",
  },
  {
    id: "ocean",
    label: "Ocean Crossing",
    cx: 72,
    cy: 148,
    phase: "Risk-Taking & Courageous Execution",
    story:
      "Hanuman stood at the southern tip of India and leapt 100 yojanas across the ocean — an act that required absolute conviction, overcoming self-doubt, and trusting in his own capabilities. No map, no safety net, no guarantee of return.",
    phaseDesc:
      "Every high-impact project requires a moment of bold commitment. Teams must ship despite uncertainty, launch despite imperfection, and trust in their preparation when facing the unknown.",
    color: "#E07B4A",
  },
  {
    id: "lanka",
    label: "Lanka",
    cx: 96,
    cy: 178,
    phase: "Execution, Adaptability & Communication",
    story:
      "In Lanka, Hanuman executed flawlessly: he found Sita, delivered Rama's message, assessed Lanka's defenses, destroyed the Ashoka Vatika to send a message, and set Lanka's towers ablaze — then returned to report everything with perfect clarity and transparency.",
    phaseDesc:
      "The execution phase demands adaptability (Hanuman changed strategies multiple times) and transparent communication (his report to Rama aligned the entire army for the final battle).",
    color: "#B5552A",
  },
];

export default function JourneyPage() {
  const [selected, setSelected] = useState<string | null>(null);
  useFadeIn();

  const selectedLoc = LOCATIONS.find((l) => l.id === selected);

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-12">
        <div className="section-fade text-center">
          <span className="text-xs font-semibold uppercase tracking-widest gold-text">
            Interactive Map
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-3">
            Hanuman's Journey
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            An Interactive Map of the Mission. Click each location to discover
            what Hanuman did there and the corresponding project management
            phase.
          </p>
        </div>
      </section>

      {/* Map + Info */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="section-fade grid lg:grid-cols-2 gap-8 items-start">
          {/* SVG Map */}
          <div className="bg-white rounded-3xl border border-border shadow-card p-6">
            <p className="text-xs font-semibold text-muted-foreground text-center mb-4 uppercase tracking-wider">
              India & Sri Lanka — Click the markers
            </p>
            <svg
              viewBox="0 0 180 220"
              className="w-full max-w-sm mx-auto"
              role="img"
              aria-label="Interactive map of Hanuman's journey from Kishkindha to Lanka"
              style={{
                filter: "drop-shadow(0 4px 16px rgba(201,164,106,0.1))",
              }}
            >
              <title>
                Interactive map of Hanuman&apos;s journey from Kishkindha to
                Lanka
              </title>
              {/* Ocean / sea background */}
              <rect width="180" height="220" fill="#EFF6FF" rx="12" />

              {/* Bay of Bengal / Indian Ocean subtle tint */}
              <ellipse
                cx="130"
                cy="140"
                rx="55"
                ry="70"
                fill="#DBEAFE"
                opacity="0.5"
              />
              <ellipse
                cx="40"
                cy="120"
                rx="35"
                ry="60"
                fill="#DBEAFE"
                opacity="0.4"
              />

              {/* India landmass — simplified polygon */}
              <polygon
                points="28,22 108,14 132,42 142,88 128,128 96,156 78,165 54,148 32,104 18,62"
                fill="#FEF3C7"
                stroke="#D97706"
                strokeWidth="1.5"
              />

              {/* Sri Lanka — small island */}
              <ellipse
                cx="96"
                cy="178"
                rx="10"
                ry="13"
                fill="#FDE68A"
                stroke="#D97706"
                strokeWidth="1.5"
              />

              {/* Strait between India and Lanka */}
              <path
                d="M 80,165 Q 85,170 96,165"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="1"
                strokeDasharray="3,2"
              />

              {/* Location Labels */}
              <text
                x="30"
                y="55"
                fontSize="5.5"
                fill="#92400E"
                fontWeight="600"
                opacity="0.7"
              >
                Deccan
              </text>
              <text x="85" y="40" fontSize="5" fill="#92400E" opacity="0.5">
                Gangetic Plain
              </text>
              <text x="145" y="150" fontSize="5" fill="#3B82F6" opacity="0.7">
                Bay of
              </text>
              <text x="143" y="157" fontSize="5" fill="#3B82F6" opacity="0.7">
                Bengal
              </text>
              <text x="8" y="145" fontSize="5" fill="#3B82F6" opacity="0.7">
                Arabian
              </text>
              <text x="10" y="152" fontSize="5" fill="#3B82F6" opacity="0.7">
                Sea
              </text>
              <text x="105" y="200" fontSize="5" fill="#92400E" opacity="0.5">
                Indian Ocean
              </text>

              {/* Journey path dashed line */}
              <path
                d="M 72,98 Q 70,125 72,148 Q 82,162 96,178"
                fill="none"
                stroke="#D97706"
                strokeWidth="1.5"
                strokeDasharray="4,3"
                opacity="0.6"
              />

              {/* Markers */}
              {LOCATIONS.map((loc) => {
                const isSelected = selected === loc.id;
                const toggle = () => setSelected(isSelected ? null : loc.id);
                return (
                  <g
                    key={loc.id}
                    onClick={toggle}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle();
                    }}
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={`${loc.label}: ${loc.phase}`}
                    style={{ cursor: "pointer" }}
                    data-ocid={`journey.${loc.id}.button`}
                  >
                    {/* Pulse ring */}
                    {isSelected && (
                      <circle
                        cx={loc.cx}
                        cy={loc.cy}
                        r="14"
                        fill={loc.color}
                        opacity="0.15"
                      >
                        <animate
                          attributeName="r"
                          values="10;16;10"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.2;0.05;0.2"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    {/* Outer circle */}
                    <circle
                      cx={loc.cx}
                      cy={loc.cy}
                      r={isSelected ? "9" : "7"}
                      fill={isSelected ? loc.color : "white"}
                      stroke={loc.color}
                      strokeWidth={isSelected ? "0" : "2"}
                      opacity={isSelected ? 1 : 0.7}
                    />
                    {/* Inner dot */}
                    <circle
                      cx={loc.cx}
                      cy={loc.cy}
                      r="3"
                      fill={isSelected ? "white" : loc.color}
                    />
                    {/* Label */}
                    <text
                      x={loc.cx + 12}
                      y={loc.cy + 4}
                      fontSize="6"
                      fontWeight={isSelected ? "700" : "500"}
                      fill={isSelected ? loc.color : "#44403C"}
                    >
                      {loc.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Info Panel */}
          <div>
            {selectedLoc ? (
              <div
                key={selectedLoc.id}
                className="bg-white rounded-2xl border border-border shadow-card p-7 animate-fade-up"
                data-ocid="journey.info.panel"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: selectedLoc.color }}
                  />
                  <h2 className="text-xl font-bold text-foreground">
                    {selectedLoc.label}
                  </h2>
                </div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 border"
                  style={{
                    backgroundColor: `${selectedLoc.color}18`,
                    borderColor: `${selectedLoc.color}40`,
                    color: selectedLoc.color,
                  }}
                >
                  {selectedLoc.phase}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {selectedLoc.story}
                </p>
                <div className="bg-accent/60 rounded-xl p-4 border border-amber-200">
                  <p className="text-xs font-bold uppercase tracking-wider gold-text mb-2">
                    Project Phase
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {selectedLoc.phaseDesc}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="bg-white rounded-2xl border border-dashed border-amber-300 p-10 text-center"
                data-ocid="journey.empty_state"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl" role="img" aria-label="map">
                    🗺️
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  Click a location
                </h3>
                <p className="text-sm text-muted-foreground">
                  Select Kishkindha, Ocean, or Lanka on the map to explore what
                  Hanuman did there and the corresponding project management
                  phase.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelected(loc.id)}
                      className="text-sm font-medium py-2 px-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors text-left flex items-center gap-2"
                      data-ocid={`journey.${loc.id}.button`}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: loc.color }}
                      />
                      {loc.label} — {loc.phase}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Phase summary strip */}
        <div className="section-fade mt-10 grid sm:grid-cols-3 gap-4">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelected(loc.id)}
              data-ocid={`journey.${loc.id}.button`}
              className={`rounded-xl p-4 border text-left transition-all hover-lift ${
                selected === loc.id
                  ? "border-amber-400 bg-amber-50"
                  : "border-border bg-white hover:border-amber-200"
              }`}
            >
              <div
                className="w-2 h-2 rounded-full mb-2"
                style={{ backgroundColor: loc.color }}
              />
              <div className="font-bold text-sm text-foreground mb-1">
                {loc.label}
              </div>
              <div className="text-xs text-muted-foreground">{loc.phase}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
