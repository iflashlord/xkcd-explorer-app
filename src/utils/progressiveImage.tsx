import { useEffect, useState } from "react"

export const useProgressiveImage = function (src: string) {
  const [sourceLoaded, setSourceLoaded] = useState<string | null>(null)

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setSourceLoaded(src);
  }, [src])

  return sourceLoaded
}