import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Header.scss"
import styled from "styled-components"
import * as PropTypes from "prop-types"
import Button from "@mui/material/Button"
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

function Header({ user, setUser }) {
  const navigate = useNavigate()
  const disconnect = () => {
    localStorage.clear()
    setUser(null)
    navigate("/")
  }

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

          {!user ? (
            <span className="login_btn">
              <Link to="/Login">
                <Button variant="contained" color="success">
                  Sign In
                </Button>
              </Link>
            </span>
          ) : (
            <span
              tabIndex={0}
              role="button"
              onKeyUp={disconnect}
              onClick={disconnect}
              className="logout_btn"
            >
              <Button variant="outlined" color="error">
                Sign Out
              </Button>
            </span>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
Header.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    token: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
}
