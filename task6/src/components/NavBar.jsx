import React from 'react';

function NavBar({ page, setPage, loggedInUser, handleLogout }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SecureAuth</h2>
      <div style={styles.navLinks}>
        {loggedInUser ? (
          <>
            {/* Display logged in username [cite: 27] */}
            <span style={styles.welcomeText}>Welcome, {loggedInUser}</span>
            {/* Logout Button [cite: 28] */}
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <>
            <button 
              onClick={() => setPage('login')} 
              style={{...styles.navBtn, fontWeight: page === 'login' ? 'bold' : 'normal'}}
            >
              Login
            </button>
            <button 
              onClick={() => setPage('register')} 
              style={{...styles.navBtn, fontWeight: page === 'register' ? 'bold' : 'normal'}}
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e293b', padding: '15px 30px', color: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  logo: { margin: 0, fontSize: '24px', color: '#38bdf8' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '15px' },
  welcomeText: { marginRight: '10px', color: '#cbd5e1' },
  navBtn: { background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '16px' },
  logoutBtn: { backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default NavBar;