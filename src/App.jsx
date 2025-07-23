import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </div>
  );
}

export default App;