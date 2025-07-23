// src/components/Hero.jsx
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Winning Campaign META ADS</h1>
            <p><b>Workshop Eksklusif – Optimalkan Iklan Anda dengan Teknologi AI!</b></p>
            <p>Ingin Iklan Anda Lebih Efektif & Menghasilkan Profit?
            Gabung di workshop ini dan pelajari cara merancang kampanye Meta Ads yang terbukti sukses, dengan pendekatan berbasis teknologi AI terbaru.</p>
            <div className="hero-buttons">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://plus.unsplash.com/premium_photo-1720032305159-28f237187095?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Visual" />
          </div>
        </div>
      </div>
    </section>
  );
};