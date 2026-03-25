import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    duration: "Aug' 2023 Present",
    score: "CGPA: 7.12",
    location: "Phagwara, Punjab",
    icon: <FaUniversity />,
    color: '#818cf8'
  },
  {
    institution: "Sasi Jr. College",
    degree: "Intermediate",
    duration: "Jul' 2022 - Mar' 2023",
    score: "Percentage: 84.7",
    location: "Nallajerlla, Andhra Pradesh",
    icon: <FaGraduationCap />,
    color: '#34d399'
  },
  {
    institution: "ZP High School",
    degree: "High School",
    duration: "Jul' 2020 - Mar' 2021",
    score: "Percentage: 88.2",
    location: "Devaraplaii, Andhra Pradesh",
    icon: <FaSchool />,
    color: '#fb923c'
  }
];

function EducationCard({ edu, delay }) {
    const { ref, isVisible } = useScrollReveal(0.15);
    return (
        <div ref={ref} className="col-lg-4 col-md-6 mb-4">
            <div
                className="clean-card h-100"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay * 0.15}s`,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Glow effect */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: edu.color,
                    filter: 'blur(50px)',
                    opacity: 0.2,
                    borderRadius: '50%'
                }}></div>

                <div className="d-flex flex-column h-100">
                    <div className="d-flex align-items-center mb-4">
                        <div className="icon-circle me-3" style={{ color: edu.color, borderColor: edu.color, flexShrink: 0 }}>
                            {edu.icon}
                        </div>
                        <h4 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, margin: 0, lineHeight: '1.3' }}>
                            {edu.institution}
                        </h4>
                    </div>

                    <p style={{ color: '#a78bfa', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', lineHeight: '1.4' }}>
                        {edu.degree}
                    </p>
                    
                    <div className="d-flex justify-content-between align-items-center mb-4" style={{ fontSize: '0.85rem' }}>
                        <span style={{ color: 'white', background: 'rgba(124, 58, 237, 0.2)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontWeight: 500 }}>
                            {edu.duration}
                        </span>
                        <span style={{ color: '#34d399', fontWeight: 700 }}>
                            {edu.score}
                        </span>
                    </div>

                    <div className="mt-auto pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {edu.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Education() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);

    return (
        <section id="education" className="py-5" style={{ position: 'relative' }}>
            {/* Background element */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'rgba(124, 58, 237, 0.05)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div
                    ref={titleRef}
                    className="text-center mb-5"
                    style={{
                        opacity: titleVisible ? 1 : 0,
                        transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease'
                    }}
                >
                    <h2 className="section-title">My <span className="accent">Education</span></h2>
                    <p className="section-subtitle">My academic journey and qualifications</p>
                </div>

                <div className="row g-4 justify-content-center">
                    {educationData.map((edu, index) => (
                        <EducationCard key={index} edu={edu} delay={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
