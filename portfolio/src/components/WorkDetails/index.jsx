import * as PropTypes from "prop-types"
import React from "react"
import "./WorkDetails.scss"

function WorkDetails({ work }) {
  const skillsList = work.skills.split("/")
  const skill = skillsList.map((skill, i) => (
    <li className="work_skills" key={i}>
      {skill}
    </li>
  ))

  const toolsList = work.tools.split(",")
  const tool = toolsList.map((tool, i) => (
    <span className="work_tools" key={i}>
      {tool}
    </span>
  ))

  return (
    <div className="work">
      <h1 className="work_title">{work.title}</h1>
      <p>{tool}</p>
      <h2 className="work_obj">Objectif du projet : {work.obj}</h2>
      Compétences déployées : {skill}
    </div>
  )
}

WorkDetails.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string,
    obj: PropTypes.string,
    skills: PropTypes.string,
    tools: PropTypes.string,

    pictures: PropTypes.string,
  }),
}

export default WorkDetails
