import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2026 SecureAuth System Assignment. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: { backgroundColor: '#1e293b', color: '#94a3b8', textAlign: 'center', padding: '15px 20px', fontSize: '14px', marginTop: 'auto' }
};

export default Footer;