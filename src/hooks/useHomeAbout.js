import { useEffect, useState } from 'react';


const useHomeAbout = () => {
    const [homeAboutList, setAboutList] = useState([]);
  const [aboutLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('aboutSection.json')
      .then((res) => res.json())
      .then((data) => {
        setAboutList(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
     
  }, []);
  return [homeAboutList, aboutLoading];
};

export default useHomeAbout;