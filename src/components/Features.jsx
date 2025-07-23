export const Features = () => {
  const features = [
    {
      title: "Fitur 1",
      description: "Deskripsi singkat tentang fitur pertama Anda",
      icon: "🌟"
    },
    {
      title: "Fitur 2",
      description: "Deskripsi singkat tentang fitur kedua Anda",
      icon: "⚡"
    },
    {
      title: "Fitur 3",
      description: "Deskripsi singkat tentang fitur ketiga Anda",
      icon: "🔒"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Fitur Unggulan</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};