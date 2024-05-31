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
      <img src={Git} width="25" height="25" alt="github icon"></img>
      <a href={work.repo}> Repository</a>
    </span>
  ) : null

  const website = work.website ? (
    <span className="linkform_web">
      <img src={Web} width="15" height="15" alt="website icon"></img>
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
    <section className="work_details">
      <Link to={"/Works"}>
        <img src={BtnReturn} width="35" height="35" alt="icon return"></img>{" "}
      </Link>
      <div className="work">
        <img
          src={work.pictures}
          alt="project screenshot"
          className="work_img"
          fetchpriority="high"
          width="350"
          height="250"
        ></img>
        <div>
          <h1 className="work_title">{work.title}</h1>
          <div className="tools_contenair">{tool}</div>
          <div className="work_obj">Objectif du projet : {work.obj}</div>
          Compétences déployées : <ul>{skill}</ul>
          <div className="linkform">
            {repo}
            {website}
          </div>
        </div>
      </div>
    </section>
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
