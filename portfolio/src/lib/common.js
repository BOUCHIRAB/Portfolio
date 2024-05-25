/* eslint-disable */
import axios from "axios"
import { API_ROUTES } from "../utils/constants"

function formatWorks(workArray) {
  return workArray.map((work) => {
    const newWork = { ...work }
    // eslint-disable-next-line no-underscore-dangle
    newWork.id = newWork._id
    return newWork
  })
}

export function storeInLocalStorage(token, userId) {
  localStorage.setItem("token", token)
  localStorage.setItem("userId", userId)
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item)
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null }
  try {
    const token = getFromLocalStorage("token")
    const userId = getFromLocalStorage("userId")
    if (!token) {
      return defaultReturnObject
    }
    return { authenticated: true, user: { userId, token } }
  } catch (err) {
    console.error("getAuthenticatedUser, Something Went Wrong", err)
    return defaultReturnObject
  }
}

export async function getWorks() {
  try {
    const response = await axios({
      method: "GET",
      url: `${API_ROUTES.WORKS}`,
    })
    // eslint-disable-next-line array-callback-return
    const works = formatWorks(response.data)
    return works
  } catch (err) {
    console.error(err)
    return []
  }
}

export async function getWork(id) {
  try {
    const response = await axios({
      method: "GET",
      url: `${API_ROUTES.WORKS}/${id}`,
    })
    const work = response.data
    // eslint-disable-next-line no-underscore-dangle
    work.id = work._id
    return work
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function deleteWork(id) {
  try {
    await axios.delete(`${API_ROUTES.WORKS}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

export async function addWork(data) {
  const userId = localStorage.getItem("userId")
  console.log(data)

  const work = {
    userId,
    title: data.title,
    obj: data.obj,
    skills: data.skills,
    tools: data.tools,
    pictures: data.img,
  }

  //console.log(data.file0[0])

  const bodyFormData = new FormData()
  bodyFormData.append("work", JSON.stringify(work))
  bodyFormData.append("image", data.file[0])
  console.log(bodyFormData)
  try {
    return await axios({
      method: "post",
      url: `${API_ROUTES.WORKS}`,
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
  } catch (err) {
    console.error(err)
    return { error: true, message: err.message }
  }
}

export async function updateWork(data, id) {
  const userId = localStorage.getItem("userId")

  let newData
  const work = {
    userId,
    title: data.title,
    obj: data.obj,
    skills: data.skills,
    tools: data.tools,
    // pictures: data.img1,
  }
  console.log(work)
  if (data.file[0]) {
    newData = new FormData()
    newData.append("work", JSON.stringify(work))
    newData.append("image", data.file[0])
  } else {
    newData = { ...work }
    console.log(newData)
  }

  try {
    const newWork = await axios({
      method: "put",
      url: `${API_ROUTES.WORKS}/${id}`,
      data: newData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return newWork
  } catch (err) {
    console.error(err)
    return { error: true, message: err.message }
  }
}
