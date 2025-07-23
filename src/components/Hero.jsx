// src/components/Hero.jsx
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Make cool Landing pages with sApp</h1>
            <p>Create stunning landing pages in minutes with our drag-and-drop builder</p>
            <div className="hero-buttons">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop" alt="Hero Visual" />
            <div className="stats-preview">
              <div className="stat-item">
                <div className="stat-value">2M</div>
                <div className="stat-label">Downloads</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">BK</div>
                <div className="stat-label">Businesses</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1M</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2K</div>
                <div className="stat-label">Ratings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};