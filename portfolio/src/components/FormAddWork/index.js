import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import "./FormAddWork.scss"
import React, { useEffect, useMemo, useState } from "react"
import * as PropTypes from "prop-types"
import { addWork } from "../../lib/common"

function FormAddWorks(work) {
  let [items, setitems] = useState([])
  let [nbitems, setnbitems] = useState(0)
  let [pictures, setpictures] = useState([])
  let [nbpictures, setnbpictures] = useState(0)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: useMemo(
      () => ({
        title: work?.title,
        obj: work?.obj,
        skills: work?.skills,
        tools: work?.tools,
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
    <Form className="form_addwork" onSubmit={handleSubmit(onSubmit)}>
      <h1>Ajouter un Projet</h1>
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
            rows={4}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Outils/Langages
            <Button
              id="toggle-check"
              variant="secondary"
              onClick={() => {
                let count = items.push(
                  <Form.Control
                    key={nbitems}
                    type="text"
                    name={`tools${nbitems}`}
                    {...register(`tools${nbitems}`)}
                    placeholder="Html, CSS..."
                  />
                )
                setitems(items)
                setnbitems(count + 1)
                console.log(count)
              }}
            >
              Ajouter
            </Button>
          </Form.Label>
          <Form.Control
            type="text"
            name="tools"
            {...register("tools")}
            placeholder="Html, CSS..."
          />
          <Form.Group>
            <div>{items}</div>
          </Form.Group>

          <Form.Label>
            Ajouter une image
            <Button
              id="toggle-check"
              variant="secondary"
              onClick={() => {
                let count = pictures.push(
                  <Form.Control
                    key={nbpictures}
                    type="file"
                    id={`img${nbpictures}`}
                    {...register(`file${nbpictures}`)}
                  />
                )
                setpictures(pictures)
                setnbpictures(count)
                console.log(count)
              }}
            >
              Ajouter
            </Button>
          </Form.Label>
          <Form.Control type="file" id={"file"} {...register("file")} />
          <div>{pictures}</div>
        </Form.Group>
        <Button type="submit">Valider</Button>
      </div>
    </Form>
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
  }),
}

export default FormAddWorks
