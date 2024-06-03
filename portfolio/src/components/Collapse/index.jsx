import React from "react"
import "./Collapse.scss"
import { useState } from "react"
import PropTypes from "prop-types"
import vector from "../../assets/Vector.png"

function Collapse({ contenttitle, contenttext }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <ul className="coll">
      <li key={contenttitle.index} className="skills_collapse">
        <span id={`anchor${contenttitle}`}>{contenttitle}</span>
        <a
          href={`#anchor${contenttitle}`}
          onClick={() => setIsOpen(!isOpen)}
          className="coll_up"
        >
          <img src={vector} alt="vector"></img>
        </a>
      </li>
      <li key={contenttext.index} className="collapse_open">
        <li>{contenttext}</li>
      </li>
    </ul>
  ) : (
    <ul className="coll">
      <li key={contenttitle.index} className="skills_collapse">
        <span id={`anchor${contenttitle}`}>{contenttitle}</span>
        <a
          href={`#anchor${contenttitle}`}
          className="coll_down"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={vector} alt="vector"></img>
        </a>
      </li>
      <li key={contenttext.index} className="collapse_close">
        <li>{contenttext}</li>
      </li>
    </ul>
  )
}
Collapse.propTypes = {
  contenttitle: PropTypes.string,
  contenttext: PropTypes.array,
}

export default Collapse
