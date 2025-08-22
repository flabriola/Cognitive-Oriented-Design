import React, { useEffect, useMemo, useState } from "react";
import type { Section } from "../types";
import "./Navigation.css";

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  density?: number;      // 0..1 portion of top→bottom arc
}

const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  onSectionChange,
  density = 0.92,
}) => {
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );
  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Geometry: big circle with centre off-screen left
  const R = vh * 1.35;
  const cy = vh / 2;
  const cx = -R * 0.65;
  const svgWidth = R;
  const svgHeight = vh;

  // Visible arc (top→bottom slice)
  const arcTotal = Math.PI * density;       // e.g. ~166°
  const startAngle = -arcTotal / 2;         // near -83°
  const endAngle = arcTotal / 2;         // near +83°
  const anchorAngle = 0;                    // where the ACTIVE dot should sit (middle of arc)

  // Path for bezel line
  const arcPath = useMemo(() => {
    const sx = cx + R * Math.cos(startAngle);
    const sy = cy + R * Math.sin(startAngle);
    const ex = cx + R * Math.cos(endAngle);
    const ey = cy + R * Math.sin(endAngle);
    const largeArcFlag = arcTotal > Math.PI ? 1 : 0;
    return `M ${sx} ${sy} A ${R} ${R} 0 ${largeArcFlag} 1 ${ex} ${ey}`;
  }, [cx, cy, R, startAngle, endAngle, arcTotal]);

  // Items
  const items = useMemo(() => sections.map(s => ({ id: s.id })), [sections]);
  const activeIndex = Math.max(
    0,
    items.findIndex(i => i.id === activeSection)
  );

  // Base angles for each item (evenly spaced along visible arc)
  const baseAngles = useMemo(() => {
    const n = Math.max(1, items.length);
    return items.map((_, i) => {
      const t = n === 1 ? 0.5 : i / (n - 1);
      return startAngle + t * (endAngle - startAngle);
    });
  }, [items, startAngle, endAngle]);

  // Compute phase so ACTIVE lands on anchorAngle
  const phase = useMemo(() => {
    if (items.length === 0) return 0;
    return anchorAngle - baseAngles[activeIndex];
  }, [anchorAngle, baseAngles, activeIndex, items.length]);

  // Final positions (with phase applied)
  const dots = useMemo(() => {
    return items.map((it, i) => {
      const a = baseAngles[i] + phase;
      const x = cx + R * Math.cos(a);
      const y = cy + R * Math.sin(a);
      return { id: it.id, x, y };
    });
  }, [items, baseAngles, phase, cx, cy, R]);

  return (
    <nav className="navigation">
      <svg
        className="bezel"
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="xMinYMin slice"
      >
        <path d={arcPath} className="bezel-arc" />

        {dots.map(d => {
          const active = d.id === activeSection;
          return (
            <g key={d.id} className="nav-node" transform={`translate(${d.x}, ${d.y})`}>
              <circle
                className={`nav-dot ${active ? "active" : ""}`}
                r={4}                               // <- fixed
                onClick={() => onSectionChange(d.id)}
              />

            </g>
          );
        })}
      </svg>
    </nav>
  );
};

export default Navigation;
