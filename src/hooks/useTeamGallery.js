import { useEffect, useState } from 'react';

const useTeamGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [galleryLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/teamGallery.json')
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
  }, []);
  return [gallery, galleryLoading];
};

export default useTeamGallery;
