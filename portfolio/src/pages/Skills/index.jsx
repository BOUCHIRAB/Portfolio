import React from "react"
import GlobalSkills from "../../components/GlobalSkills/"
import ProgressSkills from "../../components/ProgressSkills/"
import NameHeader from "../../components/NameHeader"

import Darrow from "../../assets/down_arrow.png"
import Uarrow from "../../assets/up_arrow.png"

function Skills() {
  return (
    <main>
      <NameHeader />
      <h1 className="page_title" id="ancre_progress">
        Mes Compétences
      </h1>
      <ProgressSkills />
      Détails
      <a href="#ancre_globalskills">
        <img src={Darrow} alt="Down arrow icon"></img>
      </a>
      <GlobalSkills />
      <a href="#ancre_progress">
        <img src={Uarrow} alt="UP arrow icon"></img>
      </a>
    </main>
  )
}

export default Skills
