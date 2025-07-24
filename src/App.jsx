import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { AdvancedClass } from './components/AdvancedClass';
import { Cocok } from './components/Cocok';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <div id='advanced-class'>
        <AdvancedClass />
      </div>
      <Stats />
      <div id="features">
        <Features />
      </div>
      <Cocok />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;