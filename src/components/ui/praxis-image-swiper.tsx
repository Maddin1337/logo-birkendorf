import React from 'react';
import { WorkingImageSwiper } from './working-image-swiper';

interface PraxisImageSwiperProps {
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
}

export const PraxisImageSwiper: React.FC<PraxisImageSwiperProps> = ({
  className = '',
  cardWidth = 480,  // Erhöht von 320 auf 480px
  cardHeight = 600  // Erhöht von 400 auf 600px
}) => {
  // 10 geprüfte Platzhalterfotos für die Logopädie-Praxis von Unsplash
  const praxisImages = [
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

  // Verwende die Praxisbilder direkt
  const imageUrls = praxisImages.join(',');

  return (
    <WorkingImageSwiper
      className={className}
    />
  );
};