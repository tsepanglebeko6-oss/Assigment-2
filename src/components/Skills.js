import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MySQL'],
  },
  {
    title: 'Multimedia',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Video Editing'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'],
  },
];

const SkillCard = ({ title, skills }) => (
  <div className="skill-card" role="listitem">
    <h3 className="skill-card-title">{title}</h3>
    <ul className="skill-card-list" role="list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-card-item">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section className="skills cv-section" aria-label="Skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid" role="list">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;