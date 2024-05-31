import { SkillsList } from "../../datas/GlobalSkills"
import "./GlobalSkills.scss"
import React from "react"
import Collapse from "../Collapse"
import Uarrow from "../../assets/up_arrow.png"

function GlobalSkills() {
  return (
    <article>
      <div className="gskills" id="ancre_globalskills">
        <div className="gskills_category">
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
        <div className="gskills_category">
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
      <a href="#ancre_progress">
        <img src={Uarrow} alt="UP arrow icon"></img>
      </a>
    </article>
  )
}

export default GlobalSkills
