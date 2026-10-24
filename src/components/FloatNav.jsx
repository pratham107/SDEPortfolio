import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { DiGithub } from "react-icons/di";
import { FiGrid } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "@/Redux/feature/ThemeSlice";
import "./FloatNav.css";

const SECTIONS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// Light mode = "Soft Pastel" (lavender-to-pink pill, deep violet icons)
// Dark mode  = "Violet Bento" (violet-to-pink pill, white icons)
const THEMES = {
  light: {
    gradient: "linear-gradient(90deg,#a78bfa,#f9a8d4,#a78bfa)",
    icon: "#1f1640",
    highlight: "rgba(31,22,64,0.14)",
    glow: "rgba(167,139,250,0.55)",
  },
  dark: {
    gradient: "linear-gradient(90deg,#8b5cf6,#ec4899,#8b5cf6)",
    icon: "#ffffff",
    highlight: "rgba(255,255,255,0.22)",
    glow: "rgba(139,92,246,0.55)",
  },
};

const FloatNav = () => {
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const isDark = theme === "dark";
  const t = THEMES[isDark ? "dark" : "light"];

  const toggleTheme = () => {
    dispatch(updateTheme(isDark ? "light" : "dark"));
  };

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav
        aria-label="Quick links"
        className="fn-nav pointer-events-auto relative flex items-center gap-1 rounded-full p-2 transition-colors duration-500"
        style={{
          color: t.icon,
          "--fn-hl": t.highlight,
          boxShadow: `0 10px 30px -8px ${t.glow}`,
        }}
      >
        {/* Background: both themes stacked, cross-fading */}
        <span
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden rounded-full"
        >
          <span
            className="fn-bg absolute inset-0"
            style={{ backgroundImage: THEMES.light.gradient, opacity: isDark ? 0 : 1 }}
          />
          <span
            className="fn-bg absolute inset-0"
            style={{ backgroundImage: THEMES.dark.gradient, opacity: isDark ? 1 : 0 }}
          />
          <span className="fn-shine" />
        </span>

        <div className="relative flex items-center gap-1">
          <button
            type="button"
            aria-label="Show portfolio sections"
            aria-expanded={sectionsOpen}
            aria-controls="portfolio-sections"
            onClick={() => setSectionsOpen((open) => !open)}
            className="fn-item"
          >
            <FiGrid />
          </button>

          <a href="#top" aria-label="Home" aria-current="page" className="fn-item">
            <BiHome />
          </a>

          <span className="mx-1 h-7 w-0.5 rounded bg-current opacity-40" />

          <a href="#projects" aria-label="Projects" className="fn-item">
            <CiViewList />
          </a>
          <a
            href="https://www.linkedin.com/in/prathmesh-bhopale-70b091212"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="fn-item"
          >
            <LiaLinkedinIn />
          </a>

          <span className="mx-1 h-7 w-0.5 rounded bg-current opacity-40" />

          <a
            href="https://github.com/pratham107"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="fn-item"
          >
            <DiGithub />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            className="fn-item"
          >
            <span key={theme} className="fn-swap">
              {isDark ? <BsSun /> : <BsMoonStars />}
            </span>
          </button>
        </div>

        {sectionsOpen && (
          <div
            id="portfolio-sections"
            aria-label="Portfolio sections"
            className={`absolute bottom-full left-1/2 mb-3 max-h-[60vh] w-48 -translate-x-1/2 overflow-y-auto rounded-2xl p-2 shadow-xl ${
              isDark
                ? "border border-white/10 bg-zinc-900 text-white"
                : "border border-slate-200 bg-white text-slate-900"
            }`}
          >
            {SECTIONS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setSectionsOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-current/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-current"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default FloatNav;