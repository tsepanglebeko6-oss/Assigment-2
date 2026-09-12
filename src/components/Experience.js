import React from 'react';
import './Experience.css';

const experienceData = [
  {
    position: 'Freelance Web Developer',
    organisation: 'Self-Employed',
    location: 'Maseru, Lesotho',
    period: '2023 — Present',
    responsibilities: [
      'Designed and developed responsive websites for local small businesses',
      'Implemented front-end interfaces using HTML, CSS, and JavaScript',
      'Managed client communication, project requirements, and delivery timelines',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience cv-section" aria-label="Work Experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-position">{exp.position}</h3>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-organisation">
              {exp.organisation}{exp.location ? `, ${exp.location}` : ''}
            </p>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="experience-resp">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;