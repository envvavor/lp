export const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built with performance in mind for instant page loads"
    },
    {
      icon: "🎨",
      title: "Beautiful Designs",
      description: "Pre-made templates that look amazing on any device"
    },
    {
      icon: "🧩",
      title: "Easy Customization",
      description: "Drag-and-drop interface with no coding required"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">What Makes sApp Different?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};