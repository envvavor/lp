import { FaCity, FaClock } from "react-icons/fa";
import "../App.css";
import { FaTicket } from "react-icons/fa6";

export const Cocok = () => {
  return (
    <section className="advanced-class-section">
      <div className="container">
        <div className="class-container">
          <div className="class-curriculum">
            <h3 className="curriculum-title">Kelas ini Cocok Untuk</h3>
            <ul className="curriculum-list2">
              <li><span className="list-icon">✓</span> Brand yang ingin Omset/Profit naik berkali lipat</li>
              <li><span className="list-icon">✓</span> Brand yang ingin Scale Up ke market online</li>
              <li><span className="list-icon">✓</span> Brand yang menambah channel marketing</li>
              <li><span className="list-icon">✓</span> Jualan organik/offline merasa stuck</li>
              <li><span className="list-icon">✓</span> Pemula yang mau terjun iklan di Meta Ads</li>
              <li><span className="list-icon">✓</span> Anda yang frustasi belajar online</li>
              <li><span className="list-icon">✓</span> Sudah trial eror tak kunjung berhasil</li>
            </ul>
          </div>
          
          <div className="class-curriculum">
            <h3 className="curriculum-title">Kelas Ini Tidak Cocok Untuk</h3>
            <ul className="curriculum-list2">
              <li><span className="list-icon">✘</span> Yang main hit & run</li>
              <li><span className="list-icon">✘</span> Belum punya produk</li>
              <li><span className="list-icon">✘</span> Yang ngga bisa pakai Laptop</li>
              <li><span className="list-icon">✘</span> Yang mau hasil instan</li>
              <li><span className="list-icon">✘</span> Yang ngga mau fokus perbaikan</li>
              <li><span className="list-icon">✘</span> Yang punya mindset ngiklan = beban</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};