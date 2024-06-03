import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"
import styled from "styled-components"
import { useState } from "react"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  border-right: 1px solid white;
  padding: 3px 15px 0px 15px;
  &:hover,
  &:visited {
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    border-right: 0;
    padding: 0px 15px 20px 15px;
  }
`

function Header() {
  const [isOpen, setIsOpen] = useState("false")

  return (
    <header>
      <nav className="navbar">
        <div className="label_burger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div
          className={isOpen ? "navbar_link" : "close_burger"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/Skills/">Compétences</StyledLink>
          <StyledLink to="/Works">Mes réalisations</StyledLink>
          <StyledLink to="/Contact/">Contact</StyledLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
