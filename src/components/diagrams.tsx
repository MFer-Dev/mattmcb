/* Inline SVG diagrams — monochrome ink on dark, hairlines, bold type.
   Every diagram scales with its container via viewBox. */

const INK = "#f4f2ec";
const MUTED = "rgba(244,242,236,0.55)";
const FAINT = "rgba(244,242,236,0.22)";
const SANS = "var(--font-geist-sans), system-ui, sans-serif";
const MONO = "var(--font-geist-mono), ui-monospace, monospace";

function Arrow({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0 L10 5 L0 10 z" fill={INK} />
      </marker>
    </defs>
  );
}

const mono = (size: number, fill = MUTED) => ({
  fontFamily: MONO,
  fontSize: size,
  letterSpacing: "0.22em",
  fill,
});
const sans = (size: number, weight = 700, fill = INK) => ({
  fontFamily: SANS,
  fontSize: size,
  fontWeight: weight,
  fill,
  letterSpacing: "-0.02em",
});

/* ------------------------------------------------------------------ */
/* 1. The Value Creation Framework — layered overview                   */
/* ------------------------------------------------------------------ */
export function FrameworkDiagram() {
  const boxes = [
    {
      x: 40,
      label: "SHAPE",
      q: "Are we solving the right problem?",
      d: "Service & experience design · analysis",
    },
    {
      x: 430,
      label: "BUILD & RUN",
      q: "Can we build and run the right solution?",
      d: "Forward-deployed engineering",
    },
    {
      x: 820,
      label: "REALIZE",
      q: "Are we delivering measurable value?",
      d: "Value & analytics",
    },
  ];
  return (
    <svg
      viewBox="0 0 1200 600"
      className="h-auto w-full"
      role="img"
      aria-label="The Value Creation Framework: three motions — Shape, Build & Run, Realize — between an assurance and enablement layer above and an AI enablement foundation beneath, looping back from Realize into Shape."
    >
      <Arrow id="fw-arrow" />
      {/* Enterprise strategy */}
      <text x="600" y="30" textAnchor="middle" style={mono(13)}>
        ENTERPRISE STRATEGY
      </text>
      <line x1="40" y1="50" x2="1160" y2="50" stroke={FAINT} />

      {/* Assurance & enablement layer */}
      <rect x="40" y="78" width="1120" height="64" fill="none" stroke={FAINT} />
      <text x="600" y="106" textAnchor="middle" style={sans(20)}>
        ENTERPRISE ASSURANCE &amp; ENABLEMENT LAYER
      </text>
      <text x="600" y="128" textAnchor="middle" style={mono(11)}>
        GOVERNANCE &amp; ASSURANCE · ORCHESTRATION &amp; ENABLEMENT
      </text>

      {/* Three motions */}
      {boxes.map((b, i) => (
        <g key={b.label}>
          <rect
            x={b.x}
            y="180"
            width="340"
            height="200"
            fill="none"
            stroke={INK}
            strokeWidth="1.5"
          />
          <text x={b.x + 28} y="250" style={sans(38)}>
            {b.label}
          </text>
          <text x={b.x + 28} y="294" style={sans(17, 500)}>
            {b.q}
          </text>
          <text x={b.x + 28} y="340" style={mono(9.5)}>
            {b.d.toUpperCase()}
          </text>
          {i < boxes.length - 1 && (
            <line
              x1={b.x + 340}
              y1="280"
              x2={b.x + 388}
              y2="280"
              stroke={INK}
              strokeWidth="1.5"
              markerEnd="url(#fw-arrow)"
            />
          )}
        </g>
      ))}

      {/* Loop back: Realize → Shape */}
      <path
        d="M 990 380 L 990 420 L 210 420 L 210 384"
        fill="none"
        stroke={INK}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        markerEnd="url(#fw-arrow)"
      />
      <text x="600" y="445" textAnchor="middle" style={mono(11)}>
        REALIZE FEEDS THE NEXT SHAPE — A CLOSED LOOP
      </text>

      {/* AI enablement foundation */}
      <rect x="40" y="478" width="1120" height="64" fill="none" stroke={FAINT} />
      <text x="600" y="506" textAnchor="middle" style={sans(20)}>
        AI ENABLEMENT FOUNDATION
      </text>
      <text x="600" y="528" textAnchor="middle" style={mono(11)}>
        DATA · INTEGRATION · AI &amp; AGENT PLATFORM · REUSABLE COMPONENTS
      </text>

      {/* Core systems */}
      <line x1="40" y1="568" x2="1160" y2="568" stroke={FAINT} />
      <text x="600" y="592" textAnchor="middle" style={mono(13)}>
        ENTERPRISE CORE SYSTEMS
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 2. The continuous lifecycle — a flywheel, not a line                 */
/* ------------------------------------------------------------------ */
export function FlywheelDiagram() {
  const cx = 380;
  const cy = 300;
  const r = 205;
  const nodes = [
    { label: "SHAPE", angle: -90, sub: "Frame & design" },
    { label: "BUILD", angle: 0, sub: "Engineer" },
    { label: "RUN", angle: 90, sub: "Operate" },
    { label: "REALIZE", angle: 180, sub: "Prove & scale" },
  ];
  const pt = (deg: number, rad = r) => {
    const a = (deg * Math.PI) / 180;
    return { x: cx + rad * Math.cos(a), y: cy + rad * Math.sin(a) };
  };
  const arc = (a1: number, a2: number) => {
    const p1 = pt(a1 + 16);
    const p2 = pt(a2 - 16);
    return `M ${p1.x} ${p1.y} A ${r} ${r} 0 0 1 ${p2.x} ${p2.y}`;
  };
  return (
    <svg
      viewBox="0 0 760 600"
      className="mx-auto h-auto w-full max-w-[600px]"
      role="img"
      aria-label="A circular lifecycle: Shape to Build to Run to Realize, and back into Shape."
    >
      <Arrow id="fly-arrow" />
      {nodes.map((n, i) => (
        <path
          key={`arc-${n.label}`}
          d={arc(n.angle, nodes[(i + 1) % 4].angle + (i === 3 ? 360 : 0))}
          fill="none"
          stroke={INK}
          strokeWidth="1.5"
          markerEnd="url(#fly-arrow)"
        />
      ))}
      {nodes.map((n) => {
        const p = pt(n.angle);
        const isSide = n.angle === 0 || n.angle === 180;
        const anchor =
          n.angle === 0 ? "start" : n.angle === 180 ? "end" : "middle";
        const lx = isSide ? p.x + (n.angle === 0 ? 26 : -26) : p.x;
        const ly = isSide ? p.y : n.angle === -90 ? p.y - 28 : p.y + 44;
        return (
          <g key={n.label}>
            <circle cx={p.x} cy={p.y} r="9" fill="#121210" stroke={INK} strokeWidth="1.5" />
            <circle cx={p.x} cy={p.y} r="3.5" fill={INK} />
            <text x={lx} y={ly} textAnchor={anchor} style={sans(26)}>
              {n.label}
            </text>
            <text x={lx} y={ly + 20} textAnchor={anchor} style={mono(10)}>
              {n.sub.toUpperCase()}
            </text>
          </g>
        );
      })}
      <text x={cx} y={cy - 8} textAnchor="middle" style={sans(22)}>
        ONE LIFECYCLE
      </text>
      <text x={cx} y={cy + 18} textAnchor="middle" style={mono(11)}>
        A FLYWHEEL, NOT A LINE
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Shared foundation — build once, every use case above gets cheaper */
/* ------------------------------------------------------------------ */
export function FoundationStackDiagram() {
  const outcomes = ["Reliability", "Quality", "Productivity", "Safety", "Sustainability"];
  const useCases = ["Maintenance", "Inspection", "Copilots", "Control tower", "Simulation"];
  const foundation = [
    "Data & asset models",
    "Integration",
    "Edge AI & vision",
    "Governance & MLOps",
    "Agentic workflows",
    "Value tracking",
  ];
  const chipRow = (items: string[], y: number, bold: boolean) => {
    const w = 1120 / items.length;
    return items.map((t, i) => (
      <g key={t}>
        <rect
          x={40 + i * w + 6}
          y={y}
          width={w - 12}
          height="56"
          fill="none"
          stroke={bold ? INK : FAINT}
          strokeWidth={bold ? 1.5 : 1}
        />
        <text
          x={40 + i * w + w / 2}
          y={y + 34}
          textAnchor="middle"
          style={sans(18, bold ? 700 : 500)}
        >
          {t}
        </text>
      </g>
    ));
  };
  return (
    <svg
      viewBox="0 0 1200 420"
      className="h-auto w-full"
      role="img"
      aria-label="Three layers: business outcomes on top, AI use cases in the middle, one shared foundation beneath, built once."
    >
      <Arrow id="stack-arrow" />
      <text x="40" y="24" style={mono(11)}>BUSINESS OUTCOMES</text>
      {chipRow(outcomes, 36, true)}

      {[0.5, 1.5, 2.5, 3.5, 4.5].map((k) => (
        <line
          key={`up-${k}`}
          x1={40 + k * 224}
          y1="162"
          x2={40 + k * 224}
          y2="104"
          stroke={FAINT}
          markerEnd="url(#stack-arrow)"
        />
      ))}

      <text x="40" y="182" style={mono(11)}>AI USE CASES</text>
      {chipRow(useCases, 194, false)}

      {[0.5, 1.5, 2.5, 3.5, 4.5].map((k) => (
        <line
          key={`up2-${k}`}
          x1={40 + k * 224}
          y1="316"
          x2={40 + k * 224}
          y2="262"
          stroke={FAINT}
          markerEnd="url(#stack-arrow)"
        />
      ))}

      <rect x="40" y="324" width="1120" height="80" fill="none" stroke={INK} strokeWidth="1.5" />
      <text x="60" y="352" style={sans(20)}>SHARED FOUNDATION</text>
      <text x="60" y="374" style={mono(10)}>BUILT ONCE · CONSUMED BY EVERY USE CASE</text>
      <text x="1140" y="368" textAnchor="end" style={sans(15, 500, MUTED)}>
        {foundation.join("  ·  ")}
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 4. 90-day pilot timeline with a value gate                           */
/* ------------------------------------------------------------------ */
export function PilotTimelineDiagram() {
  const phases = [
    { days: "DAYS 0–30", t: "Validate & design" },
    { days: "DAYS 31–60", t: "Build & integrate" },
    { days: "DAYS 61–90", t: "Deploy, measure, decide" },
  ];
  return (
    <svg
      viewBox="0 0 1200 190"
      className="h-auto w-full"
      role="img"
      aria-label="A 90-day pilot in three 30-day phases ending in a value gate."
    >
      {phases.map((p, i) => (
        <g key={p.days}>
          <rect
            x={40 + i * 360}
            y="50"
            width="350"
            height="80"
            fill="none"
            stroke={INK}
            strokeWidth="1.5"
          />
          <text x={60 + i * 360} y="80" style={mono(11)}>{p.days}</text>
          <text x={60 + i * 360} y="112" style={sans(24)}>{p.t}</text>
        </g>
      ))}
      <line x1="40" y1="150" x2="1120" y2="150" stroke={FAINT} />
      <line x1="1120" y1="30" x2="1120" y2="150" stroke={INK} strokeWidth="1.5" />
      <rect x="1106" y="76" width="28" height="28" transform="rotate(45 1120 90)" fill="#121210" stroke={INK} strokeWidth="1.5" />
      <text x="1160" y="86" style={sans(18)}>VALUE</text>
      <text x="1160" y="106" style={sans(18)}>GATE</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Scale in waves                                                    */
/* ------------------------------------------------------------------ */
export function WavesDiagram() {
  const waves = [
    { n: "WAVE 1", t: "Prove", d: "One site · pilot · baseline KPIs · adoption model" },
    { n: "WAVE 2", t: "Expand", d: "More use cases · second site · control tower" },
    { n: "WAVE 3", t: "Scale", d: "Multi-site · shared platform services · portfolio value" },
    { n: "WAVE 4", t: "Transform", d: "Digital twins · physical AI · continuous improvement" },
  ];
  return (
    <svg
      viewBox="0 0 1200 380"
      className="h-auto w-full"
      role="img"
      aria-label="Four ascending waves: prove, expand, scale, transform."
    >
      {waves.map((w, i) => {
        const x = 40 + i * 280;
        const top = 250 - i * 60;
        return (
          <g key={w.n}>
            <rect x={x} y={top} width="270" height={340 - top} fill="none" stroke={i === 3 ? INK : FAINT} strokeWidth={i === 3 ? 1.5 : 1} />
            <text x={x + 20} y={top + 32} style={mono(11)}>{w.n}</text>
            <text x={x + 20} y={top + 72} style={sans(34)}>{w.t}</text>
            {w.d.split(" · ").map((line, k) => (
              <text key={line} x={x + 20} y={top + 104 + k * 22} style={sans(15, 500, MUTED)}>
                {line}
              </text>
            ))}
          </g>
        );
      })}
      <line x1="40" y1="340" x2="1160" y2="340" stroke={INK} strokeWidth="1.5" />
      <text x="40" y="368" style={mono(11)}>USE CASES AND SITES EXPAND TOGETHER — BY VALUE POOL, NOT BY ADDING TECHNOLOGY</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Business case — four-year benefits by initiative                  */
/* ------------------------------------------------------------------ */
export function BusinessCaseChart() {
  const rows = [
    { t: "Direct labor management", v: 6.0 },
    { t: "Computerized maintenance management", v: 2.75 },
    { t: "Production intelligence / KPI control tower", v: 2.6 },
    { t: "Touchless quality control (computer vision)", v: 1.8 },
  ];
  const max = 6.0;
  const barX = 440;
  const barW = 640;
  return (
    <svg
      viewBox="0 0 1200 300"
      className="h-auto w-full"
      role="img"
      aria-label="Four-year benefits by initiative: 6.0, 2.75, 2.6, and 1.8 million dollars."
    >
      <text x="40" y="24" style={mono(11)}>FOUR-YEAR BENEFITS BY INITIATIVE, $M</text>
      {rows.map((r, i) => {
        const y = 56 + i * 58;
        const w = (r.v / max) * barW;
        return (
          <g key={r.t}>
            <text x="40" y={y + 26} style={sans(17, 500)}>{r.t}</text>
            <rect x={barX} y={y} width={barW} height="38" fill="none" stroke={FAINT} />
            <rect x={barX} y={y} width={w} height="38" fill={INK} />
            <text x={barX + w + 14} y={y + 26} style={sans(20)}>
              ${r.v.toFixed(r.v % 1 === 0 ? 1 : 2)}M
            </text>
          </g>
        );
      })}
      <line x1="40" y1="286" x2="1160" y2="286" stroke={FAINT} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Cumulative net benefit over five years                            */
/* ------------------------------------------------------------------ */
export function ValueCurveDiagram() {
  // months → cumulative net $M (illustrative shape of a real anonymized program)
  const pts: [number, number][] = [
    [0, 0],
    [6, -2.2],
    [12, -3.4],
    [18, -2.6],
    [24, -0.9],
    [27, 0],
    [36, 6.5],
    [48, 16.5],
    [60, 28],
  ];
  const x0 = 80;
  const x1 = 1140;
  const yZero = 250;
  const yTop = 50;
  const yBottom = 330;
  const sx = (m: number) => x0 + (m / 60) * (x1 - x0);
  const sy = (v: number) =>
    v >= 0 ? yZero - (v / 28) * (yZero - yTop) : yZero + (-v / 4) * (yBottom - yZero);
  const d = pts.map(([m, v], i) => `${i === 0 ? "M" : "L"} ${sx(m)} ${sy(v)}`).join(" ");
  const area = `${d} L ${sx(60)} ${yZero} L ${sx(0)} ${yZero} Z`;
  return (
    <svg
      viewBox="0 0 1200 380"
      className="h-auto w-full"
      role="img"
      aria-label="Cumulative net benefit over five years: negative during investment, break-even at month 27, about 28 million dollars by month 60."
    >
      <text x="40" y="24" style={mono(11)}>CUMULATIVE NET BENEFIT, $M — EXAMPLE PROGRAM</text>
      <path d={area} fill={INK} opacity="0.08" />
      <line x1={x0} y1={yZero} x2={x1} y2={yZero} stroke={FAINT} />
      {[0, 12, 24, 36, 48, 60].map((m) => (
        <g key={m}>
          <line x1={sx(m)} y1={yZero - 4} x2={sx(m)} y2={yZero + 4} stroke={MUTED} />
          <text x={sx(m)} y={yZero + 24} textAnchor="middle" style={mono(10)}>
            {m === 0 ? "MONTH 0" : `${m}`}
          </text>
        </g>
      ))}
      <path d={d} fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {/* break-even */}
      <line x1={sx(27)} y1={yZero} x2={sx(27)} y2={yZero - 120} stroke={INK} strokeDasharray="5 5" />
      <circle cx={sx(27)} cy={yZero} r="6" fill="#121210" stroke={INK} strokeWidth="2" />
      <text x={sx(27) + 12} y={yZero - 100} style={sans(18)}>BREAK-EVEN</text>
      <text x={sx(27) + 12} y={yZero - 80} style={mono(10)}>MONTH 27</text>
      {/* end */}
      <circle cx={sx(60)} cy={sy(28)} r="6" fill={INK} />
      <text x={sx(60) - 14} y={sy(28) - 16} textAnchor="end" style={sans(30)}>≈ $28M</text>
      <text x={sx(60) - 14} y={sy(28) + 4} textAnchor="end" style={mono(10)}>FIVE-YEAR CUMULATIVE</text>
      <text x={sx(3)} y={yBottom + 24} style={mono(10)}>PILOT SITE</text>
      <text x={sx(20)} y={yBottom + 24} style={mono(10)}>WAVES 1–2</text>
      <text x={sx(42)} y={yBottom + 24} style={mono(10)}>WAVES 3–5</text>
    </svg>
  );
}
