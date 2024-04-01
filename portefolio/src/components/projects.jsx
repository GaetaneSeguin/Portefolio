
import {projectData} from "./projectsList.jsx"

const Projects = () => {
  return (
    <div className="projects-container">
    <h2>Projets </h2>
    <div className="grid-projects">
    {projectData.map((projectTab)=>(
        <div className="project-card">
            <h2>{projectTab.title}</h2>
            <p>{projectTab.description}</p>
            <a href={projectTab.gitHubLink} target="_blank" >Pour plus d'info</a>
        </div>
    )
    )}
    </div>
   
    </div>
  )
}

export default Projects