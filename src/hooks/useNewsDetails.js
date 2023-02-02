import React, { useEffect, useState } from 'react';

const useNewsDetails = () => {
    const [newsDtails, setNewsDtails] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
   
    useEffect(() => {
        fetch('/newEvents.json')
          .then((res) => res.json())
          .then((data) => {
            setNewsDtails(data);
            setNewsLoading(false);
          })
          .catch(() => {
            setNewsLoading(false);
          });
      }, []);
      return [newsDtails, newsLoading];
};

export default useNewsDetails;