import React, { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"

import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios"
import * as PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { API_ROUTES, APP_ROUTES } from "../../utils/constants"
import { useUser } from "../../lib/customHooks"
import { storeInLocalStorage } from "../../lib/common"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.
export default function SignIn({ setUser }) {
  const defaultTheme = createTheme()

  const navigate = useNavigate()
  const { user, authenticated } = useUser()
  if (user || authenticated) {
    navigate(APP_ROUTES.DASHBOARD)
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState({
    error: false,
    message: "",
  })

  const signIn = async () => {
    try {
      setIsLoading(true)
      const response = await axios({
        method: "post",
        url: API_ROUTES.SIGN_IN,
        data: { email, password },
      })
      if (!response?.data?.token) {
        setNotification({ error: true, message: "Une erreur est survenue" })
        console.log("Something went wrong during signing in: ", response)
      } else {
        storeInLocalStorage(response.data.token, response.data.userId)
        setUser(response.data)
        navigate("/")
      }
    } catch (err) {
      console.log(err)
      setNotification({ error: true, message: err.message })
      console.log("Some error occured during signing in: ", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    })
  }
  return (
    <div>
      <div>
        {notification.message.length > 0 && <p>{notification.message}</p>}{" "}
      </div>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", width: "200vh" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color="gray">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={signIn}
                >
                  Se connecter
                </Button>

                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

SignIn.propTypes = {
  setUser: PropTypes.func.isRequired,
}
