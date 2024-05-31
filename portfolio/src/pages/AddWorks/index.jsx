import FormAddWorks from "../../components/FormAddWork"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useUser } from "../../lib/customHooks"
import { APP_ROUTES } from "../../utils/constants"

import "./AddWorks.scss"
import BtnReturn from "../../assets/return.png"
import { Button } from "bootstrap"

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
          <h2>Nouveau projet ajouté</h2>
          <Button>
            <Link to="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default AddWorks
