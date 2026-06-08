import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('register'); // Initial landing screen [cite: 6]
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Global log out management [cite: 29]
  const handleLogout = () => {
    setLoggedInUser(null);
    setPage('login'); // Send to Login Page [cite: 30, 35]
    alert('Logged out successfully'); // [cite: 31, 36]
  };

  return (
    <div style={styles.appContainer}>
      {/* NavBar renders to App.jsx */}
      <NavBar 
        page={page} 
        setPage={setPage} 
        loggedInUser={loggedInUser} 
        handleLogout={handleLogout} 
      />
      
      {/* Main content hub rendering Home.jsx */}
      <main style={styles.mainContent}>
        <Home 
          page={page} 
          setPage={setPage} 
          loggedInUser={loggedInUser} 
          setLoggedInUser={setLoggedInUser} 
        />
      </main>

      {/* Footer renders to App.jsx */}
      <Footer />
    </div>
  );
}

const styles = {
  appContainer: { display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f8fafc' },
  mainContent: { display: 'flex', flexDirection: 'column', flex: 1 }
};

export default App;