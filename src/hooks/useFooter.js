import { useEffect, useState } from 'react';


const useFooter = () => {
  const [footerItem, setFooterItem] = useState([]);
  const [footerLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/footer.json')
      .then((res) => res.json())
      .then((data) => {
        setFooterItem(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
  }, []);
  return [footerItem, footerLoading];


};

export default useFooter;