import { useEffect, useState } from 'react';

const useProjectList = () => {
  const [homeProjectList, setProjectList] = useState([]);
  const [projectLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/homeProjectList.json')
      .then((res) => res.json())
      .then((data) => {
        setProjectList(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      
  }, []);
  return [homeProjectList, projectLoading];
};

export default useProjectList;
