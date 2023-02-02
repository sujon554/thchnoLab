import { useEffect, useState } from 'react';

const useHomeServiceSolutionList = () => {
  const [homeServiceSolutionList, setHomeServiceSolutionList] = useState([]);
  const [homeServiceSolutionListLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('homeServiceSolutionList.json')
      .then((res) => res.json())
      .then((data) => {
        setHomeServiceSolutionList(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
  }, []);
  return [homeServiceSolutionList, homeServiceSolutionListLoading];
};

export default useHomeServiceSolutionList;
