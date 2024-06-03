import React from "react"
import "./Presentation.scss"
import IB from "../../assets/IB.webp"
import { Link } from "react-router-dom"

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
        santé, de réaliser la formation "Développeur WEB" d'Openclassrooms dans
        le cadre d'une reconversion professionnelle afin de revenir aux métiers
        du développement informatique. Passionnée et créative, je compte ainsi
        élargir mes compétences vers de nouveaux défis et contribuer au succès
        de projets innovants.
      </div>
      <button className="About_btn">
        <Link to={"/Contact"}>CONTACT</Link>
      </button>
    </div>
  )
}

export default Presentation
