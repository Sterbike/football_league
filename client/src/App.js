

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useAdmin } from './context/AdminContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';




function App() {
  // Admin állapot lekérése
  const { isAdmin } = useAdmin();
  return (
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            {/* Admin-only route */}
            <Route path="/dashboard" element={isAdmin ? <Dashboard /> : <NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
