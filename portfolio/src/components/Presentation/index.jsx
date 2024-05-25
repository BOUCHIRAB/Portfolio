import React from "react"
import "./Presentation.scss"
import Button from "@mui/material/Button"

import IB from "../../assets/IB.webp"

function Presentation() {
  return (
    <div className="About">
      <div className="About_header">
        <img src={IB} alt="me" className="About_picture"></img>
        <div>
          <h1 className="About_name">Ibtihaj BOUCHIRAB</h1>
          <h2 className="About_title">Développeuse WEB</h2>
        </div>
      </div>
      <div className="About_presentation">
        De formation statisticienne, j'ai décidé, après 18 ans de consulting en
        santé, de réaliser une reconversion professionnelle afin de revenir aux
        métier du développement. Passionnée et créative, je compte ainsi élargir
        mes compétences vers de nouveaux défis et contribuer au succès de
        projets innovants.
      </div>
      <Button variant="outlined" color="success">
        Contact
      </Button>
    </div>
  )
}

export default Presentation
