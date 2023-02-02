import React, { useEffect, useState } from 'react';

const useSpecificNews = (key) => {
    const [newsDetails, setNewsDetails] = useState([]);
  const [newsLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/newEvents.json')
      .then((res) => res.json())
      .then((data) => {
        const uniquenews = data[0].news.find(item=>  item.title === key);
        setNewsDetails(uniquenews);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
    return [newsDetails, newsLoading]
};

export default useSpecificNews;