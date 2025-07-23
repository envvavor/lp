// src/components/Hero.jsx
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Winning Campaign META ADS</h1>
            <p><b>Workshop Eksklusif – Optimalkan Iklan Anda dengan Teknologi AI!</b></p>
            <p className="deskripsi">Ingin Iklan Anda Lebih Efektif & Menghasilkan Profit?
            Gabung di workshop ini dan pelajari cara merancang kampanye Meta Ads yang terbukti sukses, dengan pendekatan berbasis teknologi AI terbaru.</p>
            <div className="hero-buttons">
              <a href="https://api.whatsapp.com/send/?phone=6281353025302&text=Hai+kak+Asfi+saya+mau+konsultasi+ingin+Privat+mentoring+facebook+ads.+bisa+dibantu%3F&type=phone_number&app_absent=0">
                <button className="primary-btn">Daftar Sekarang</button>
              </a>
              <button className="secondary-btn">Manfaat Program</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/hero-image.png" alt="Hero Visual" />
          </div>
        </div>
      </div>
    </section>
  );
};