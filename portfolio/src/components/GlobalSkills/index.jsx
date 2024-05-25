import Accordion from "react-bootstrap/Accordion"
import { SkillsList } from "../../datas/GlobalSkills"
import "./GlobalSkills.scss"
import styled from "styled-components"

const StyledAccordion = styled(Accordion)`
padding :10px;

  }
`

function GlobalSkills() {
  return (
    <main>
      <div className="skills" id="ancre_globalskills">
        <div className="skills_category">
          Compétences techniques
          {SkillsList[0].HardSkills.map((content, i) => (
            <StyledAccordion flush key={i}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{content.title}</Accordion.Header>
                <Accordion.Body>
                  {content.text.map((details, z) => (
                    <ul key={z}>
                      <li>{details}</li>
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </StyledAccordion>
          ))}
        </div>
        <div className="skills_category">
          Compétences transversales
          {SkillsList[0].OtherSkills.map((content, i) => (
            <StyledAccordion flush key={i}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{content.title}</Accordion.Header>
                <Accordion.Body>
                  {content.text.map((details, z) => (
                    <ul key={z}>
                      <li>{details}</li>
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </StyledAccordion>
          ))}
        </div>
      </div>
    </main>
  )
}

export default GlobalSkills
