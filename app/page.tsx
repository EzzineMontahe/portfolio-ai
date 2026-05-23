"use client";

import { useEffect, useRef, useState } from "react";
import ChatWidget from "./components/ChatWidget";

const SKILLS = [
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/ffffff" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/ffffff" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ffffff" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Telegram", icon: "https://cdn.simpleicons.org/telegram/26A5E4" },
  { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Groq", icon: "https://cdn.simpleicons.org/groq/ffffff" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
];

const PROJECTS = [
  {
    title: "B2B Email Automation",
    desc: "AI-powered prospecting system — automated personalized outreach using n8n + Groq + Brevo. Google Sheets as CRM, 100+ contacts, dynamic AI-generated emails in French.",
    tags: ["n8n", "Groq API", "Brevo"],
    badge: "Client Work",
    link: "#",
    metric: "100+ contacts automated",
  },
  {
    title: "Telegram AI Support Bot",
    desc: "Production-ready AI support bot deployed on DigitalOcean. Features: sub-second responses, FAQ matching, conversation memory, smart escalation, Google Sheets logging. Cloud-hosted with ngrok + PM2.",
    tags: ["n8n", "Groq API", "Telegram", "DigitalOcean"],
    badge: "AI Automation",
    link: "https://github.com/EzzineMontahe/telegram-ai-support-bot",
    metric: "Cloud deployed",
  },
  {
    title: "Home AI Assistant",
    desc: "Personal Telegram bot with LLM integration, conversation memory, PDF reading, and multi-command support (/study /translate /cook /clear). Fully multilingual: EN, FR, AR.",
    tags: ["n8n", "Groq API", "Telegram"],
    badge: "AI Automation",
    link: "https://github.com/EzzineMontahe/home-ai-assistant",
    metric: "3 languages supported",
  },
  {
    title: "Portfolio AI",
    desc: "This site — Next.js portfolio with an embedded AI assistant that answers questions about my work and handles inquiries in real time.",
    tags: ["Next.js", "Groq API", "AI"],
    badge: "AI + Web",
    link: "#",
    metric: "Live AI chat",
  },
  {
    title: "Student Grade Tracker",
    desc: "Full-stack CRUD web app with student dashboard, grade calculations, and averages. Spring Boot + Thymeleaf + MySQL.",
    tags: ["Spring Boot", "MySQL", "Java"],
    badge: "Full Stack",
    link: "https://github.com/EzzineMontahe/student-grade-tracker",
    metric: "Full-stack app",
  },
  {
    title: "Linux Security Lab",
    desc: "Ubuntu server hardening with SSH configuration, firewall rules, and automated Trivy vulnerability scanning with Jira reporting.",
    tags: ["Linux", "Bash", "Security"],
    badge: "Security",
    link: "https://github.com/EzzineMontahe",
    metric: "Production hardened",
  },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [contactOpen, setContactOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --dark: #080808;
          --dark-2: #0f0f0f;
          --dark-3: #161616;
          --dark-4: #1e1e1e;
          --sage: #6B8F6E;
          --sage-light: #8fb892;
          --sage-glow: rgba(107,143,110,0.15);
          --pink: #C4728A;
          --pink-light: #d98fa3;
          --pink-glow: rgba(196,114,138,0.15);
          --cream: #e8e0d0;
          --text: #c8c4be;
          --text-muted: #8a8580;
          --border: rgba(255,255,255,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--dark);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
          cursor: none;
        }

        .chakra { font-family: 'Chakra Petch', sans-serif; }

        /* CUSTOM CURSOR */
        .cursor-dot {
          width: 6px; height: 6px;
          background: var(--sage);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .cursor-ring {
          width: 32px; height: 32px;
          border: 1px solid rgba(107,143,110,0.5);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: all 0.15s ease;
        }

        /* SCROLL REVEAL */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes marquee {
          from { transform:translateX(0); }
          to { transform:translateX(-50%); }
        }
        @keyframes float {
          0%,100% { transform:translateY(0); }
          50% { transform:translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 20px rgba(107,143,110,0.2); }
          50% { box-shadow: 0 0 40px rgba(107,143,110,0.4); }
        }
        @keyframes grid-fade {
          from { opacity:0; } to { opacity:1; }
        }
        @keyframes scanline {
          from { transform: translateY(-100%); }
          to { transform: translateY(100vh); }
        }

        .fade-up { animation: fadeUp 0.8s ease forwards; opacity:0; }
        .d1{animation-delay:0.1s} .d2{animation-delay:0.25s}
        .d3{animation-delay:0.4s} .d4{animation-delay:0.55s}
        .d5{animation-delay:0.7s}

        .cursor-blink {
          display:inline-block; width:3px; height:0.8em;
          background:var(--sage); margin-left:4px;
          vertical-align:middle;
          animation: blink 1s step-end infinite;
        }

        /* NAV */
        nav {
          position: fixed; top:0; left:0; right:0; z-index:100;
          padding: 1.1rem 3rem;
          display: flex; justify-content:space-between; align-items:center;
          background: rgba(8,8,8,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }

        .nav-logo {
          font-family:'Chakra Petch',sans-serif;
          font-size:1rem; font-weight:700;
          letter-spacing:0.12em; color:#fff;
        }

        .nav-links { display:flex; gap:2.5rem; align-items:center; }

        .nav-link {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.78rem; font-weight:500;
          letter-spacing:0.08em; text-transform:uppercase;
          color:var(--text-muted); text-decoration:none;
          transition:color 0.2s;
          position:relative;
        }
        .nav-link::after {
          content:''; position:absolute; bottom:-4px; left:0;
          width:0; height:1px; background:var(--sage);
          transition:width 0.3s ease;
        }
        .nav-link:hover { color:#fff; }
        .nav-link:hover::after { width:100%; }

        .btn-hire {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.78rem; font-weight:600;
          letter-spacing:0.1em; text-transform:uppercase;
          color:#fff; text-decoration:none;
          padding:0.6rem 1.4rem;
          border:1px solid var(--sage);
          border-radius:4px;
          transition:all 0.3s ease;
          position:relative; overflow:hidden;
        }
        .btn-hire::before {
          content:''; position:absolute; inset:0;
          background:var(--sage); transform:translateX(-100%);
          transition:transform 0.3s ease;
        }
        .btn-hire:hover::before { transform:translateX(0); }
        .btn-hire span { position:relative; z-index:1; }

        /* HERO */
        .hero {
          min-height:100vh;
          display:flex; flex-direction:column; justify-content:center;
          padding: 8rem 3rem 4rem;
          position:relative; overflow:hidden;
        }

        .hero-grid {
          position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(107,143,110,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107,143,110,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: grid-fade 2s ease forwards;
        }

        .hero-glow {
          position:absolute;
          width:600px; height:600px;
          background:radial-gradient(circle, rgba(107,143,110,0.08) 0%, transparent 70%);
          border-radius:50%;
          top:50%; left:50%;
          transform:translate(-50%,-50%);
          pointer-events:none;
        }

        .hero-scanline {
          position:absolute; left:0; right:0;
          height:1px;
          background:linear-gradient(to right, transparent, rgba(107,143,110,0.3), transparent);
          animation: scanline 8s linear infinite;
          pointer-events:none;
        }

        .hero-inner {
          max-width:1200px; margin:0 auto; width:100%;
          position:relative; z-index:1;
          display:flex; flex-direction:column; align-items:center;
          text-align:center;
        }

        .hero-badge {
          display:inline-flex; align-items:center; gap:0.6rem;
          font-family:'Chakra Petch',sans-serif;
          font-size:0.72rem; font-weight:600;
          letter-spacing:0.2em; text-transform:uppercase;
          color:var(--pink-light); margin-bottom:2rem;
          padding:0.4rem 1rem;
          border:1px solid rgba(196,114,138,0.3);
          border-radius:100px;
          background:rgba(196,114,138,0.05);
        }

        .hero-dot {
          width:6px; height:6px; border-radius:50%;
          background:var(--pink);
          box-shadow: 0 0 8px var(--pink);
          animation: pulse-glow 2s ease infinite;
        }

        .hero-title {
          font-family:'Chakra Petch',sans-serif;
          font-size:clamp(3rem, 7.5vw, 8rem);
          font-weight:700; line-height:1.0;
          color:#fff; margin-bottom:1.5rem;
          letter-spacing:-0.02em;
          white-space:nowrap;
        }

        .hero-title .outline {
          color:transparent;
          -webkit-text-stroke:2px var(--sage);
        }

        .hero-sub {
          font-size:clamp(1rem, 1.5vw, 1.2rem);
          line-height:1.8; color:rgba(255,255,255,0.4);
          max-width:560px; margin-bottom:3rem; font-weight:300;
        }

        .hero-buttons {
          display:flex; gap:1rem; flex-wrap:wrap; justify-content:center;
          margin-bottom:4rem;
        }

        .btn-primary {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.8rem; font-weight:600;
          letter-spacing:0.1em; text-transform:uppercase;
          background:var(--sage); color:#fff;
          padding:0.8rem 2rem; border-radius:4px;
          border:none; cursor:pointer;
          transition:all 0.3s ease;
          position:relative; overflow:hidden;
        }
        .btn-primary:hover { background:var(--sage-light); transform:translateY(-2px); box-shadow:0 8px 24px rgba(107,143,110,0.3); }

        .btn-secondary {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.8rem; font-weight:500;
          letter-spacing:0.08em; text-transform:uppercase;
          background:transparent; color:rgba(255,255,255,0.7);
          padding:0.8rem 2rem; border-radius:4px;
          border:1px solid rgba(255,255,255,0.15);
          cursor:pointer; text-decoration:none;
          transition:all 0.3s ease;
        }
        .btn-secondary:hover { border-color:var(--sage); color:#fff; }

        /* CONTACT DROPDOWN */
        .contact-menu {
          position:absolute; top:calc(100% + 10px); left:50%;
          transform:translateX(-50%);
          background:#111; border:1px solid rgba(255,255,255,0.1);
          border-radius:10px; padding:0.5rem;
          display:flex; flex-direction:column; gap:0.25rem;
          min-width:240px; z-index:9999;
          box-shadow:0 20px 60px rgba(0,0,0,0.6);
        }

        .contact-option {
          display:flex; justify-content:space-between; align-items:center;
          padding:0.8rem 1rem; border-radius:8px;
          text-decoration:none; color:#fff;
          transition:background 0.15s;
        }
        .contact-option:hover { background:rgba(107,143,110,0.1); }

        /* MARQUEE */
        .marquee-wrap { overflow:hidden; padding:1.5rem 0; }
        .marquee-track {
          display:flex; width:max-content;
          animation:marquee 35s linear infinite;
          gap:2.5rem;
        }
        .marquee-track:hover { animation-play-state:paused; }

        .skill-logo {
          display:flex; flex-direction:column; align-items:center; gap:0.5rem;
          opacity:0.5; transition:opacity 0.3s, transform 0.3s;
          cursor:default;
        }
        .skill-logo:hover { opacity:1; transform:translateY(-4px); }
        .skill-logo img { width:32px; height:32px; object-fit:contain; filter:brightness(0.9); }
        .skill-logo span {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.6rem; font-weight:600;
          letter-spacing:0.1em; text-transform:uppercase;
          color:var(--text-muted);
        }

        /* SECTIONS */
        section { padding:6rem 3rem; }
        .section-inner { max-width:1200px; margin:0 auto; }

        .section-label {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.68rem; font-weight:600;
          letter-spacing:0.2em; text-transform:uppercase;
          color:var(--pink-light); margin-bottom:0.75rem;
          display:flex; align-items:center; gap:0.75rem;
        }
        .section-label::after {
          content:''; flex:1; max-width:60px; height:1px;
          background:linear-gradient(to right, var(--sage), var(--pink));
          opacity:0.6;
        }

        .section-title {
          font-family:'Chakra Petch',sans-serif;
          font-size:clamp(2rem, 4vw, 3.2rem);
          font-weight:700; color:#fff;
          letter-spacing:-0.02em; margin-bottom:3rem;
          line-height:1.1;
        }

        /* PROJECTS */
        .projects-grid {
          display:grid; grid-template-columns:repeat(2,1fr);
          gap:1.25rem;
        }

        .project-card {
          background:var(--dark-2);
          border:1px solid var(--border);
          border-radius:12px; padding:2rem;
          text-decoration:none; color:inherit;
          display:block; position:relative; overflow:hidden;
          transition:all 0.4s ease;
        }

        .project-card::before {
          content:''; position:absolute;
          top:0; left:0; right:0; height:1px;
          background:linear-gradient(to right, transparent, var(--sage), transparent);
          transform:scaleX(0); transition:transform 0.4s ease;
        }

        .project-card::after {
          content:''; position:absolute; inset:0;
          background:radial-gradient(circle at 50% 0%, rgba(107,143,110,0.05) 0%, transparent 60%);
          opacity:0; transition:opacity 0.4s ease;
        }

        .project-card:hover {
          border-color:rgba(107,143,110,0.3);
          transform:translateY(-4px);
          box-shadow:0 20px 60px rgba(0,0,0,0.4);
        }
        .project-card:hover::before { transform:scaleX(1); }
        .project-card:hover::after { opacity:1; }

        .project-badge {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.65rem; font-weight:600;
          letter-spacing:0.1em; text-transform:uppercase;
          color:var(--pink-light); background:rgba(196,114,138,0.1);
          border:1px solid rgba(196,114,138,0.25);
          padding:3px 10px; border-radius:100px;
        }

        .project-metric {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.65rem; font-weight:500;
          letter-spacing:0.08em; color:#a09b96;
        }

        .project-title {
          font-family:'Chakra Petch',sans-serif;
          font-size:1.15rem; font-weight:700;
          color:#fff; margin:0.85rem 0 0.5rem;
          letter-spacing:-0.01em;
        }

        .project-desc {
          font-size:0.9rem; line-height:1.8;
          color:#9a9590; margin-bottom:1.25rem;
        }

        .project-tag {
          font-family:'Chakra Petch',sans-serif;
          font-size:0.65rem; font-weight:600;
          letter-spacing:0.08em; text-transform:uppercase;
          background:var(--dark-4); color:var(--text-muted);
          padding:3px 9px; border-radius:4px;
          border:1px solid var(--border);
        }

        /* DARK STRIP */
        .dark-strip {
          background:var(--dark-2);
          border-top:1px solid var(--border);
          border-bottom:1px solid var(--border);
          padding:4rem 3rem;
        }

        /* CHAT SECTION */
        .chat-box {
          background:var(--dark-2);
          border:1px solid var(--border);
          border-radius:16px; overflow:hidden;
          box-shadow:0 0 60px rgba(107,143,110,0.05);
        }

        .chat-header {
          padding:1rem 1.5rem;
          border-bottom:1px solid var(--border);
          display:flex; align-items:center; gap:0.75rem;
        }

        /* CONTACT */
        .contact-card {
          background:var(--dark-2);
          border:1px solid var(--border);
          border-radius:12px; padding:1.5rem 1.75rem;
          text-decoration:none; color:var(--text);
          display:flex; align-items:center; justify-content:space-between;
          transition:all 0.3s ease; position:relative; overflow:hidden;
        }
        .contact-card::before {
          content:''; position:absolute; left:0; top:0; bottom:0;
          width:3px; background:var(--sage);
          transform:scaleY(0); transition:transform 0.3s ease;
        }
        .contact-card:hover { border-color:rgba(107,143,110,0.3); color:#fff; transform:translateX(4px); }
        .contact-card:hover::before { transform:scaleY(1); }

        /* FOOTER */
        footer {
          background:var(--dark);
          border-top:1px solid var(--border);
          padding:2rem 3rem;
          display:flex; justify-content:space-between; align-items:center;
          flex-wrap:wrap; gap:1rem;
        }

        @media(max-width:768px) {
          .hero-title { white-space:normal !important; font-size:clamp(2.5rem,10vw,4rem) !important; }
          .projects-grid { grid-template-columns:1fr !important; }
          .contact-grid { grid-template-columns:1fr !important; }
          .nav-links { display:none; }
          nav { padding:1rem 1.5rem; }
          section { padding:4rem 1.5rem; }
          .hero { padding:7rem 1.5rem 3rem; }
        }
      `}</style>

      {/* CURSOR */}
      <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="cursor-ring" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* NAV */}
      <nav>
        <span className="nav-logo chakra">
          ME<span style={{ color: "var(--sage)" }}>.</span>
        </span>
        <div className="nav-links">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#chat" className="nav-link">AI Chat</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://www.upwork.com/freelancers/~01be288743c2f0f1e9" target="_blank" className="btn-hire">
            <span>Hire me ↗</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-scanline" />

        <div className="hero-inner">
          <div className="hero-badge fade-up d1">
            <span className="hero-dot" />
            Available for freelance · Tunisia
          </div>

          <h1 className="hero-title fade-up d2">
            I build <span className="outline">AI</span><br />
            automations<br />
            that work<span style={{ color: "var(--sage)" }}>.</span>
            <span className="cursor-blink" />
          </h1>

          <p className="hero-sub fade-up d3">
            Montahe Ezzine — n8n workflows, LLM-powered bots,
            and API integrations built to solve real problems fast.
          </p>

          <div className="hero-buttons fade-up d4">
            <div style={{ position: "relative" }}>
              <button className="btn-primary" onClick={() => setContactOpen(!contactOpen)}>
                Get in touch ↓
              </button>
              {contactOpen && (
                <div className="contact-menu">
                  {[
                    { label: "Upwork", sub: "Hire me directly", href: "https://www.upwork.com/freelancers/~01be288743c2f0f1e9" },
                    { label: "LinkedIn", sub: "Connect professionally", href: "https://linkedin.com/in/montahe-ezzine-baa6b1297" },
                    { label: "Email", sub: "ezzinemontahe@gmail.com", href: "mailto:ezzinemontahe@gmail.com" },
                  ].map(c => (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-option">
                      <div>
                        <div className="chakra" style={{ fontWeight: 700, fontSize: "0.9rem" }}>{c.label}</div>
                        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>{c.sub}</div>
                      </div>
                      <span style={{ color: "var(--sage)" }}>↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#projects" className="btn-secondary">See my work ↓</a>
          </div>

          {/* Mini stats */}
          <div className="fade-up d5" style={{
            display: "flex", gap: "3rem", justifyContent: "center",
            borderTop: "1px solid var(--border)", paddingTop: "2.5rem",
            flexWrap: "wrap"
          }}>
            {[["6+", "Projects Built"], ["n8n + LLMs", "Core Stack"], ["AR·FR·EN", "Languages"], ["Open", "For Work"]].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div className="chakra" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{val}</div>
                <div className="chakra" style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <div id="skills" style={{ background: "var(--dark-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...SKILLS, ...SKILLS].map((s, i) => (
              <div key={i} className="skill-logo">
                <img src={s.icon} alt={s.name} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" style={{ background: "var(--dark)" }}>
        <div className="section-inner">
          <p className="section-label reveal">Featured Work</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 className="section-title reveal" style={{ marginBottom: 0 }}>Things I've built</h2>
            <a href="https://github.com/EzzineMontahe" target="_blank" style={{
              fontFamily: "Chakra Petch, sans-serif", fontSize: "0.75rem",
              color: "var(--text-muted)", textDecoration: "none",
              letterSpacing: "0.08em", transition: "color 0.2s"
            }}>View all on GitHub ↗</a>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
                className={`project-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span className="project-badge">{p.badge}</span>
                  <span className="project-metric">{p.metric}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <div style={{
                  position: "absolute", top: "1.5rem", right: "1.5rem",
                  color: "var(--text-muted)", fontSize: "1rem",
                  transition: "color 0.2s, transform 0.2s"
                }}>↗</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DARK STRIP */}
      <div className="dark-strip">
        <div className="section-inner" style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "3rem"
        }}>
          <div className="reveal">
            <h3 className="chakra" style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700,
              color: "#fff", lineHeight: 1.2, marginBottom: "1rem"
            }}>
              Solution-oriented.<br />
              <span style={{ color: "var(--sage)" }}>Accountable for outcomes.</span>
            </h3>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", maxWidth: "400px", lineHeight: 1.8 }}>
              I don't just write code — I deliver working solutions.
              Every project I take on, I see through to completion.
            </p>
          </div>
          <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["Arabic · Native", "French · Fluent", "English · C1"].map(l => (
              <span key={l} className="chakra" style={{
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
                padding: "0.55rem 1.25rem", borderRadius: "4px",
                fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.06em"
              }}>{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* AI CHAT */}
      <section id="chat" style={{ background: "var(--dark)" }}>
        <div className="section-inner">
          <p className="section-label reveal">AI Assistant</p>
          <h2 className="section-title reveal">Ask me anything</h2>
          <p className="reveal" style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "2.5rem", maxWidth: "500px", lineHeight: 1.7 }}>
            My AI assistant knows everything about my work, skills, and availability. Try it right here.
          </p>
          <div className="chat-box reveal">
            <div className="chat-header">
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sage)", animation: "pulse-glow 2s infinite" }} />
              <span className="chakra" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", color: "#fff" }}>
                Montahe's AI Assistant
              </span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginLeft: "auto" }}>
                Powered by Groq · LLaMA 3.3 70B
              </span>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <ChatWidget inline={true} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "var(--dark-2)", borderTop: "1px solid var(--border)" }}>
        <div className="section-inner">
          <p className="section-label reveal">Contact</p>
          <h2 className="section-title reveal">Let's work together</h2>
          <p className="reveal" style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "3rem", lineHeight: 1.7 }}>
            Open to freelance projects, automations, and collaborations.
          </p>
          <div className="contact-grid reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              { label: "Upwork", sub: "Hire me directly", href: "https://www.upwork.com/freelancers/~01be288743c2f0f1e9" },
              { label: "LinkedIn", sub: "Connect professionally", href: "https://linkedin.com/in/montahe-ezzine-baa6b1297" },
              { label: "Email", sub: "ezzinemontahe@gmail.com", href: "mailto:ezzinemontahe@gmail.com" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div>
                  <div className="chakra" style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>{c.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{c.sub}</div>
                </div>
                <span style={{ fontSize: "1.2rem", color: "var(--sage)" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="chakra" style={{ fontSize: "0.9rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em" }}>
          ME<span style={{ color: "var(--sage)" }}>.</span>
        </span>
        <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>
          © 2026 Montahe Ezzine · Built with Next.js + Groq AI
        </span>
      </footer>

      <ChatWidget inline={false} />
    </>
  );
}
