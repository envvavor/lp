import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { AdvancedClass } from './components/AdvancedClass';
import { Cocok } from './components/Cocok';
import { Gallery } from './components/Gallery';

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
      <div id='cocok'>
        <Cocok />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;