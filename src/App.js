import React, { useState, useEffect } from 'react';

const educationData = [
  {
    qualification: 'Diploma in Software Engineering and Multimedia',
    institution: 'Limkokwing University of Creative Technology, Maseru, Lesotho',
    period: '2024 — 2026',
    details: [
      'Year 3, Semester 1 — Web Design II, Software Engineering Principles',
      'Relevant coursework: Java Programming, Python, Web Development, Database Systems, Multimedia Design',
    ],
  },
  {
    qualification: 'LGCSE',
    institution: 'Secondary School, Lesotho',
    period: '2018 — 2023',
    details: [],
  },
];

const skillCategories = [
  { title: 'Programming', skills: ['Java', 'Python', 'JavaScript'] },
  { title: 'Web Development', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Databases', skills: ['SQL', 'MySQL'] },
  { title: 'Multimedia', skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Video Editing'] },
  { title: 'Tools & Workflow', skills: ['Git', 'GitHub', 'VS Code', 'Figma'] },
  { title: 'Soft Skills', skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'] },
];

const experienceData = [
  {
    position: 'Freelance Web Developer',
    organisation: 'Self-Employed, Maseru, Lesotho',
    period: '2023 — Present',
    responsibilities: [
      'Designed and developed responsive websites for local small businesses',
      'Implemented front-end interfaces using HTML, CSS, and JavaScript',
      'Managed client communication, project requirements, and delivery timelines',
    ],
  },
];

const projectsData = [
  {
    name: 'Online Examination System',
    description: 'A web-based examination platform that allows students to take assessments online with automated grading and result generation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Student registration and login system',
      'Timed multiple-choice examinations',
      'Automated score calculation and grading',
      'Admin dashboard for managing exams and questions',
    ],
  },
  {
    name: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio built with React.js showcasing projects, skills, and professional information with dark mode support and print functionality.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Responsive design across desktop, tablet, and mobile',
      'Dark/Light mode toggle with localStorage persistence',
      'Smooth section navigation with active detection',
      'Print-optimized CV layout using CSS @media print',
    ],
  },
  {
    name: 'Student Management System',
    description: 'A desktop application for managing student records, enrollment, grades, and attendance data with a graphical user interface.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    features: [
      'CRUD operations for student records',
      'Search and filter functionality',
      'Attendance tracking with date records',
      'Report generation for student performance',
    ],
  },
];

const referencesData = [
  {
    name: 'Mr. Liteboho Molaoa',
    title: 'Lecturer, Web Design II',
    institution: 'Limkokwing University of Creative Technology',
    email: 'liteboho.molaoa@limkokwing.ac.ls',
  },
  {
    name: 'Dr. Mpho Letsie',
    title: 'Lecturer, Software Engineering',
    institution: 'Limkokwing University of Creative Technology',
    email: 'mpho.letsie@limkokwing.ac.ls',
  },
];

/* ==============================
   SMALL REUSABLE COMPONENTS
   ============================== */

const SkillCard = ({ title, skills }) => (
  <div className="skill-card">
    <h3 className="skill-card-title">{title}</h3>
    <ul className="skill-card-list">
      {skills.map((skill, i) => (
        <li key={i} className="skill-card-item">{skill}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ name, description, technologies, features }) => (
  <article className="project-card">
    <h3 className="project-name">{name}</h3>
    <p className="project-description">{description}</p>
    <div className="project-tech">
      {technologies.map((tech, i) => (
        <span key={i} className="project-tech-tag">{tech}</span>
      ))}
    </div>
    <ul className="project-features">
      {features.map((f, i) => (
        <li key={i} className="project-feature">{f}</li>
      ))}
    </ul>
  </article>
);

/* ==============================
   MAIN APP COMPONENT
   ============================== */

function App() {
  /* --- useState hooks --- */
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('cv-dark-mode') === 'true');
  const [showSkills, setShowSkills] = useState(true);
  const [showReferences, setShowReferences] = useState(true);

  /* --- useEffect: apply dark mode + persist --- */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('cv-dark-mode', darkMode.toString());
  }, [darkMode]);

  /* --- useEffect: update document title --- */
  useEffect(() => {
    document.title = darkMode ? 'Tsepang Lebeko | CV (Dark Mode)' : 'Tsepang Lebeko | CV';
  }, [darkMode]);

  /* --- Interactive feature: Print CV --- */
  const handlePrint = () => window.print();

  /* --- Interactive feature: Dark mode toggle --- */
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  /* --- Interactive feature: Show/Hide Skills --- */
  const toggleSkills = () => setShowSkills((prev) => !prev);

  /* --- Interactive feature: Show/Hide References --- */
  const toggleReferences = () => setShowReferences((prev) => !prev);

  return (
    <div className="app">
      <main className="cv-container">

        {/* ===== HEADER ===== */}
        <header className="cv-header">
          <h1 className="header-name">Tsepang Lebeko</h1>
          <p className="header-title">Software Engineering & Multimedia Student</p>
          <div className="header-contact">
            <span className="contact-item">✉ <a href="mailto:tsepang.lebeko@student.limkokwing.ac.ls">tsepang.lebeko@student.limkokwing.ac.ls</a></span>
            <span className="contact-item">☎ <a href="tel:+26656272706">+266 5627 2706</a></span>
            <span className="contact-item">⌖ Maseru, Lesotho</span>
            <span className="contact-item">⎇ <a href="https://linkedin.com/in/tsepang-lebeko" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            <span className="contact-item">⟁ <a href="https://github.com/tsepang-lebeko" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          </div>
        </header>

        {/* ===== PROFILE ===== */}
        <section className="cv-section" id="profile" aria-label="Profile">
          <h2 className="section-title">Profile</h2>
          <p className="profile-text">
            Software Engineering and Multimedia student at Limkokwing University of Creative Technology
            with a strong foundation in programming, web development, and database management.
            Skilled in building responsive web applications and developing interactive multimedia solutions.
            Seeking an internship opportunity to apply technical knowledge in a professional environment,
            contribute to meaningful projects, and grow as a software developer.
          </p>
        </section>

        {/* ===== EDUCATION ===== */}
        <section className="cv-section" id="education" aria-label="Education">
          <h2 className="section-title">Education</h2>
          {educationData.map((edu, i) => (
            <div key={i} className="education-item">
              <div className="education-header">
                <h3 className="education-qualification">{edu.qualification}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <p className="education-institution">{edu.institution}</p>
              {edu.details.length > 0 && (
                <ul className="education-details">
                  {edu.details.map((d, j) => <li key={j} className="detail-line">{d}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* ===== SKILLS ===== */}
        <section className="cv-section" id="skills" aria-label="Skills">
          <h2 className="section-title">Skills</h2>
          {showSkills ? (
            <div className="skills-grid">
              {skillCategories.map((cat, i) => (
                <SkillCard key={i} title={cat.title} skills={cat.skills} />
              ))}
            </div>
          ) : (
            <p className="hidden-msg">Skills section hidden.</p>
          )}
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section className="cv-section" id="experience" aria-label="Experience">
          <h2 className="section-title">Experience</h2>
          {experienceData.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-organisation">{exp.organisation}</p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((r, j) => <li key={j} className="detail-line">{r}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* ===== PROJECTS ===== */}
        <section className="cv-section" id="projects" aria-label="Projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projectsData.map((proj, i) => (
              <ProjectCard
                key={i}
                name={proj.name}
                description={proj.description}
                technologies={proj.technologies}
                features={proj.features}
              />
            ))}
          </div>
        </section>

        {/* ===== REFERENCES ===== */}
        <section className="cv-section" id="references" aria-label="References">
          <h2 className="section-title">References</h2>
          {showReferences ? (
            <div className="references-grid">
              {referencesData.map((ref, i) => (
                <div key={i} className="reference-card">
                  <h3 className="reference-name">{ref.name}</h3>
                  <p className="reference-role">{ref.title}</p>
                  <p className="reference-institution">{ref.institution}</p>
                  <a href={`mailto:${ref.email}`} className="reference-email">{ref.email}</a>
                </div>
              ))}
            </div>
          ) : (
            <p className="hidden-msg">References section hidden.</p>
          )}
        </section>

      </main>

      {/* ===== BUILT-IN FOOTER (HTML <footer>) ===== */}
      <footer className="cv-footer">
        <div className="footer-inner">
          <div className="footer-nav">
            <button onClick={() => document.getElementById('profile').scrollIntoView({ behavior: 'smooth' })}>Profile</button>
            <button onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>Education</button>
            <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
            <button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</button>
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
            <button onClick={() => document.getElementById('references').scrollIntoView({ behavior: 'smooth' })}>References</button>
          </div>
          <div className="footer-actions">
            <button onClick={toggleSkills}>{showSkills ? 'Hide Skills' : 'Show Skills'}</button>
            <button onClick={toggleReferences}>{showReferences ? 'Hide Refs' : 'Show Refs'}</button>
            <button onClick={toggleDarkMode}>{darkMode ? '☀ Light' : '☾ Dark'}</button>
            <button onClick={handlePrint} className="print-btn">Print CV</button>
          </div>
          <div className="footer-info">
            <span>Tsepang Lebeko</span>
            <span>·</span>
            <span>+266 5627 2706</span>
            <span>·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;