import { useEffect, useState } from 'react';

const useHomeServiceList = () => {
  const [homeServiceList, setHomeServiceList] = useState([]);
  const [homeServiceLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('homeServiceList.json')
      .then((res) => res.json())
      .then((data) => {
        setHomeServiceList(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
     
  }, []);
  return [homeServiceList, homeServiceLoading];
};

export default useHomeServiceList;
