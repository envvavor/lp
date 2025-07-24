import { FaBook, FaChartArea, FaCoffee, FaPersonBooth, FaQuestion, FaQuestionCircle } from "react-icons/fa";
import { FaGroupArrowsRotate, FaPerson, FaPersonCircleQuestion } from "react-icons/fa6";

export const Stats = () => {
  const stats = [
    { value: <FaBook />, label: "Hardcopy Modul biar lebih mudah paham" },
    { value: <FaChartArea />, label: "Formula Iklan Profit dengan Tools Kalkulator Iklan" },
    { value: <FaCoffee />, label: "2x Coffee Break, 1x Lunch" },
    { value: <FaQuestionCircle />, label: "Grup Support (buat tanya jawab kalau masih bingung setelah kelas berakhir)" },
    { value: <FaPersonCircleQuestion />, label: "Exclusive Japri dengan Mentor" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <h1 className="section-title">Yang Akan Didapatkan</h1>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};