import { SkillsList } from "../../datas/GlobalSkills"
import "./GlobalSkills.scss"
import React from "react"
import Collapse from "../Collapse"

function GlobalSkills() {
  return (
    <article>
      <div className="skills" id="ancre_globalskills">
        <div className="skills_category">
          Compétences techniques
          {SkillsList[0].HardSkills.map((content, i) => (
            <Collapse
              key={i}
              contenttitle={content.title}
              contenttext={content.text.map((details, z) => (
                <ul key={z}>
                  <li>{details}</li>
                </ul>
              ))}
            />
          ))}
        </div>
        <div className="skills_category">
          Compétences transversales
          {SkillsList[0].OtherSkills.map((content, i) => (
            <Collapse
              key={i}
              contenttitle={content.title}
              contenttext={content.text.map((details, z) => (
                <ul key={z}>
                  <li>{details}</li>
                </ul>
              ))}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

export default GlobalSkills
