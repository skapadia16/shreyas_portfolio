import React, { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Check, Code2, Database, Github, GraduationCap, Layers3, Linkedin,
  Mail, MapPin, Menu, Network, Phone, Sparkles, X, Terminal, Workflow
} from 'lucide-react';

const profile = {
  name: 'Kapadiya Shreyas M.',
  role: 'Aspiring AI Engineer · ML Engineer',
  email: 'shreyashkapadia1@gmail.com',
  phone: '+919510355767',
  location: 'Ahmedabad, Gujarat, India',
  linkedin: 'https://www.linkedin.com/in/shreyas-kapadiya',
  github: 'https://github.com/skapadia16',
};

const skillGroups = [
  { title: 'Languages', icon: Code2, items: ['Python', 'JavaScript', 'PHP', 'SQL'] },
  { title: 'Frameworks & Libraries', icon: Layers3, items: ['React.js', 'FastAPI', 'Laravel', 'Bootstrap', 'Pandas', 'NumPy', 'Scikit-learn'] },
  { title: 'Generative AI & RAG', icon: BrainCircuit, items: ['LangChain', 'RAG', 'Hugging Face', 'Embeddings', 'FAISS', 'Vector Search'] },
  { title: 'ML & Developer Tools', icon: Database, items: ['Supervised Learning', 'Clustering', 'Regression', 'Deep Learning', 'Data Visualization', 'Git', 'GitHub', 'RESTful APIs', 'Relational Databases'] },
];

const projects = [
  {
    number: '01', type: 'FULL-STACK DEVELOPMENT', title: 'Hospital Management System',
    description: 'A full-stack application designed to streamline healthcare administrative workflows and organize day-to-day operations.',
    details: ['RESTful API endpoints using FastAPI', 'Database structures for patient records and medical documentation', 'Staff scheduling workflows'],
    stack: ['React', 'FastAPI', 'Python'], icon: BriefcaseBusiness, className: 'project-blue',
    link: 'https://github.com/skapadia16/Hospital_management', linkLabel: 'View repository'
  },
  {
    number: '02', type: 'GENERATIVE AI · RAG', title: 'YouTube Chatbot',
    description: 'A retrieval-augmented chatbot that lets users ask natural-language questions about a YouTube video using its transcript as context.',
    details: ['Extracts and processes a video transcript', 'Splits transcript text into chunks for retrieval', 'Uses retrieved context to generate relevant answers'],
    stack: ['Python', 'LangChain', 'LLM', 'RAG'], icon: Network, className: 'project-violet'
  },
  {
    number: '03', type: 'MACHINE LEARNING', title: 'Crop Recommendation System',
    description: 'A machine-learning application that recommends suitable crops based on soil and environmental parameters.',
    details: ['Data preprocessing and exploratory data analysis', 'Random Forest classification model', 'Crop prediction from input parameters'],
    stack: ['Python', 'Scikit-learn', 'Random Forest'], icon: Workflow, className: 'project-green'
  },
];

const experience = [
  { date: 'FEB 2026 — PRESENT', role: 'Data Science Intern', company: 'Sparks To Ideas', location: 'Ahmedabad', points: ['Clean, analyze, and visualize datasets using Pandas, NumPy, and Matplotlib.', 'Implement regression, classification, and clustering models with Scikit-learn.'], tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'] },
  { date: 'JUL 2024 — NOV 2025', role: 'Software Engineering Intern', company: 'Elite Sigma', location: 'Ahmedabad', points: ['Developed dynamic frontend components using JavaScript, HTML, and CSS for production applications.', 'Debugged cross-browser compatibility and UI issues across active web modules.'], tags: ['JavaScript', 'HTML', 'CSS', 'Frontend'] },
];

function SectionLabel({ children }) { return <div className="section-label"><span className="label-dot" />{children}</div>; }
function SectionHeading({ eyebrow, title, text }) { return <div className="section-heading"><SectionLabel>{eyebrow}</SectionLabel><h2>{title}</h2>{text && <p>{text}</p>}</div>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = `mailto:${profile.email}`; }
  };

  const nav = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'], ['projects', 'Projects'], ['education', 'Education']];

  return <>
    <div className="site-noise" aria-hidden="true" />
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Shreyas home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SHREYAS<span>/</span>PORTFOLIO</span></a>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {nav.map(([id, label]) => <a key={id} className={activeSection === id ? 'nav-active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
      </nav>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot" /> OPEN TO OPPORTUNITIES <span className="availability-line" /></div>
          <p className="hero-intro">Hi, I'm <span>Shreyas.</span></p>
          <h1>I build at the<br /><span className="gradient-text">intersection of</span><br />AI &amp; software.</h1>
          <p className="hero-description">MSc Data Science student exploring intelligent systems through machine learning, LLM applications, and full-stack development.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a><a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
          <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} /></a><span className="social-separator" /><span><MapPin size={14} /> Ahmedabad, India</span></div>
        </div>
        <div className="hero-visual" aria-label="Decorative AI network illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="orbit-core"><div className="core-glow" /><BrainCircuit size={76} strokeWidth={1.1} /><span className="core-caption">INTELLIGENCE<br />IN MOTION</span></div>
          <div className="float-chip chip-python"><span className="chip-icon">Py</span><span><b>Python</b><small>Core language</small></span></div>
          <div className="float-chip chip-rag"><span className="chip-symbol"><Network size={17} /></span><span><b>RAG / LLMs</b><small>Context-aware AI</small></span></div>
          <div className="float-chip chip-ml"><span className="chip-symbol"><Sparkles size={17} /></span><span><b>Machine Learning</b><small>Models & insights</small></span></div>
          <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div><div className="visual-cross cross-c">+</div>
          <div className="visual-caption"><span className="caption-line" /> BUILD · LEARN · ITERATE</div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-mouse"><span /></span> SCROLL TO EXPLORE <ArrowDown size={13} /></a>
        <div className="hero-index">01 <span>/</span> 07</div>
      </section>

      <section className="about section-wrap section-space" id="about">
        <div className="about-aside reveal"><div className="aside-number">01<span> / ABOUT</span></div><div className="aside-rule" /><div className="aside-note">CURIOUS BY NATURE.<br />ENGINEERED TO BUILD.</div></div>
        <div className="about-content reveal"><SectionLabel>ABOUT ME</SectionLabel><h2>From data to decisions.<br /><span className="muted-heading">From ideas to applications.</span></h2><div className="about-body"><p>I'm an MSc Data Science student at Silver Oak University with a software engineering background and hands-on experience across AI/ML, LLMs, RAG, and full-stack development.</p><p>I enjoy connecting the dots between data and software—preparing datasets, building predictive models, and integrating intelligent capabilities into applications with tools like LangChain, FastAPI, React, and Scikit-learn.</p></div><div className="about-signature"><span className="signature-mark">S.</span><span><b>Kapadiya Shreyas M.</b><small>AI · Machine Learning · Software</small></span></div></div>
      </section>

      <section className="skills section-wrap section-space" id="skills">
        <SectionHeading eyebrow="MY TOOLKIT" title={<>Skills that turn<br /><span className="muted-heading">ideas into systems.</span></>} text="A practical toolkit across software development, data science, and retrieval-augmented AI." />
        <div className="skills-grid">{skillGroups.map((group, i) => { const Icon = group.icon; return <article className={`skill-card reveal skill-card-${i + 1}`} key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="card-index">0{i + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-card-bottom"><span>SKILL SET</span><ArrowUpRight size={14} /></div></article>; })}</div>
      </section>

      <section className="experience section-wrap section-space" id="experience">
        <SectionHeading eyebrow="WHERE I'VE WORKED" title={<>Learning by <span className="gradient-text">building.</span></>} text="Experience spanning data science and software engineering." />
        <div className="timeline">{experience.map((job, i) => <article className="timeline-item reveal" key={job.company}><div className="timeline-rail"><span className="timeline-dot" /><span className="timeline-line" /></div><div className="timeline-date">{job.date}</div><div className="timeline-main"><div className="timeline-heading"><div><h3>{job.role}</h3><p>{job.company} <span>·</span> {job.location}</p></div><span className="timeline-number">0{i + 1}</span></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul><div className="experience-tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="projects section-wrap section-space" id="projects">
        <div className="projects-heading"><SectionHeading eyebrow="SELECTED PROJECTS" title={<>Work in progress.<br /><span className="muted-heading">Ideas in practice.</span></>} text="Projects where software engineering meets data and intelligent systems." /><div className="projects-side-note"><Terminal size={17} /><span>REAL PROBLEMS<br />PRACTICAL BUILDS</span></div></div>
        <div className="project-list">{projects.map(project => { const Icon = project.icon; return <article className={`project-card ${project.className} reveal`} key={project.number}><div className="project-art"><div className="art-grid" /><div className="art-orb"><Icon size={48} strokeWidth={1.15} /></div><span className="art-number">{project.number}</span><span className="art-type">{project.type}</span><div className="art-corner"><ArrowUpRight size={17} /></div></div><div className="project-content"><div className="project-title-row"><div><span className="project-kicker">PROJECT {project.number}</span><h3>{project.title}</h3></div>{project.link && <a className="project-link-icon" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><ArrowUpRight size={19} /></a>}</div><p className="project-description">{project.description}</p><ul className="project-details">{project.details.map(detail => <li key={detail}><Check size={14} />{detail}</li>)}</ul><div className="project-footer"><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>{project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowRight size={14} /></a>}</div></div></article>; })}</div>
        <p className="project-note"><span className="note-star">✳</span> Project details are based on the work described in my resume. More implementation details and demos can be added as they become available.</p>
      </section>

      <section className="education section-wrap section-space" id="education">
        <SectionHeading eyebrow="EDUCATION" title={<>Building a strong<br /><span className="muted-heading">technical foundation.</span></>} />
        <div className="education-grid"><article className="education-card reveal"><div className="education-icon"><GraduationCap size={23} /></div><div className="education-level">POSTGRADUATE · IN PROGRESS</div><h3>Master of Science</h3><p className="education-subtitle">Data Science</p><div className="education-bottom"><span>Silver Oak University</span><span className="gpa">8.9 <small>GPA · SEM 2</small></span></div><div className="education-location"><MapPin size={13} /> Ahmedabad, India</div></article><article className="education-card reveal"><div className="education-icon"><GraduationCap size={23} /></div><div className="education-level">UNDERGRADUATE · COMPLETED</div><h3>Bachelor of Science</h3><p className="education-subtitle">Computer Science &amp; IT</p><div className="education-bottom"><span>Silver Oak University</span><span className="gpa">9.34 <small>GPA</small></span></div><div className="education-location"><MapPin size={13} /> Ahmedabad, India <span className="education-year">· Apr 2025</span></div></article></div>
      </section>

      <section className="contact section-wrap section-space" id="contact">
        <div className="contact-panel reveal"><div className="contact-glow" /><div className="contact-copy"><SectionLabel>LET'S CONNECT</SectionLabel><h2>Have a problem<br />worth <span className="gradient-text">solving?</span></h2><p>I'm interested in opportunities across AI engineering, machine learning, and Generative AI. Let's connect and talk about what we can build.</p><a className="button button-primary contact-cta" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} /></a></div><div className="contact-details"><div className="contact-detail-label">CONTACT DETAILS</div><button className="contact-row email-row" onClick={copyEmail}><span className="contact-detail-icon"><Mail size={17} /></span><span className="contact-row-text"><small>EMAIL</small><b>{profile.email}</b></span><span className="copy-state">{copied ? <Check size={16} /> : <ArrowUpRight size={16} />}</span></button><a className="contact-row" href={`tel:${profile.phone}`}><span className="contact-detail-icon"><Phone size={17} /></span><span className="contact-row-text"><small>PHONE</small><b>{profile.phone}</b></span><ArrowUpRight size={16} /></a><div className="contact-row"><span className="contact-detail-icon"><MapPin size={17} /></span><span className="contact-row-text"><small>LOCATION</small><b>{profile.location}</b></span></div><a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Linkedin size={17} /></span><span className="contact-row-text"><small>LINKEDIN</small><b>Connect professionally</b></span><ArrowUpRight size={16} /></a><a className="contact-row" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Github size={17} /></span><span className="contact-row-text"><small>GITHUB</small><b>Explore my repositories</b></span><ArrowUpRight size={16} /></a></div></div>
      </section>
    </main>

    <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SHREYAS<span>/</span>PORTFOLIO</span></a><p>Designed with curiosity. Built with intent.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Kapadiya Shreyas M.</span><span>AI · ML · SOFTWARE ENGINEERING</span></div></footer>
  </>;
}
