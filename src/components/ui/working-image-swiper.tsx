import React, { useState } from 'react';

interface WorkingImageSwiperProps {
  className?: string;
}

export const WorkingImageSwiper: React.FC<WorkingImageSwiperProps> = ({
  className = ''
}) => {
  // 10 garantiert funktionierende Praxisbilder von Unsplash
  const workingImages = [
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop', // Helle Praxis
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop', // Empfang
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop', // Behandlungsraum
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop', // Kindertherapieraum
    'https://images.unsplash.com/photo-1559839734-49b963a8a9a2?w=800&h=600&fit=crop', // Helle Praxis mit Pflanzen
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop', // Sprechzimmer
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop', // Empfangsbereich
    'https://images.unsplash.com/photo-1551076805-e6902ab926bb?w=800&h=600&fit=crop', // Therapieraum
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ab?w=800&h=600&fit=crop', // Wartezimmer
    'https://images.unsplash.com/photo-1587825140708-dfaf72ae4fc7?w=800&h=600&fit=crop'  // Modernes Behandlungszimmer
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % workingImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + workingImages.length) % workingImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
        {/* Hauptbild */}
        <img
          src={workingImages[currentIndex]}
          alt={`Praxisbild ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          style={{ minHeight: '400px' }}
          onError={(e) => {
            console.error('Bild konnte nicht geladen werden:', workingImages[currentIndex]);
            // Versuche ein Fallback-Bild
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop';
          }}
          onLoad={() => {
            console.log('Bild erfolgreich geladen:', workingImages[currentIndex]);
          }}
        />
        
        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Vorheriges Bild"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Nächstes Bild"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/30 rounded-full px-3 py-2">
          {workingImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};