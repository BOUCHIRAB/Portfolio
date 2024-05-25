import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import FormAddWork from "../../components/FormAddWork"
import { getWork } from "../../lib/common"
//import { APP_ROUTES } from "../../utils/constants"
//import { useUser } from "../../lib/customHooks"

function UpdateWork() {
  const [work, setWork] = useState(null)
  const params = useParams()
  //const navigate = useNavigate()
  // const { connectedUser, auth, userLoading } = useUser()
  const [created, setCreated] = useState(false)

  useEffect(() => {
    async function getItem() {
      const data = await getWork(params.id)
      if (data) {
        setWork(data)
      }
    }
    getItem()
  }, [params.id])
  return (
    <div className="content-container">
      <div>
        {!created ? (
          <>
            {" "}
            <h1>Modifier le projet</h1>
            <FormAddWork work={work} validate={setCreated} />{" "}
          </>
        ) : (
          <div>
            <p>Le projet a bien été mis à jour</p>
            <Link to="/" className="button">
              Retour à l&apos;accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default UpdateWork
