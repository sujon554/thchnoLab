import { useEffect, useState } from 'react';

const useSpecificProject = (key) => {
  const [project, setProject] = useState([]);
  const [projectLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/homeProjectList.json')
      .then((res) => res.json())
      .then((data) => {
        const uniqueProject = data[0].projectList.find(item=>  item.projectTitle === key);
        setProject(uniqueProject);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      
  }, []);
  return [project, projectLoading];
};

export default useSpecificProject;
