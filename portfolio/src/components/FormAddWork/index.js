import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import "./FormAddWork.scss"
import React, { useEffect, useMemo, useState } from "react"
import * as PropTypes from "prop-types"
import { addWork } from "../../lib/common"

import SendIcon from "@mui/icons-material/Send"
import Button from "@mui/material/Button"

import { Link } from "react-router-dom"
import BtnReturn from "../../assets/return.png"

function FormAddWorks(work) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: useMemo(
      () => ({
        title: work?.title,
        obj: work?.obj,
        skills: work?.skills,
        tools: work?.tools,
        repo: work?.repo,
        website: work?.website,
      }),
      [work]
    ),
  })
  useEffect(() => {
    reset(work)
  }, [work, reset])

  const onSubmit = async (data) => {
    const newWork = await addWork(data)
    if (!newWork.error) {
      console.log("projet ajouté")
      document.querySelector("Form").reset()
      alert("projet ajouté")
    } else {
      alert(newWork.message)
    }
  }

  return (
    <section className="addwork_contenair">
      <Link to={"/Works"}>
        <img src={BtnReturn} alt="icon return"></img>{" "}
      </Link>

      <Form className="form_addwork" onSubmit={handleSubmit(onSubmit)}>
        <h2> Ajouter un Projet</h2>
        <div>
          <input type="hidden" name="id" {...register("id")} />
          <Form.Group className="mb-3">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              id="title"
              {...register("title")}
              placeholder="Titre du projet"
            />
            <Form.Label>Objectifs</Form.Label>
            <Form.Control
              as="textarea"
              name="obj"
              {...register("obj")}
              rows={2}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Competences déployées</Form.Label>
            <Form.Control
              as="textarea"
              name="skills"
              {...register("skills")}
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Outils/Langages</Form.Label>
            <Form.Control
              type="text"
              name="tools"
              {...register("tools")}
              placeholder="Html, CSS..."
            />

            <Form.Label>Lien repository Github</Form.Label>
            <Form.Control type="text" name="repo" {...register("repo")} />

            <Form.Label>Lien vers le site</Form.Label>
            <Form.Control type="text" name="website" {...register("website")} />

            <Form.Label>Ajouter une image</Form.Label>
            <Form.Control type="file" id={"file"} {...register("file")} />
          </Form.Group>
          <Button type="submit"></Button>{" "}
          <Button
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
            type="submit"
          >
            Valider
          </Button>
        </div>
      </Form>
    </section>
  )
}

FormAddWorks.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.string,
    _id: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string,
    obj: PropTypes.string,
    skills: PropTypes.string,
    tools: PropTypes.string,
    pictures: PropTypes.string,
    repo: PropTypes.string,
    website: PropTypes.string,
  }),
}

export default FormAddWorks
