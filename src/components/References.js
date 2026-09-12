import React from 'react';
import './References.css';

const referencesData = [
  {
    name: 'Mr. Liteboho Molaoa',
    title: 'Lecturer, Web Design II',
    institution: 'Limkokwing University of Creative Technology',
    email: 'liteboho.molaoa@limkokwing.ac.ls',
    phone: '+266',
  },
  {
    name: 'Dr. Mpho Letsie',
    title: 'Lecturer, Software Engineering',
    institution: 'Limkokwing University of Creative Technology',
    email: 'mpho.letsie@limkokwing.ac.ls',
    phone: '+266',
  },
];

const ReferenceCard = ({ name, title, institution, email, phone }) => (
  <div className="reference-card">
    <h3 className="reference-name">{name}</h3>
    <p className="reference-title">{title}</p>
    <p className="reference-institution">{institution}</p>
    <div className="reference-contact">
      {email && (
        <a href={`mailto:${email}`} className="reference-email">{email}</a>
      )}
      {phone && <span className="reference-phone">{phone}</span>}
    </div>
  </div>
);

const References = () => {
  return (
    <section className="references cv-section" aria-label="References">
      <h2 className="section-title">References</h2>
      <div className="references-grid">
        {referencesData.map((ref, index) => (
          <ReferenceCard
            key={index}
            name={ref.name}
            title={ref.title}
            institution={ref.institution}
            email={ref.email}
            phone={ref.phone}
          />
        ))}
      </div>
    </section>
  );
};

export default References;