import "./WorkDetails.scss"
import BtnReturn from "../../assets/return.png"
import { Link } from "react-router-dom"
import Git from "../../assets/github2.png"
import Web from "../../assets/website.png"
import styled from "styled-components"
import { ListWorks } from "../../datas/Works"
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const StyledArrow = styled(Link)`
  text-align: left;
  width: 100%;
  padding: 0 20px;
`
function WorkDetails() {
  const { IdWork } = useParams()
  const navigate = useNavigate()
  const [work, setWork] = useState()

  useEffect(() => {
    const work = ListWorks.find((oneWork) => oneWork.id === IdWork)
    if (work === undefined) {
      return navigate("/Projet inexistant")
    }
    setWork(work)
  }, [IdWork, navigate])

  if (work === undefined) {
    return
  } else {
    const skill = work.skills.map((skill, i) => (
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
      <article className="work_details">
        <StyledArrow to={"/Works"}>
          <img src={BtnReturn} width="35" height="35" alt="icon return"></img>
        </StyledArrow>
        <section className="work">
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
        </section>
      </article>
    )
  }
}

export default WorkDetails
