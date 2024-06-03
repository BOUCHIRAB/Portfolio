import React from "react"
import "./ProgressBar.scss"

function ProgressBar({ completed }) {
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    background: "linear-gradient(90deg, #143104,#2e7d1e,#4bc10a)",
    borderRadius: "inherit",
  }

  return (
    <div className="containerStyles">
      <div style={fillerStyles}></div>
    </div>
  )
}

export default ProgressBar
