import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed-top" style={{
      background: 'rgba(10, 10, 26, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
      zIndex: 1030,
      boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
    }}>
      <div className="container d-flex align-items-center justify-content-between py-3">

        {/* Logo */}
        <a href="#home" className="fw-bold fs-4 text-decoration-none" style={{ color: '#a78bfa', letterSpacing: '0.5px', fontFamily: 'Outfit, sans-serif' }}>
          Bollam Praveen
        </a>

        {/* Desktop Menu */}
        <ul className="d-none d-md-flex m-0 p-0 list-unstyled gap-4 align-items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Resume', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link-minimal">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="d-md-none bg-transparent border-0"
          onClick={() => setOpen(!open)}
          style={{ cursor: 'pointer', color: '#a78bfa' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`position-absolute top-100 start-0 w-100 d-md-none ${open ? 'd-block' : 'd-none'}`}
        style={{ background: 'rgba(10, 10, 26, 0.97)', borderBottom: '1px solid rgba(124,58,237,0.2)', zIndex: 1029 }}
      >
        <ul className="m-0 p-3 list-unstyled text-center d-flex flex-column gap-2">
          {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Resume', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link-minimal d-block py-2" onClick={() => setOpen(false)}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;