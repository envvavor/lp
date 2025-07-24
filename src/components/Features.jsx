import { useEffect, useRef, useState } from "react";
import { FaChartArea, FaChartBar, FaClipboard, FaComment } from "react-icons/fa";
import { FaCheckDouble, FaSheetPlastic } from "react-icons/fa6";

export const Features = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: <FaSheetPlastic />, title: "Strategi meta ads untuk brand jangka panjang", description: "" },
    { icon: <FaChartBar />, title: "Strategi memenangkan persaingan di meta ads", description: "" },
    { icon: <FaClipboard />, title: "Bikin KPI Iklan biar profit terjaga", description: "" },
    { icon: <FaComment />, title: "Pra-campaign", description: "(bikin akun iklan, tips landingpage high conversion, tips konten iklan eye cacthing, setting pixel & event, setting payment)" },
    { icon: <FaChartArea />, title: "Running Campaign", description: "(cara formulasi iklan, praktek ngiklan, strategi split testing, strategi targetting, tips ads copy yang menarik)" },
    { icon: <FaCheckDouble />, title: "Pasca-campaign", description: "(cara baca data yang tepat tanpa pusing banyak metrik, strategi benerin iklan)" },
  ];

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return; // Pause on hover
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length, isHovered]);

  // Center active item
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[activeIndex];
    if (!card) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    const scrollTo = cardLeft - (containerWidth / 3) + (cardWidth / 3);

    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Setelah Mengikuti Kelas Ini Anda Akan Dapat Skill</h2>
        
        <div 
          className="features-container" 
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="feature-dots">
          {features.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};