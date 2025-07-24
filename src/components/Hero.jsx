// src/components/Hero.jsx
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Masih Pakai Cara Lama? Siap-Siap Iklan Boncos!</h1>
            <p><b>Saatnya upgrade skill ke LEVEL LANJUTAN sebelum terlambat</b></p>
            <p className="deskripsi">Sudah pernah belajar Facebook Ads tapi hasilnya belum maksimal? Saatnya naik level!
            Di pelatihan ini, kamu akan pelajari strategi lanjutan yang dipakai praktisi dan agensi untuk hasilkan ROAS tinggi—mulai dari struktur campaign, teknik targeting, hingga optimasi terkini.
            Siap ubah iklanmu jadi mesin profit?</p>
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