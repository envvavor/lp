import { useState } from "react";
import "../App.css"; // atau masukkan ke App.css
import { FaSearch, FaStethoscope } from "react-icons/fa";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: "/images/1.webp", alt: "Bukti 1" },
    { id: 2, src: "/images/2.webp", alt: "Bukti 2" },
    { id: 3, src: "/images/4.webp", alt: "Tools" },
    { id: 4, src: "/images/5.webp", alt: "Template Laporan" },
    { id: 5, src: "/images/6.webp", alt: "Meet" },
    { id: 6, src: "/images/7.webp", alt: "Meet" },
    { id: 7, src: "/images/8.webp", alt: "Meet" },
    { id: 8, src: "/images/9.webp", alt: "Meet" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Galeri Foto</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="image-overlay">
                <span className="zoom-icon"><FaSearch /></span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>×</button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
              />
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};