import React, { useState } from 'react';

function Home({ page, setPage, loggedInUser, setLoggedInUser }) {
  // Registration form states [cite: 7, 8, 9, 10, 11]
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // Login form states [cite: 19, 20, 21]
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // Form Submission Logic for Registration [cite: 12]
  const handleRegister = (e) => {
    e.preventDefault();
    // Validate all fields are filled [cite: 13, 34]
    if (!username || !email || !password || !phone) {
      alert('All fields are required'); // [cite: 17, 36]
      return;
    }
    // Store credentials in localStorage [cite: 14, 33]
    localStorage.setItem('savedUsername', username);
    localStorage.setItem('savedPassword', password);
    alert('Registration Successful'); // [cite: 16, 36]
    
    // Reset inputs and route to login page [cite: 35]
    setUsername(''); setEmail(''); setPassword(''); setPhone('');
    setPage('login');
  };

  // Form Submission Logic for Login [cite: 22]
  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve data from localStorage [cite: 23, 33]
    const storedUser = localStorage.getItem('savedUsername');
    const storedPass = localStorage.getItem('savedPassword');

    // Verification check [cite: 24]
    if (loginUser === storedUser && loginPass === storedPass) {
      setLoggedInUser(loginUser);
      setPage('home'); // Redirect to Home Page layout [cite: 24, 35]
    } else {
      alert('Invalid Username or Password'); // [cite: 25, 36]
    }
  };

  // 1. REGISTRATION COMPONENT VIEW [cite: 6]
  if (page === 'register') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Create an Account</h2>
          <form onSubmit={handleRegister} style={styles.form}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
            <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={styles.input} />
            <button type="submit" style={styles.submitBtn}>Register</button>
          </form>
        </div>
      </div>
    );
  }

  // 2. LOGIN COMPONENT VIEW [cite: 18]
  if (page === 'login') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <input type="text" placeholder="Username" value={loginUser} onChange={(e) => setLoginUser(e.target.value)} style={styles.input} />
            <input type="password" placeholder="Password" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} style={styles.input} />
            <button type="submit" style={styles.submitBtn}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  // 3. MAIN DASHBOARD VIEW [cite: 26]
  if (page === 'home' && loggedInUser) {
    return (
      <div style={styles.container}>
        <div style={styles.welcomeCard}>
          <h1 style={styles.welcomeTitle}>Welcome, {loggedInUser}! 🎉</h1> {/* [cite: 27] */}
          <p style={styles.welcomeSub}>You have successfully logged in using LocalStorage.</p>
        </div>
      </div>
    );
  }

  // Security Protection: Restrict raw direct access to the Home page [cite: 38, 39]
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={{color: '#ef4444', textAlign: 'center'}}>Please log in or register to view the dashboard.</p>
        <button onClick={() => setPage('login')} style={styles.submitBtn}>Go to Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', backgroundColor: '#f8fafc' },
  card: { backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' },
  welcomeCard: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center', width: '100%', maxWidth: '500px' },
  title: { textAlign: 'center', marginBottom: '24px', color: '#0f172a' },
  welcomeTitle: { color: '#1e3a8a', marginBottom: '10px' },
  welcomeSub: { color: '#64748b' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' },
  submitBtn: { backgroundColor: '#2563eb', color: 'white', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};

export default Home;