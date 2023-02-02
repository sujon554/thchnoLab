import { useEffect, useState } from 'react';

const useExpectation = () => {
  const [expectation, setHomeBanner] = useState([]);
  const [expectationLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('expectationAPi.json')
      .then((res) => res.json())
      .then((data) => {
        setHomeBanner(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      
  }, []);
  return [expectation, expectationLoading];
};

export default useExpectation;
