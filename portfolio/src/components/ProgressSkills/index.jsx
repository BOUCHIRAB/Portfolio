import React from "react"
import ProgressBar from "react-bootstrap/ProgressBar"

import "./ProgressSkills.scss"
import { ListProgressSkills } from "../../datas/ProgressSkills"

function ProgressSkills() {
  return (
    <article className="skills">
      <div className="skills_category">
        <span>FrontEnd</span>
        {ListProgressSkills[0].FrontSkills.map((content, i) => (
          <div key={i} className="skills_details">
            <div className="skills_category_item">
              {content.title}
              <img
                src={content.picture}
                alt={content.title}
                className="logo_skill"
              ></img>
            </div>

            <ProgressBar
              aria-label={`Level ${content.score}%`}
              className="skills_bar"
              variant="success"
              now={content.score}
            />
          </div>
        ))}
      </div>

      <div className="skills_category">
        <span>Backend</span>
        {ListProgressSkills[0].BackSkills.map((content, i) => (
          <div key={i} className="skills_details">
            <div className="skills_category_item">
              {content.title}
              <img
                src={content.picture}
                alt={content.title}
                className="logo_skill"
              ></img>
            </div>

            <ProgressBar
              className="skills_bar"
              variant="success"
              now={content.score}
            />
          </div>
        ))}
      </div>

      <div className="skills_category">
        <span> Autres Outils</span>
        {ListProgressSkills[0].OtherSkills.map((content, i) => (
          <div key={i} className="skills_details">
            <div className="skills_category_item">
              {content.title}
              <img
                src={content.picture}
                alt={content.title}
                className="logo_skill"
              ></img>
            </div>

            <ProgressBar
              className="skills_bar"
              variant="success"
              now={content.score}
            />
          </div>
        ))}
      </div>
    </article>
  )
}

export default ProgressSkills
