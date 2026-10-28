
"use client";

import { useEffect, useRef, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

const courses = [
  {
    name: "Parichaya",
    subtitle: "Your first step",
    description:
      "Begin your Hindi-learning journey with essential words, pronunciation, and everyday expressions.",
    color: "red",
    number: "01",
  },
  {
    name: "Prathamic",
    subtitle: "Build your foundation",
    description:
      "Develop your basic Hindi reading, writing, vocabulary, and grammar skills.",
    color: "gold",
    number: "02",
  },
  {
    name: "Madhyama",
    subtitle: "Grow your confidence",
    description:
      "Strengthen your understanding of Hindi through structured lessons and practice.",
    color: "blue",
    number: "03",
  },
  {
    name: "Rashtra Bhasha",
    subtitle: "Take the next step",
    description:
      "Continue progressing through a structured Hindi examination pathway.",
    color: "purple",
    number: "04",
  },
  {
    name: "Praveshika",
    subtitle: "Expand your knowledge",
    description:
      "Explore more advanced Hindi language skills through guided learning.",
    color: "green",
    number: "05",
  },
  {
    name: "Visharad & Praveen",
    subtitle: "Advanced learning",
    description:
      "Ask us about Visharad Poorvardh, Visharad Uttarardh, Praveen Poorvardh, and Praveen Uttarardh.",
    color: "red",
    number: "06",
  },
];

const spokenLevels = [
  "Level 1",
  "Level 2",
  "Level 3",
  "Level 4",
  "Level 5",
  "Level 6",
  "Level 7",
  "Level 8",
];

const cities = [
  "📍Erode",
  "📍Chennai",
  "📍Bengaluru",
  "📍Hyderabad",
  "📍Coimbatore",
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/919578157000?text=" +
    encodeURIComponent(
      "Hello! I would like to enquire about Hindi classes at Shri Sankara Academy."
    );

  return (
    <main className="netflix-site">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Shri Sankara Academy home">
          
<img
  src="/logo.png"
  alt="Shri Sankara Academy logo"
  className="brand-logo"
/>

          <span className="brand-name">
            SHRI SANKARA
            <small>HINDI ACADEMY</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>
            Courses
          </a>
          <a href="#spoken-hindi" onClick={() => setMenuOpen(false)}>
            Spoken Hindi
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Enquire Now
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="eyebrow">
            <span className="live-dot" /> YOUR HINDI LEARNING JOURNEY
          </p>

          <h1>
            YOUR NEXT
            <br />
            CHAPTER
            <br />
            <span>STARTS HERE.</span>
          </h1>

          <p className="hero-description">
            A new language opens a new world. Learn Hindi with structured
            lessons, personal guidance, and a learning journey built around you.
          </p>

          <div className="hero-actions">
            <a href="#courses" className="button button-primary">
              <span>▶</span> Explore Courses
            </a>
            <a href="#about" className="button button-secondary">
              Discover Our Academy
            </a>
          </div>

          <div className="hero-meta">
            <span>25+ YEARS OF TEACHING EXPERIENCE</span>
            <span className="meta-divider">|</span>
            <span>ONLINE & IN-PERSON</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="hero-book">
            <div className="book-cover">
              <span className="book-small">YOUR JOURNEY</span>
              <span className="book-hindi">हिन्दी</span>
              <span className="book-title">LEARN.</span>
              <span className="book-title">GROW.</span>
              <span className="book-bottom">ONE LESSON AT A TIME</span>
            </div>
            <div className="book-pages" />
          </div>
          <span className="floating-letter letter-one">अ</span>
          <span className="floating-letter letter-two">क</span>
          <span className="floating-letter letter-three">म</span>
        </div>

        <a href="#about" className="scroll-cue">
          <span /> SCROLL TO DISCOVER
        </a>
      </section>

      <section className="intro-strip">
        <p>
          EVERY WORD YOU LEARN IS <span>A NEW POSSIBILITY.</span>
        </p>
      </section>

      <section className="section about-section" id="about">
        <Reveal>
          <p className="eyebrow">THE STORY BEHIND YOUR LEARNING</p>
          <h2>
            Learn with purpose.
            <br />
            <span>Grow with confidence.</span>
          </h2>
          <p className="section-description">
            Shri Sankara Academy helps learners build their Hindi language
            skills through structured courses and guided practice. Whether you
            are beginning from scratch or preparing for an examination, we can
            help you explore the right learning path.
          </p>
        </Reveal>

        <div className="feature-grid">
          <Reveal className="feature-card">
            <span className="feature-number">01</span>
            <h3>Structured Learning</h3>
            <p>
              Follow a clear learning path from foundational Hindi to advanced
              course levels.
            </p>
          </Reveal>
          <Reveal className="feature-card">
            <span className="feature-number">02</span>
            <h3>Personal Guidance</h3>
            <p>
              Learn with guidance from an experienced Hindi educator, with
              lessons suited to your learning stage.
            </p>
          </Reveal>
          <Reveal className="feature-card">
            <span className="feature-number">03</span>
            <h3>Flexible Learning</h3>
            <p>
              Ask about online and in-person classes and available timings.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section courses-section" id="courses">
        <Reveal>
          <p className="eyebrow">CHOOSE YOUR NEXT CHAPTER</p>
          <h2>
            Your Hindi journey,
            <br />
            <span>one book at a time.</span>
          </h2>
          <p className="section-description">
            Explore the course pathway. Scroll down to watch each book open.
          </p>
        </Reveal>

        <div className="course-grid">
          {courses.map((course, index) => (
            <Reveal className="course-reveal" key={course.number}>
              <article className={`course-card tone-${course.color}`}>
                <div className="course-book-scene">
                  <div className="course-book">
                    <div className="course-book-back">
                      <span>SHRI SANKARA ACADEMY</span>
                    </div>
                    <div className="course-book-pages">
                      <span>{course.number}</span>
                    </div>
                    <div className="course-book-front">
                      <span className="course-book-label">HINDI COURSE</span>
                      <span className="course-book-number">
                        {course.number}
                      </span>
                      <h3>{course.name}</h3>
                      <span className="course-book-line" />
                      <span className="course-book-footer">YOUR NEXT CHAPTER</span>
                    </div>
                  </div>
                </div>

                <div className="course-copy">
                  <p className="course-subtitle">{course.subtitle}</p>
                  <p>{course.description}</p>
                  <a
                    href={`${whatsappLink}&course=${encodeURIComponent(course.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Enquire about this course <span>↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="course-note">
          Course placement and eligibility can be discussed during your enquiry.
        </p>
      </section>

      <section className="founder-section" id="founder">
        <div className="founder-backdrop" />
        <div className="founder-content">
          <Reveal>
            <p className="eyebrow">MEET YOUR EDUCATOR</p>
            <h2>
              Guided by experience.
              <br />
              <span>Built on dedication.</span>
            </h2>
            <p className="founder-name">Sudha Guruprasad</p>
            <p className="founder-role">
              Hindi Pandit · Educator · Hindi Book Author
            </p>
            <p className="founder-description">
              With over 25 years of Hindi teaching experience, Sudha
              Guruprasad guides learners through their language-learning
              journey with structured lessons and a focus on building
              confidence.
            </p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-primary">
              Learn With Us <span>↗</span>
            </a>
          </Reveal>
        </div>
        <div className="founder-visual" aria-hidden="true">
          <div className="founder-ring ring-one" />
          <div className="founder-ring ring-two" />
          <div className="founder-monogram">
  <img
    src="/logo.png"
    alt="Shri Sankara Academy logo"
    className="educator-logo"
  />
</div>
          <div className="founder-caption">A JOURNEY OF KNOWLEDGE</div>
        </div>
      </section>

      <section className="section spoken-section" id="spoken-hindi">
        <Reveal>
          <p className="eyebrow">SPEAK WITH CONFIDENCE</p>
          <h2>
            Vani Vikas
            <br />
            <span>Spoken Hindi.</span>
          </h2>
          <p className="section-description">
            Want to communicate more comfortably in Hindi? Explore Vani Vikas
            Spoken Hindi, with eight levels to support your learning journey.
          </p>
        </Reveal>

        <div className="levels-grid">
          {spokenLevels.map((level, index) => (
            <Reveal key={level} className="level-reveal">
              <div className="level-card" style={{ transitionDelay: `${index * 60}ms` }}>
                <span className="level-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="level-name">{level}</span>
                <span className="level-arrow">↗</span>
              </div>
            </Reveal>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="button button-secondary"
        >
          Ask About Spoken Hindi
        </a>
      </section>

      <section className="exam-section">
        <Reveal>
          <p className="eyebrow">LEARN · PRACTISE · PROGRESS</p>
          <h2>
            Prepare for your
            <br />
            <span>Hindi examinations.</span>
          </h2>
          <p className="section-description">
            We offer guidance for courses associated with Dakshina Bharat Hindi
            Prachar Sabha examinations. Contact the academy to discuss the
            appropriate course and examination pathway for your level.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Ask About Examinations <span>↗</span>
          </a>
        </Reveal>
      </section>

      <section className="section reach-section">
        <Reveal>
          <p className="eyebrow">LEARN FROM WHERE YOU ARE</p>
          <h2>
            Hindi learning,
            <br />
            <span>wherever you are.</span>
          </h2>
          <p className="section-description">
            Interested in learning online? Contact us to enquire about
            availability and suitable class timings.
          </p>
        </Reveal>

        <div className="city-list">
          {cities.map((city, index) => (
            <Reveal key={city}>
              <div className="city-item">
                <span className="city-index">0{index + 1}</span>
                <span>{city}</span>
                <span className="city-arrow">↗</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="city-note">
          Online class availability and timings are confirmed during enquiry.
        </p>
      </section>

      <section className="admissions-section" id="contact">
        <div className="admissions-glow" />
        <Reveal>
          <p className="eyebrow">YOUR NEXT CHAPTER BEGINS WITH ONE MESSAGE</p>
          <h2>
            Ready to begin
            <br />
            <span>your Hindi journey?</span>
          </h2>
          <p className="section-description">
            Tell us your learning goal. We’ll help you enquire about courses,
            class formats, timings, and fees.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="button button-primary admissions-button"
          >
            Enquire on WhatsApp <span>↗</span>
          </a>
        </Reveal>
      </section>

      <footer className="site-footer">
        <a href="#home" className="brand footer-brand">
          <img
  src="/logo.png"
  alt="Shri Sankara Academy logo"
  className="brand-logo"
/>
          <span className="brand-name">
            SHRI SANKARA
            <small>HINDI ACADEMY</small>
          </span>
        </a>

        <div className="footer-details">
          <p>D1, Anandham Block, Periyar Maalighai, Erode, Tamil Nadu.</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp: +91 95781 57000
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Shri Sankara Academy</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
