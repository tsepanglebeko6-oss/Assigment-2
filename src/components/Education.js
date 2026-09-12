import React from 'react';
import './Education.css';

const educationData = [
  {
    qualification: 'Diploma in Software Engineering and Multimedia',
    institution: 'Limkokwing University of Creative Technology',
    location: 'Maseru, Lesotho',
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

const Education = () => {
  return (
    <section className="education cv-section" aria-label="Education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="education-qualification">{edu.qualification}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <p className="education-institution">
              {edu.institution}{edu.location ? `, ${edu.location}` : ''}
            </p>
            {edu.details.length > 0 && (
              <ul className="education-details">
                {edu.details.map((detail, i) => (
                  <li key={i} className="education-detail">{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;