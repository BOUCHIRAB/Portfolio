import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useUser } from "../../lib/customHooks"
import { getWork, deleteWork } from "../../lib/common"
import WorkDetails from "../../components/WorkDetails"
import NameHeader from "../../components/NameHeader"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"

function Details() {
  const { connectedUser, userLoading } = useUser()
  const [work, setWork] = useState(null)
  const [workdelete, setWorkdelet] = useState(false)
  const [loading, setLoading] = useState(true)
  const params = useParams()

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
            Delete
          </Button>

          <WorkDetails work={work} />
        </div>
      ) : !workdelete ? (
        <WorkDetails work={work} />
      ) : null

    const deletedContent = workdelete ? (
      <div>
        <h2 className="page_title">Le projet {work.title}</h2>
        <p>a bien été supprimé</p>
        <Link to="/Works">
          <Button variant="contained" color="success" type="button">
            Retour
          </Button>
        </Link>
      </div>
    ) : null

    return (
      <main>
        <NameHeader />

        {!loading ? loadingContent : null}
        <div>{workContent}</div>
        {workdelete ? deletedContent : null}
      </main>
    )
  }
}

export default Details
