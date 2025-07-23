import { useEffect, useRef, useState } from "react";

export const Features = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: "⚡", title: "Lightning Fast", description: "Built with performance in mind for instant page loads" },
    { icon: "🎨", title: "Beautiful Designs", description: "Pre-made templates that look amazing on any device" },
    { icon: "🧩", title: "Easy Customization", description: "Drag-and-drop interface with no coding required" },
    { icon: "🔒", title: "Secure & Reliable", description: "Top-notch security features to protect your data" },
    { icon: "📈", title: "Analytics Ready", description: "Built-in analytics to track your page performance" },
    { icon: "🌍", title: "Global Reach", description: "Optimized for SEO and international audiences" }
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
    const scrollTo = cardLeft - (containerWidth / 2) + (cardWidth / 2);

    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">What Makes EnvApp Different?</h2>
        
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