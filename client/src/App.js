
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';


function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Foci Bajnokság Információs Oldal</h1>
      <p className="text-base md:text-lg lg:text-xl">Üdvözlünk a bajnokság főoldalán!</p>
    </main>
  );
}


function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
