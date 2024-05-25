import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useUser } from "../../lib/customHooks"
import { getWork, deleteWork } from "../../lib/common"
import WorkDetails from "../../components/WorkDetails"
import NameHeader from "../../components/NameHeader"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import "./Details.scss"
import BtnReturn from "../../assets/return.png"

function Details() {
  const { connectedUser, userLoading } = useUser()
  const [work, setWork] = useState(null)
  const [workdelete, setWorkdelet] = useState(false)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  console.log(params.id)

  useEffect(() => {
    async function getItem() {
      const data = await getWork(params.id)
      if (data) {
        setWork(data)
      }
    }
    getItem()
  }, [params.id])

  useEffect(() => {
    if (!userLoading && !connectedUser && work) {
      setLoading(false)
    }
  }, [work, userLoading, connectedUser])

  if (work === null) {
    return
  } else {
    const onDelete = async (e) => {
      if (e.key && e.key !== "Enter") {
        return
      }

      const del = await deleteWork(work.id)
      if (del) {
        setWorkdelet(true)
      }
    }

    const loadingContent = ""

    console.log(loading && !workdelete)

    const workContent =
      loading && !workdelete && work ? (
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={onDelete}
            startIcon={<DeleteIcon />}
            size="small"
          >
            {" "}
            Delete
          </Button>
          <div className="work_contenair">
            <img src={work.pictures} alt={work.picture}></img>
            <WorkDetails work={work} />
          </div>
        </div>
      ) : !workdelete ? (
        <div className="work_contenair">
          <img src={work.pictures}></img>
          <WorkDetails work={work} />
        </div>
      ) : null

    const deletedContent = workdelete ? (
      <div>
        <h1>Le projet {work.title}</h1>
        <p>a bien été supprimé</p>
        <Link to="/Works">
          <button type="button">{"Retour"}</button>
        </Link>
      </div>
    ) : null

    return (
      <div>
        <NameHeader />
        <Link to={"/Works"}>
          {" "}
          <img src={BtnReturn} alt="icon return"></img>{" "}
        </Link>

        {!loading ? loadingContent : null}
        <div>{workContent}</div>
        {workdelete ? deletedContent : null}
      </div>
    )
  }
}

export default Details
