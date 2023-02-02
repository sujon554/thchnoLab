import { useEffect, useState } from 'react';


const useNewAndEvents = () => {
    const [newsList, setNewsList] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);

    useEffect(() => {
        fetch('/newEvents.json')
          .then((res) => res.json())
          .then((data) => {
            setNewsList(data);
            setNewsLoading(false);
          })
          .catch(() => {
            setNewsLoading(false);
          });
      }, []);
      return [newsList, newsLoading];
};

export default useNewAndEvents;