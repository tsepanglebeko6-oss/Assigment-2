import React from 'react';
import './Projects.css';

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
      {features.map((feature, i) => (
        <li key={i} className="project-feature">{feature}</li>
      ))}
    </ul>
  </article>
);

const Projects = () => {
  return (
    <section className="projects cv-section" aria-label="Projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            features={project.features}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;