import { FaDownload, FaEye } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import resume from '../assest/FullStack.pdf';

function Resume() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.15);

  const revealStyle = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
  });

  return (
    <section id="resume" className="py-5">
      <div className="container">
        
        <div ref={titleRef} className="text-center mb-5" style={revealStyle(titleVisible)}>
          <h2 className="section-title">My <span className="accent">Resume</span></h2>
          <p className="section-subtitle">A summary of my education, skills, and experience</p>
        </div>

        <div className="row justify-content-center">
          <div ref={cardRef} className="col-lg-8" style={revealStyle(cardVisible, 0.1)}>
            <div className="clean-card text-center">
              
              <div className="mb-4">
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 0 25px rgba(124, 58, 237, 0.5)'
                }}>
                  <FaDownload style={{ color: 'white', fontSize: '1.8rem' }} />
                </div>
                <h3 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Bollam Praveen
                </h3>
                <p style={{ color: '#a78bfa', fontSize: '1rem' }}>Data Science Engineering Student</p>
              </div>

              <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.8' }}>
                View or download my complete resume which covers my technical skills, academic credentials, 
                projects, and certifications in detail.
              </p>

              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-purple d-flex align-items-center gap-2"
                >
                  <FaEye /> View Resume
                </a>
                <a
                  href={resume}
                  download
                  className="btn-primary-purple d-flex align-items-center gap-2"
                >
                  <FaDownload /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;