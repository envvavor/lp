import { useState } from "react";
import "../App.css";
import { FaBox, FaFire, FaStar } from "react-icons/fa";

export const PromoEarlyBird = () => {
  const [quantity, setQuantity] = useState(1);

  const priceData = [
    { qty: 1, price: "Rp 1,5 Juta" },
    { qty: 2, price: "@Rp 1,45 jt" },
    { qty: 3, price: "@Rp 1,4 jt" }
  ];

  const handleQuantityChange = (qty) => {
    setQuantity(qty);
  };

  return (
    <section className="promo-section">
        <div className="promo-container">
        <div className="price-comparison">
            <span className="original-price">Rp 2.000.000 ?</span>
            <br />
            <span className="not-badge">BUKAN</span>
        </div>
        
        <div className="promo-badge">
            PROMO EARLY BIRD (LAUNCHING)
        </div>
        
        <div className="tier-pricing">
            {priceData.map((item, index) => (
            <div 
                key={index}
                className={`price-tier ${quantity === item.qty ? 'active' : ''}`}
                onClick={() => handleQuantityChange(item.qty)}
            >
                <div className="quantity">{item.qty} Tiket:</div>
                <div className="price">{item.price}</div>
            </div>
            ))}
        </div>
        
            <button className="cta-button">
                <a href="https://api.whatsapp.com/send/?phone=6281353025302&text=Hai+kak+Asfi+saya+mau+konsultasi+ingin+Privat+mentoring+facebook+ads.+bisa+dibantu%3F&type=phone_number&app_absent=0">
                    GABUNG SEKARANG
                </a>
            </button>
        </div>
        <div className="bonus-section">
            <h3 className="bonus-title">Bonus yang akan Kamu Dapatkan:</h3>
            <ul className="bonus-list">
                <li><FaBox /> Konsultasi Pribadi dengan Mentor senilai <strong>Rp700.000</strong></li>
                <li><FaBox /> Formula Landingpage with AI senilai <strong>Rp300.000</strong></li>
            </ul>

            <div className="bonus-divider">TAMBAHAN BONUS LAGI!</div>

            <div className="bonus-item">
                <h4><FaStar /> Tool Kalkulator Iklan</h4>
                <p>
                Hitungan lengkap perumusan modal, target omzet, HPP, laba, target penjualan, dst.
                Goal-nya adalah membuat rambu-rambu <strong>Target Cost Per Result</strong> 
                pada campaign yang dijalankan.
                </p>
            </div>

            <div className="bonus-item">
                <h4><FaStar /> Template Laporan Advertiser dan CS</h4>
                <p>
                Owner harus paham kondisi <strong>cashflow harian</strong> bisnisnya. 
                Di laporan ini, semua akan terlihat jelas apakah <strong>surplus atau minus</strong> 
                dari form yang diisi oleh tim Advertiser dan Customer Service.
                </p>
            </div>

            <div className="bonus-highlight"><FaFire /> SEMUA BONUS GRATIS UNTUK ANDA <FaFire /></div>

            <p className="bonus-warning">
                Semakin menunda, semakin jauh pula potensi bisa segera dapet <strong>Winning Campaign</strong>.<br />
                Jadi mumpung ada kesempatan, <strong>gass daftar aja</strong>!
            </p>
            </div>

    </section>
  );
};