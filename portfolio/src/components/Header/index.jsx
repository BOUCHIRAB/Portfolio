import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Header.scss"
import styled from "styled-components"
import * as PropTypes from "prop-types"
import Button from "@mui/material/Button"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  border-right: 1px solid white;
  padding-right: 15px;
  padding: 3px 15px 0px 15px;
  &:hover,
  &:visited {
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    border-right: 0;
  }
`

function Header({ user, setUser }) {
  const navigate = useNavigate()
  const disconnect = () => {
    localStorage.clear()
    setUser(null)
    navigate("/")
  }

  return (
    <header>
      <nav className="navbar">
        <label className="label_burger" for="toggle">
          ☰
        </label>
        <input type="checkbox" id="toggle"></input>
        <div className="navbar_link">
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/Skills/">Compétences</StyledLink>
          <StyledLink to="/Works">Mes projets</StyledLink>
          <StyledLink to="/Contact/">Contact</StyledLink>
        </div>
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
          >
            <Button variant="outlined" color="error">
              Sign Out
            </Button>
          </span>
        )}
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
