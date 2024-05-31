import React from "react"
import "./Footer.scss"
import github from "../../assets/github.png"
import linkedin2 from "../../assets/linkedin2.png"

function Footer() {
  return (
    <footer className="contenairfooter">
      <div className="contenairfooter_link">
        <a href="https://github.com/BOUCHIRAB">
          <img src={github} width="30" height="30" alt="logo gituhb"></img>{" "}
        </a>
        <a href="www.linkedin.com/in/ibtihaj-bouchirab">
          <img src={linkedin2} width="30" height="30" alt="logo linkedin"></img>{" "}
        </a>
        <a href="https://cvdesignr.com/p/6640f2f2dc570" className="button_cv">
          CV
        </a>
      </div>
      <div className="contenairfooter_text">
        <div>© Réalisé par Ibtihaj BOUCHIRAB</div>
      </div>
    </footer>
  )
}

export default Footer
