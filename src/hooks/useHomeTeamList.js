import { useEffect, useState } from 'react';

const useHomeTeamList = () => {
  const [teamList, setTeamlist] = useState([]);
  const [teamListLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('homeTeamInfo.json')
      .then((res) => res.json())
      .then((data) => {
        setTeamlist(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
  }, []);
  return [teamList, teamListLoading];
};

export default useHomeTeamList;
