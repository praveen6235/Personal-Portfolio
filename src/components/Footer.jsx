function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(124, 58, 237, 0.2)',
      padding: '2rem 0',
      textAlign: 'center',
      background: 'rgba(10, 10, 26, 0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
          © 2026 <span style={{ color: '#a78bfa', fontWeight: 600 }}>Bollam Praveen</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;