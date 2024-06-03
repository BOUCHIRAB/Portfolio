import "./FormContact.scss"
import emailjs from "@emailjs/browser"
import Form from "react-bootstrap/Form"
import SendIcon from "@mui/icons-material/Send"
import Button from "@mui/material/Button"

function FormContact() {
  emailjs.init({
    publicKey: "j_st-b1mXAB8NVcjg",
  })
  const sendEmail = (e) => {
    e.preventDefault()
    const data = {
      from_name: document.querySelector("[name=from_name]").value,
      user_mail: document.querySelector("[name=user_email]").value,
      message: document.querySelector("[name=message]").value,
    }

    emailjs
      .send("service_bdt6nub", "template_dvksbdb", data)

      .then(
        (result) => {
          alert("message sent successfully...")

          console.log(result.text)
          document.querySelector("Form").reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <article className="contact">
      <h2 className="page_title">Me contacter</h2>
      <div className="form_contenair">
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <span>Nom Prénom</span>
            <Form.Control type="text" name="from_name" />
          </Form.Group>

          <br></br>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control type="email" />

            <Form.Text className="text-muted" name="user_email">
              <span className="info_mail">Votre mail ne sera pas partagé.</span>
            </Form.Text>
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>

            <Form.Control as="textarea" name="message" rows={6} />
          </Form.Group>

          <Button
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
            type="submit"
          >
            Envoyer
          </Button>
        </Form>
      </div>
    </article>
  )
}

export default FormContact
