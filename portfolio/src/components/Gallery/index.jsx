import React from "react"
import "./Gallery.scss"
import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.css"
import { ListWorks } from "../../datas/Works"

function Gallery() {
  const displayWorks = () =>
    ListWorks.map((work, i) => (
      <Carousel.Item className="work_card" key={i}>
        <Link to={`/Work/${work.id}`}>
          <img
            src={work.pictures}
            alt="project screenshot"
            className="gallery_img"
          ></img>

          <Carousel.Caption>
            <div className="label_work">
              <span>{work.title}</span>
            </div>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    ))

  return (
    <main>
      <h2 className="page_title">Mes réalisations</h2>
      <span className="subtitle">
        Cliquer sur un projet pour plus de détails
      </span>

      <Carousel className="gallery">{displayWorks()}</Carousel>
    </main>
  )
}

export default Gallery
