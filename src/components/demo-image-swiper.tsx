import React from 'react';
import { ImageSwiper } from "@/components/ui/image-swiper";

function DemoImageSwiper() {
  // Praxisraum-Bilder von Unsplash, die existieren und gut aussehen
  const imageUrls = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop,https://images.unsplash.com/photo-1584308666744-24d5c474f2ab?w=800&h=600&fit=crop,https://images.unsplash.com/photo-1587825140708-dfaf72ae4fc7?w=800&h=600&fit=crop,https://images.unsplash.com/photo-1551076805-e6902ab926bb?w=800&h=600&fit=crop,https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop,https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop";

  return (
    <div className="flex items-center justify-center">
      <ImageSwiper images={imageUrls} />
    </div>
  );
}

export { DemoImageSwiper };