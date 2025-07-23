import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Stats />
      <Features />
    </div>
  );
}

export default App;