# Praxisfotos

In diesem Ordner können Sie Ihre Praxisfotos ablegen.

## Anleitung:

1. Legen Sie Ihre Praxisfotos in diesem Ordner ab
2. Benennen Sie die Bilder mit fortlaufenden Nummern (z.B. praxis1.jpg, praxis2.jpg, etc.)
3. Unterstützte Formate: .jpg, .jpeg, .png, .webp
4. Empfohlene Größe: 800x600 Pixel oder größer

## Beispiel:

Wenn Sie folgende Bilder haben:
- praxis1.jpg
- praxis2.jpg
- praxis3.jpg

Dann müssen Sie in der App.tsx-Datei die ImageSwiper-Komponente wie folgt anpassen:

```tsx
<ImageSwiper 
  images="/images/praxis/praxis1.jpg,/images/praxis/praxis2.jpg,/images/praxis/praxis3.jpg"
  cardWidth={320}
  cardHeight={400}
  className="mx-auto"
/>
```

Die Bilder werden dann automatisch in der ImageSwiper-Komponente angezeigt.