export const Stats = () => {
  const stats = [
    { value: "2M", label: "Downloads" },
    { value: "BK", label: "Businesses" },
    { value: "1M", label: "Active Users" },
    { value: "2K", label: "Ratings" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};