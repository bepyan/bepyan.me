import mediumZoom, { type Zoom, type ZoomOptions } from 'medium-zoom';
import { useRef } from 'react';

interface ImageZoomProps extends React.ComponentProps<'img'> {
  options?: ZoomOptions;
}

export default function ZoomImage({ options, ...props }: ImageZoomProps) {
  const zoomRef = useRef<Zoom | null>(null);

  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom({
        ...options,
        background: 'var(--bg)',
      });
    }

    return zoomRef.current;
  }

  function attachZoom(image: HTMLImageElement | null) {
    const zoom = getZoom();

    if (image) {
      zoom.attach(image);
    } else {
      zoom.detach();
    }
  }

  return <img ref={attachZoom} {...props} />;
}
