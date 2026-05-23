"use client";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --dark: #0F0F0E;
          --dark-2: #1A1A18;
          --dark-3: #252522;
          --cream: #F4F0E6;
          --beige: #EAE4D6;
          --beige-2: #DDD7C8;
          --sage: #6B8F6E;
          --sage-light: #9DB89F;
          --rose: #B8786A;
          --text-dark: #0F0F0E;
          --text-mid: #4A4540;
          --text-muted: #8A8278;
        }

        body {
          background: var(--cream);
          color: var(--text-dark);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }

        .chakra { font-family: 'Chakra Petch', sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes marquee {
          from { transform:translateX(0); }
          to { transform:translateX(-50%); }
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes lineGrow {
          from { width:0; } to { width:100%; }
        }

        .fade-up { animation: fadeUp 0.7s ease forwards; opacity:0; }
        .d1{animation-delay:0.05s} .d2{animation-delay:0.2s}
        .d3{animation-delay:0.35s} .d4{animation-delay:0.5s}
        .d5{animation-delay:0.65s} .d6{animation-delay:0.8s}

        .cursor {
          display:inline-block; width:4px; height:0.85em;
          background:var(--sage); margin-left:6px;
          vertical-align:middle;
          animation: blink 1s step-end infinite;
        }

        .nav-link {
          color:rgba(255,255,255,0.55); text-decoration:none;
          font-size:0.9rem; letter-spacing:0.05em;
          font-family:'Chakra Petch',sans-serif; font-weight:500;
          transition:color 0.2s;
        }
        .nav-link:hover { color:#fff; }

        .btn-sage {
          background:var(--sage); color:#fff;
          padding:0.75rem 1.75rem; border-radius:6px;
          font-size:0.85rem; font-weight:600;
          font-family:'Chakra Petch',sans-serif;
          letter-spacing:0.06em; text-decoration:none;
          transition:all 0.2s; display:inline-block;
          text-transform:uppercase;
        }
        .btn-sage:hover { background:var(--sage-light); transform:translateY(-2px); }

        .btn-ghost {
          border:1.5px solid rgba(255,255,255,0.25); color:rgba(255,255,255,0.8);
          padding:0.75rem 1.75rem; border-radius:6px;
          font-size:0.85rem; font-family:'Chakra Petch',sans-serif;
          letter-spacing:0.06em; text-decoration:none;
          transition:all 0.2s; display:inline-block;
          text-transform:uppercase;
        }
        .btn-ghost:hover { border-color:var(--sage); color:var(--sage); }

        .marquee-wrap { overflow:hidden; }
        .marquee-track {
          display:flex; width:max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover { animation-play-state:paused; }
        .skill-tag {
          font-family:'Chakra Petch',sans-serif; font-size:0.78rem;
          font-weight:600; letter-spacing:0.1em; text-transform:uppercase;
          color:var(--text-mid); padding:0.45rem 1.2rem;
          border:1px solid var(--beige-2); border-radius:4px;
          margin-right:0.75rem; white-space:nowrap; background:var(--beige);
        }

        .project-card {
          background:#fff; border:1px solid var(--beige-2);
          border-radius:14px; padding:2rem; text-decoration:none;
          color:inherit; display:block; transition:all 0.25s ease;
          position:relative; overflow:hidden;
        }
        .project-card::after {
          content:''; position:absolute; bottom:0; left:0;
          height:3px; width:0; background:var(--sage);
          transition:width 0.3s ease;
        }
        .project-card:hover { border-color:var(--sage); transform:translateY(-4px); box-shadow:0 16px 40px rgba(107,143,110,0.14); }
        .project-card:hover::after { width:100%; }

        .ptag {
          font-size:0.72rem; font-family:'Chakra Petch',sans-serif;
          font-weight:600; letter-spacing:0.08em; text-transform:uppercase;
          background:var(--beige); color:var(--text-muted);
          padding:4px 10px; border-radius:4px;
        }

        .contact-card {
          background:#fff; border:1px solid var(--beige-2);
          border-radius:12px; padding:1.5rem 1.75rem;
          text-decoration:none; color:var(--text-mid);
          display:flex; align-items:center; justify-content:space-between;
          transition:all 0.2s;
        }
        .contact-card:hover { border-color:var(--sage); color:var(--sage); transform:translateY(-3px); box-shadow:0 8px 24px rgba(107,143,110,0.1); }

        @media(max-width:768px) {
          .hero-title { font-size:3.5rem !important; }
          .projects-grid { grid-template-columns:1fr !important; }
          .contact-grid { grid-template-columns:1fr !important; }
          .stats-grid { grid-template-columns:1fr 1fr !important; }
          .nav-links { display:none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(15,15,14,0.93)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '1rem 3rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <span className="chakra" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.1em', color: '#fff' }}>
          ME<span style={{ color: 'var(--sage)' }}>.</span>
        </span>
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#chat" className="nav-link">AI Chat</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://www.upwork.com/freelancers/~01be288743c2f0f1e9" target="_blank" className="btn-sage">Hire me ↗</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'var(--dark)', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '6rem 3rem', position: 'relative', overflow: 'hidden'
      }}>
        {/* Background grid decoration */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(107,143,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(107,143,110,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="fade-up d1" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--sage)', boxShadow: '0 0 12px var(--sage)' }} />
            <span className="chakra" style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage)' }}>
              Available for freelance · Tunisia
            </span>
          </div>

          <h1 className="chakra fade-up d2 hero-title" style={{
            fontSize: '7.5rem', fontWeight: 700, lineHeight: 1.0,
            color: '#fff', marginBottom: '2.5rem', letterSpacing: '-0.02em',
            textAlign: 'center', whiteSpace: 'nowrap'
          }}>
            I build AI{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--sage)' }}>automations</span>{' '}
            that work<span style={{ color: 'var(--sage)' }}>.</span>
            <span className="cursor" />
          </h1>

          <p className="fade-up d3" style={{
            fontSize: '1.5rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.45)',
            maxWidth: '680px', marginBottom: '3rem', fontWeight: 300
          }}>
            Montahe Ezzine — n8n workflows, LLM-powered bots,
            and API integrations built to solve real problems fast.
          </p>

          <div className="fade-up d4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                className="btn-sage"
                onClick={() => {
                  const menu = document.getElementById('contact-menu');
                  if (menu) menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
                }}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Get in touch ↓
              </button>
              <div id="contact-menu" style={{
                display: 'none',
                position: 'absolute',
                top: 'calc(100% + 10px)',
                left: 0,
                background: '#1A1A18',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '0.5rem',
                flexDirection: 'column',
                gap: '0.25rem',
                minWidth: '220px',
                zIndex: 100,
                boxShadow: '0 16px 40px rgba(0,0,0,0.4)'
              }}>
                {[
                  { label: "Upwork", sub: "Hire me directly", href: "https://www.upwork.com/freelancers/~01be288743c2f0f1e9" },
                  { label: "LinkedIn", sub: "Connect professionally", href: "https://linkedin.com/in/montahe-ezzine-baa6b1297" },
                  { label: "Email", sub: "ezzinemontahe@gmail.com", href: "mailto:ezzinemontahe@gmail.com" },
                ].map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none',
                    transition: 'background 0.15s', color: '#fff',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div>
                      <div style={{ fontFamily: 'Chakra Petch,sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.04em' }}>{c.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{c.sub}</div>
                    </div>
                    <span style={{ color: '#6B8F6E', fontSize: '1rem' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
            <a href="#projects" className="btn-ghost">See my work ↓</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div id="skills" className="marquee-wrap" style={{
        background: 'var(--beige)', borderTop: '1px solid var(--beige-2)',
        borderBottom: '1px solid var(--beige-2)', padding: '1.1rem 0'
      }}>
        <div className="marquee-track">
          {[
            "n8n Automation", "Groq API", "OpenAI API", "Telegram Bots", "Make.com",
            "REST APIs", "JavaScript", "Spring Boot", "MySQL", "Linux · Ubuntu",
            "API Integration", "AI Chatbots", "Prompt Engineering", "Self-Hosted AI",
            "n8n Automation", "Groq API", "OpenAI API", "Telegram Bots", "Make.com",
            "REST APIs", "JavaScript", "Spring Boot", "MySQL", "Linux · Ubuntu",
            "API Integration", "AI Chatbots", "Prompt Engineering", "Self-Hosted AI",
          ].map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="chakra" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.5rem' }}>
              Featured Work
            </p>
            <h2 className="chakra" style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
              Things I've built
            </h2>
          </div>
          <a href="https://github.com/EzzineMontahe" target="_blank" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'Chakra Petch,sans-serif', letterSpacing: '0.05em' }}>
            View all on GitHub ↗
          </a>
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {[
            { title: "Home AI Assistant", desc: "Telegram bot with LLM integration, conversation memory, PDF reading, and multi-command support. Fully multilingual: EN, FR, AR.", tags: ["n8n", "Groq API", "Telegram"], link: "https://github.com/EzzineMontahe/home-ai-assistant", badge: "AI Automation" },
            { title: "Student Grade Tracker", desc: "Full-stack CRUD web app with student dashboard, grade calculations, and averages. Spring Boot + Thymeleaf + MySQL.", tags: ["Spring Boot", "MySQL", "Java"], link: "https://github.com/EzzineMontahe/student-grade-tracker", badge: "Full Stack" },
            { title: "Portfolio AI", desc: "This site — Next.js portfolio with an embedded AI assistant that answers questions about my work and handles inquiries in real time.", tags: ["Next.js", "Groq API", "AI"], link: "#", badge: "AI + Web" },
            { title: "Linux Security Lab", desc: "Ubuntu server hardening with SSH configuration, firewall rules, and automated Trivy vulnerability scanning with Jira reporting.", tags: ["Linux", "Bash", "Security"], link: "https://github.com/EzzineMontahe", badge: "Security" }
          ].map(p => (
            <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="ptag">{p.badge}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>↗</span>
              </div>
              <h3 className="chakra" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.65rem', color: 'var(--text-dark)', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DARK STRIP */}
      <section style={{ background: 'var(--dark)', padding: '5rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
          <div>
            <h3 className="chakra" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Solution-oriented.<br />
              <span style={{ color: 'var(--sage)' }}>Accountable for outcomes.</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', maxWidth: '400px', lineHeight: 1.8 }}>
              I don't just write code — I deliver working solutions. Every project I take on, I see through to completion.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {["Arabic · Native", "French · Fluent", "English · C1"].map(l => (
              <span key={l} className="chakra" style={{
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.6)',
                padding: '0.6rem 1.25rem', borderRadius: '6px',
                fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em'
              }}>{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* AI CHAT SECTION */}
      <section id="chat" style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 3rem' }}>
        <p className="chakra" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.5rem' }}>
          AI Assistant
        </p>
        <h2 className="chakra" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
          Ask me anything
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.7 }}>
          My AI assistant knows everything about my work, skills, and availability. Try it right here.
        </p>
        <div style={{
          background: 'var(--dark)', borderRadius: '16px',
          padding: '2rem', border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <ChatWidget inline={true} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: 'var(--beige)', padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="chakra" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.5rem' }}>
            Contact
          </p>
          <h2 className="chakra" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>
            Let's work together
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '3rem', lineHeight: 1.7 }}>
            Open to freelance projects, automations, and collaborations.
          </p>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            {[
              { label: "Upwork", sub: "Hire me directly", href: "https://www.upwork.com/freelancers/~01be288743c2f0f1e9" },
              { label: "LinkedIn", sub: "Connect professionally", href: "https://linkedin.com/in/montahe-ezzine-baa6b1297" },
              { label: "Email", sub: "ezzinemontahe@gmail.com", href: "mailto:ezzinemontahe@gmail.com" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div>
                  <div className="chakra" style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '4px', letterSpacing: '0.02em' }}>{c.label}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{c.sub}</div>
                </div>
                <span style={{ fontSize: '1.3rem', color: 'var(--sage)' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: 'var(--dark)', padding: '2rem 3rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
      }}>
        <span className="chakra" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
          ME<span style={{ color: 'var(--sage)' }}>.</span>
        </span>
        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans, sans-serif' }}>
          © 2026 Montahe Ezzine · Built with Next.js + Groq AI
        </span>
      </footer>

      <ChatWidget inline={false} />
    </>
  );
}