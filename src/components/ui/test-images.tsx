import React from 'react';

export const TestImages: React.FC = () => {
  const testImages = [
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559839734-49b963a8a9a2?w=800&h=600&fit=crop'
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Test-Bilder (sollten alle sichtbar sein):</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {testImages.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Testbild ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg shadow-md"
              onError={(e) => {
                console.error(`Testbild ${index + 1} konnte nicht geladen werden:`, img);
              }}
              onLoad={() => {
                console.log(`Testbild ${index + 1} erfolgreich geladen:`, img);
              }}
            />
            <p className="text-xs text-center mt-1 text-gray-600">Bild {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};