import FormAddWorks from "../../components/FormAddWork"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useUser } from "../../lib/customHooks"
import { APP_ROUTES } from "../../utils/constants"

import "./AddWorks.scss"

function AddWorks() {
  const navigate = useNavigate()
  const { connectedUser, auth, userLoading } = useUser()
  const [created, setCreated] = useState(false)
  useEffect(() => {
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_ROUTES.SIGN_IN)
      }
    }
  }, [userLoading])

  return (
    <div>
      {!created ? (
        <FormAddWorks />
      ) : (
        <div>
          <h1>Nouveau projet ajouté</h1>
          <Link to="/" className="button">
            Retour à l&apos;accueil
          </Link>
        </div>
      )}
    </div>
  )
}

export default AddWorks
