import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import Skills from "../../pages/Skills"
import Works from "../../pages/Works/"
import Details from "../../pages/Details/"
import Contact from "../../pages/Contact/"
import Error from "../../pages/Error/"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import React from "react"

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills/" element={<Skills />} />
        <Route path="/Works/" element={<Works />} />
        <Route path="/Work/:IdWork" element={<Details />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
