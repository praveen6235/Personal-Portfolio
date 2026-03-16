import { FaCalendarCheck, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollReveal } from '../hooks/useScrollReveal';

function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal(0.15);
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal(0.15);

  const revealStyle = (visible, delay = 0, dir = 'up') => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0,0)' : dir === 'left' ? 'translateX(-50px)' : dir === 'right' ? 'translateX(50px)' : 'translateY(40px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
  });

  return (
    <section id="about" className="py-5" style={{ paddingTop: '80px' }}>
      <div className="container">

        <div ref={titleRef} className="text-center mb-5" style={revealStyle(titleVisible)}>
          <h2 className="section-title">About <span className="accent">Me</span></h2>
        </div>

        <div className="row g-4 align-items-start">

          {/* Left: My Journey */}
          <div ref={leftRef} className="col-lg-7" style={revealStyle(leftVisible, 0.1, 'left')}>
            <h3 style={{ color: '#a78bfa', fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '1.2rem', fontSize: '1.5rem' }}>My Journey</h3>
            <p style={{ color: '#e2e8f0', lineHeight: '1.9', marginBottom: '1.2rem', fontSize: '1.05rem' }}>
              I am a Data Science Engineering student at Lovely Professional University with a strong interest in technology, software development, and data-driven problem solving. I enjoy exploring new tools and technologies that help build meaningful digital solutions for real-world challenges.
            </p>
            <p style={{ color: '#f1f3f7ff', lineHeight: '1.9', fontSize: '1rem' }}>
              I have hands-on experience with Python, Excel, Power BI, and modern web technologies such as React and JavaScript. I enjoy developing projects that combine data analysis, visualization, and user-friendly design to create practical and impactful applications.
            </p>
            <p style={{ color: '#f1f3f7ff', lineHeight: '1.9', fontSize: '1rem' }}>
              I am passionate about continuous learning, building innovative projects, and improving my technical skills while contributing to solutions that make technology more useful and accessible.
            </p>
          </div>

          {/* Right: Education & Details Card */}
          <div ref={rightRef} className="col-lg-5" style={revealStyle(rightVisible, 0.2, 'right')}>
            <div className="clean-card">
              <h4 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '1.5rem' }}>
                Education & Details
              </h4>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="icon-circle flex-shrink-0"><FaGraduationCap /></div>
                <div>
                  <div style={{ color: 'white', fontWeight: 600 }}>Data Science Engineering</div>
                  <div style={{ color: '#a78bfa', fontSize: '0.9rem' }}>Lovely Professional University</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Currently pursuing bachelor's degree</div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="icon-circle flex-shrink-0"><FaMapMarkerAlt /></div>
                <div>
                  <div style={{ color: 'white', fontWeight: 600 }}>Location</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Jalandhar, Punjab, India</div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="icon-circle flex-shrink-0"><FaCalendarCheck /></div>
                <div>
                  <div style={{ color: 'white', fontWeight: 600 }}>Availability</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Open for internships and projects</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
