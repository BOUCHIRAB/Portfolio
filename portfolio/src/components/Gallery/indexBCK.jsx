import React, { useState, useEffect } from "react"
import Edit from "../../assets/edit.png"
import { getWorks } from "../../lib/common"
//import Masonry from "react-masonry-css"
import "./Gallery.scss"
import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

function Gallery() {
  const [works, setworks] = useState(null)
  const [loading, setLoading] = useState(true)
  let tokenValue = window.localStorage.getItem("token")
  const displayWorks = () =>
    works ? (
      works.map((work, i) => (
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
    ) : (
      <h1>Vide</h1>
    )

  useEffect(() => {
    async function getWorksList() {
      const data = await getWorks()
      if (data) {
        setworks(data)
        setLoading(false)
      }
    }
    getWorksList()
  }, [])

  return (
    <main>
      <h2>Mes réalisations</h2>
      <span>Cliquer sur un projet pour plus de détails</span>
      {tokenValue ? (
        <Link to="/Admin/" className="addwork">
          <br></br> <img src={Edit} alt="Down arrow icon"></img> Ajouter un
          projet
        </Link>
      ) : null}
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Carousel className="gallery">{displayWorks()}</Carousel>
      )}
    </main>
  )
}

export default Gallery
