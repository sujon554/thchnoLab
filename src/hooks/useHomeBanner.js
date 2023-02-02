import { useEffect, useState } from 'react';

const useHomeBanner = () => {
  const [homeBanner, setHomeBanner] = useState([]);
  const [homeBannerLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/homeBannerApi.json')
      .then((res) => res.json())
      .then((data) => {
        setHomeBanner(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      
  }, []);
  return [homeBanner, homeBannerLoading];
};

export default useHomeBanner;
