import { FaCity, FaClock } from "react-icons/fa";
import "../App.css";

export const AdvancedClass = () => {
  return (
    <section className="advanced-class-section">
      <div className="container">
        <div className="class-container">
          <div className="class-info">
            <h2 className="class-title">ADVANCED CLASS</h2>
            <div className="class-date">9 AGUSTUS 2025</div>
            <div className="class-time"><FaClock /> 09.00 - 17.00 WIB</div>
            <div className="class-location"><FaCity /> YOGYAKARTA</div>
          </div>
          
          <div className="class-curriculum">
            <h3 className="curriculum-title">Materi Hari Kedua (Meta Ads For Advanced):</h3>
            <ul className="curriculum-list">
              <li><span className="list-icon">✓</span> Manajemen aset akun FB, FP, Pixel, Payment, dll</li>
              <li><span className="list-icon">✓</span> Instal laporan iklan versi yang lebih detail</li>
              <li><span className="list-icon">✓</span> Settingan iklan yang baik dan benar sesuai algoritma terbaru</li>
              <li><span className="list-icon">✓</span> Pembuatan dan penggunaaan Custom Audience dan Lookalike Audience</li>
              <li><span className="list-icon">✓</span> Optimasi konten iklan</li>
              <li><span className="list-icon">✓</span> Optimasi Landingpage</li>
              <li><span className="list-icon">✓</span> Optimasi Konten Instagram</li>
              <li><span className="list-icon">✓</span> Teknik Scale up dan Scale Out</li>
              <li><span className="list-icon">✓</span> Teknik Retargeting</li>
              <li><span className="list-icon">✓</span> SOP Evaluasi iklan saat proses scale budget</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};