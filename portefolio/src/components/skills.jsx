import Image from "next/image";
import {skillsData} from "./skillsList.js"

const Skills = () => {
  return (
    <div className="skills-container">
    <h2>Compétences</h2>
    <div className="grid-skills">
    {skillsData.map((skillTab)=>(
        <div className="skill-card">
            <i className={skillTab.icon}></i>
            <p>{skillTab.name}</p>
        </div>
    )
    )}
    </div>
   
    </div>
  )
}

export default Skills