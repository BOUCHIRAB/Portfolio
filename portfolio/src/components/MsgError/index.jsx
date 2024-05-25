import React from "react"
import { Link } from "react-router-dom"
import "./Error.scss"

function MsgError() {
  return (
    <main>
      <div className="msgerror">
        <h1 className="msgerror_title">404</h1>
        <span className="msgerror_text">
          Oups! La page que vous demandez n&apos;existe pas.
        </span>
        <Link to="/" className="msgerror_link">
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </main>
  )
}

export default MsgError
