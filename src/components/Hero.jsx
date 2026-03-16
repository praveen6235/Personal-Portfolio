import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { useScrollReveal } from '../hooks/useScrollReveal';
import Image from '../assest/praveen.png';
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal(0.1);

  const revealSlideStyle = (visible, dir = 'left', delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0,0)' : dir === 'left' ? 'translateX(-60px)' : 'translateX(60px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
  });

  return (
    <section id="home" className="d-flex align-items-center position-relative overflow-hidden" style={{
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '80px',
      background: 'radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)'
    }}>
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Content */}
          <div ref={leftRef} className="col-lg-6 text-center text-lg-start order-2 order-lg-1" style={revealSlideStyle(leftVisible, 'left')}>
             <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>
              Hi, I'm <span className="accent">Bollam Praveen</span>
            </h1>
            <h3 style={{ fontSize: '2rem', color: '#1e79efff', fontWeight: 500, marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
              <TypeAnimation sequence = {["Data Analyst", 2000,
            "Data Engineer", 2000,
            "MERN Developer", 2000
            ]} speed = {50} repeat = {Infinity} ></TypeAnimation>
            </h3>
            <p style={{ maxWidth: '600px', margin: '0 0 2rem', color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
              I enjoy learning new technologies, solving problems, and building useful projects. I’m passionate about data analysis, web development, and turning ideas into practical digital solutions.
            </p>

            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-5">
              <a href="https://github.com/praveen6235" target="_blank" rel="noopener noreferrer" className="icon-circle" style={{ width: '50px', height: '50px', fontSize: '1.4rem' }}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/bollam-praveen/" target="_blank" rel="noopener noreferrer" className="icon-circle" style={{ width: '50px', height: '50px', fontSize: '1.4rem' }}>
                <FaLinkedin />
              </a>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-3">
              <a href="#projects" className="btn-primary-purple px-4 py-2">
                Explore Projects
              </a>
              <a href="#contact" className="btn-outline-purple px-4 py-2 d-flex align-items-center gap-2">
                 Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div ref={rightRef} className="col-lg-5 d-flex justify-content-center justify-content-lg-end order-1 order-lg-2 mb-5 mb-lg-0" style={revealSlideStyle(rightVisible, 'right', 0.2)}>
            <div className="position-relative" style={{ width: '350px', height: '350px' }}>
              <img
                src={Image}
                alt="Bollam Praveen"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #a78bfa',
                  boxShadow: '0 0 50px rgba(124, 58, 237, 0.8), inset 0 0 30px rgba(124, 58, 237, 0.4)',
                  animation: 'floating 6s ease-in-out infinite',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'icon-circle';
                  placeholder.style.cssText = 'width:350px; height:350px; font-size:6rem; border-width:4px; margin:0 auto;';
                  placeholder.innerText = 'BP';
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;