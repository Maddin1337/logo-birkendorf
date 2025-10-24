import React, { useState } from 'react';

interface SimpleImageSwiperProps {
  images: string;
  className?: string;
}

export const SimpleImageSwiper: React.FC<SimpleImageSwiperProps> = ({
  images,
  className = ''
}) => {
  const imageList = images.split(',').map(img => img.trim()).filter(img => img);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Debug: Logge die Bilderliste
  console.log('Bilderliste:', imageList);
  console.log('Anzahl der Bilder:', imageList.length);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
        <img
          src={imageList[currentIndex]}
          alt={`Praxisbild ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Bild konnte nicht geladen werden:', imageList[currentIndex]);
            console.error('Fehler-Event:', e);
          }}
          onLoad={() => {
            console.log('Bild erfolgreich geladen:', imageList[currentIndex]);
          }}
        />
        
        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Vorheriges Bild"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Nächstes Bild"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {imageList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};