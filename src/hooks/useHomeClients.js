import { useEffect, useState } from 'react';

const useHomeClients = () => {
    const [homeClientList, setClientList] = useState([]);
    const [clientLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('homeClientsList.json')
          .then((res) => res.json())
          .then((data) => {
            setClientList(data);
            setTimeout(() => {
              setLoading(false);
            }, 800);
          })
      }, []);


     return [homeClientList, clientLoading];

};

export default useHomeClients;