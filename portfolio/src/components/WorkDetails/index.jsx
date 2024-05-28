import * as PropTypes from "prop-types"
import React from "react"
import "./WorkDetails.scss"
import BtnReturn from "../../assets/return.png"
import { Link } from "react-router-dom"
import Git from "../../assets/github2.png"
import Web from "../../assets/website.png"

function WorkDetails({ work }) {
  const skillsList = work.skills.split("\n")
  const skill = skillsList.map((skill, i) => (
    <li className="work_skills" key={i}>
      {skill}
    </li>
  ))
  const repo = work.repo ? (
    <span className="linkform_git">
      <img src={Git} alt="github icon"></img>
      <a href={work.repo}> Repository</a>
    </span>
  ) : null

  const website = work.website ? (
    <span className="linkform_web">
      <img src={Web} alt="website icon"></img>
      <a href={work.website}> Visiter le site</a>
    </span>
  ) : null

  const toolsList = work.tools.split(",")
  const tool = toolsList.map((tool, i) => (
    <span className="work_tools" key={i}>
      {tool}
    </span>
  ))

  return (
    <div>
      <Link to={"/Works"}>
        <img src={BtnReturn} alt="icon return"></img>{" "}
      </Link>
      <div className="work">
        <img
          src={work.pictures}
          alt="project screenshot"
          className="work_img"
        ></img>
        <div>
          <h1 className="work_title">{work.title}</h1>
          <p>{tool}</p>
          <h2 className="work_obj">Objectif du projet : {work.obj}</h2>
          Compétences déployées : {skill}
          <div className="linkform">
            {repo}
            {website}
          </div>
        </div>
      </div>
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
