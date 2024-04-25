import { useState, useEffect } from "react";

interface ImageStatus {
  loading: boolean;
  error: boolean;
}

const useImageStatus = (src?: string): ImageStatus => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    const image = new Image();

    const handleLoad = () => {
      setLoading(false);
      setError(false);
    };

    const handleError = () => {
      setLoading(false);
      setError(true);
    };

    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);

    const srcWithQueryParam = `${src}?${Math.random()}`;
    image.src = srcWithQueryParam;

    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [src]);

  return { loading, error };
};

export default useImageStatus;
