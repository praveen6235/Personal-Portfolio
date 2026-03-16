import { FaMedal } from "react-icons/fa";
import { useScrollReveal } from '../hooks/useScrollReveal';
import DSA from '../assest/DSA_certificate.pdf'
import Java from '../assest/java_certificate.pdf'
import Social from '../assest/Social Networks.pdf'
import Generative from '../assest/BuildAI_Infosys.pdf'
import ChatGPT from '../assest/AI & LLM_Infosys.pdf'
import Hackathon from '../assest/Hack.pdf'

function Certificates() {
  const certificates = [
    {
      title: "DSA (Data Structure & Algo)",
      issuer: "Neo colab",
      year: "2024",
      description: "Comprehensive course covering DSA fundamentals, algorithm design, and problem-solving techniques.",
      skills: ["Arrays", "Trees", "Sorting", "Dynamic Programming"],
      link: DSA
    },
    {
      title: "Java",
      issuer: "Neo Colab",
      year: "2025",
      description: "Comprehensive course covering Java fundamentals, data structures concepts and object-oriented programming.",
      skills: ["OOP", "Collections", "Multithreading"],
      link : Java
    },
    {
      title: "Social Networks",
      issuer: "NPTEL",
      year: "2025",
      description: "An intensive 12-week course from IIT Madras that explored the structure, analysis, and dynamics of social networks.",
      skills: ["Network Analysis", "Graph Theory", "Community Detection"],
      link : Social
    },
    {
      title: "Build Generative AI Apps with No-Code Tools",
      issuer: "Infosys",
      year: "2025",
      description: "Hands-on course using no-code platforms to build Generative AI applications and solutions.",
      skills: ["Generative AI", "No-Code", "Prompt Engineering"],
      link : Generative
    },
    {
      title: "ChatGPT, Generative AI & LLM",
      issuer: "Infosys",
      year: "2025",
      description: "Deep dive into ChatGPT, Large Language Models, and practical applications of Generative AI.",
      skills: ["LLMs", "ChatGPT", "Fine-tuning", "NLP"],
      link : ChatGPT
    },
    {
      title: "Code Off Duty Web Hackathon",
      issuer: "Coding Wise",
      year: "2024",
      description: "Participated in the Code Off Duty Web Hackathon where innovative solutions were developed through collaboration, creativity, and strong problem-solving skills.",
      skills: ["Web Development", "Problem Solving", "Team Collaboration", "Innovation"],
      link: Hackathon
    }
  ];

  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: rowRef, isVisible: rowVisible } = useScrollReveal(0.05);

  const revealUp = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
  });

  return (
    <section id="certificates" className="py-5">
      <div className="container">

        <div ref={titleRef} className="text-center mb-5" style={revealUp(titleVisible)}>
          <h2 className="section-title">Certifications <span className="accent">&amp; Learning</span></h2>
          <p className="section-subtitle">Continuous learning and professional development for improving my skills and knowledge.</p>
        </div>

        <div ref={rowRef} className="scroll-row" style={revealUp(rowVisible, 0.1)}>
          {certificates.map((cert, index) => (
            <div key={index} className="scroll-card">
              
              <div className="d-flex align-items-start justify-content-between mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-circle flex-shrink-0">
                    <FaMedal />
                  </div>
                  <div>
                    <h5 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                      {cert.title}
                    </h5>
                    <div style={{ color: '#a78bfa', fontSize: '0.85rem' }}>{cert.issuer}</div>
                  </div>
                </div>
                <span className="badge-completed flex-shrink-0 ms-2">Completed</span>
              </div>

              <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                📅 {cert.year}
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {cert.description}
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {cert.skills.map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <a href={cert.link} className="btn-outline-purple py-2 px-3 w-100 text-center" style={{ fontSize: '0.85rem' }}>
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;