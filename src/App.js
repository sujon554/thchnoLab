import { Navigate, Route, Routes } from "react-router-dom";
import ContactPage from "./page/contactPage/ContactPage";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import HomePage from "./page/home/HomePage";
import NewDetailsPage from "./page/newsAndEvents/NewDetailsPage";
import ProjectCaseStudyPage from "./page/project/ProjectCaseStudyPage";
import ProjectPage from "./page/project/ProjectPage";
import TeamPage from "./page/teamPage/TeamPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={ <HomePage/>}/>
        <Route path="/projects" element={ <ProjectPage/>}/>
        <Route path="/projects/:key" element={ <ProjectCaseStudyPage/>}/>
        <Route path="/teams" element={ <TeamPage/>}/>
        <Route path="/contact" element={ <ContactPage/>}/>
        <Route path="/news/:key" element={<NewDetailsPage /> } />
        <Route path="*" element={ <ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
