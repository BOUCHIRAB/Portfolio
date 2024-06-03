import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import Skills from "../../pages/Skills"
import Works from "../../pages/Works/"
import Details from "../../pages/Details/"
import Contact from "../../pages/Contact/"
import Error from "../../pages/Error/"
import Login from "../../pages/Login/"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import React, { useEffect, useState } from "react"
import { useUser } from "../../lib/customHooks"
import { ParallaxProvider } from "react-scroll-parallax"

function Router() {
  const [user, setUser] = useState(null)
  const { connectedUser } = useUser()
  useEffect(() => {
    setUser(connectedUser)
  }, [connectedUser])

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <ParallaxProvider speed={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills/" element={<Skills />} />
          <Route path="/Works/" element={<Works />} />
          <Route path="/Work/:IdWork" element={<Details />} />

          <Route path="/Contact/" element={<Contact />} />
          <Route path="/Login/" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ParallaxProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
