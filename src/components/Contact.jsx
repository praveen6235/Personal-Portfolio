import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaUser, FaTag, FaPhoneAlt } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal(0.15);
  const { ref: formRef, isVisible: formVisible } = useScrollReveal(0.15);

  const revealStyle = (visible, delay = 0, dir = 'up') => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0,0)' : dir === 'left' ? 'translateX(-50px)' : dir === 'right' ? 'translateX(50px)' : 'translateY(40px)',
    transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  });

  return (
    <section id="contact" className="py-5 position-relative overflow-hidden">
      {/* Background Glow */}
      <div className="position-absolute top-50 start-50 translate-middle" style={{
        width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div ref={titleRef} className="text-center mb-5" style={revealStyle(titleVisible)}>
          <h2 className="section-title">Let's <span className="accent">Connect</span></h2>
          <p className="section-subtitle">Interested in working together or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="row g-5 align-items-center justify-content-center">
          {/* Left - Contact info */}
          <div ref={infoRef} className="col-lg-5" style={revealStyle(infoVisible, 0.1, 'left')}>
            <div className="premium-contact-card d-flex flex-column align-items-start" style={{ padding: '2.5rem' }}>
              <div className="w-100">
                <h3 style={{ color: 'white', fontFamily: 'Orbitron, sans-serif', fontWeight: 800, fontSize: '1.4rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
                  Contact Info
                </h3>
                
                <div className="d-flex flex-column gap-4 w-100">
                  {/* Email */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-circle flex-shrink-0" style={{ width: '46px', height: '46px', fontSize: '1.2rem' }}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <div style={{ color: '#a78bfa', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</div>
                      <a href="mailto:bollampraveenkumar@gmail.com" style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 500 }}>praveenbollam9550@gmail.com</a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-circle flex-shrink-0" style={{ width: '46px', height: '46px', fontSize: '1.2rem' }}>
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <div style={{ color: '#a78bfa', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone</div>
                      <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 500 }}>+91-9391452521</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-circle flex-shrink-0" style={{ width: '46px', height: '46px', fontSize: '1.2rem' }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <div style={{ color: '#a78bfa', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</div>
                      <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 500 }}>Jalandhar, Punjab, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 w-100">
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '1rem', fontWeight: 600, letterSpacing: '1px' }}>FIND ME ON</p>
                <div className="d-flex gap-3">
                  <a href="https://github.com/praveen6235" target="_blank" rel="noopener noreferrer" className="icon-circle" style={{ width: '44px', height: '44px' }}>
                    <FaGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/bollam-praveen/" target="_blank" rel="noopener noreferrer" className="icon-circle" style={{ width: '44px', height: '44px' }}>
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div ref={formRef} className="col-lg-7" style={revealStyle(formVisible, 0.2, 'right')}>
            <div className="premium-contact-card">
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="d-flex align-items-center gap-2" style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <FaUser size={12} color="#a78bfa" /> Full Name
                    </label>
                    <input type="text" className="premium-input" placeholder="Bollam Praveen" />
                  </div>
                  <div className="col-md-6">
                    <label className="d-flex align-items-center gap-2" style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <FaEnvelope size={12} color="#a78bfa" /> Email Address
                    </label>
                    <input type="email" className="premium-input" placeholder="praveen@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="d-flex align-items-center gap-2" style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <FaTag size={12} color="#a78bfa" /> Subject
                    </label>
                    <input type="text" className="premium-input" placeholder="Project Inquiry" />
                  </div>
                  <div className="col-12">
                    <label className="d-flex align-items-center gap-2" style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <FaPaperPlane size={12} color="#a78bfa" /> Your Message
                    </label>
                    <textarea rows="5" className="premium-input" placeholder="Tell me more about your project..."></textarea>
                  </div>
                  <div className="col-12 pt-2">
                    <button type="submit" className="btn-primary-purple w-100 py-3 d-flex align-items-center justify-content-center gap-3" style={{ fontSize: '1.1rem' }}>
                      Send Message <FaPaperPlane />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;