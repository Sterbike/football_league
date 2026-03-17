

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useUser } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Matches from './pages/Matches';
import Tabella from './pages/Tabella';
import Team from './pages/Team';




function App() {
  // Admin állapot lekérése
  const { user } = useUser();
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col mt-[64px]" style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/merkozesek" element={<Matches />} />
            <Route path="/tabella" element={<Tabella />} />
            <Route path="/team/:teamId" element={<Team />} />
            <Route path="*" element={<NotFound />} />
            {/* Admin-only route */}
            <Route path="/dashboard" element={user.isAdmin ? <Dashboard /> : <NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
