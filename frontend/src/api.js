import axios from "axios"

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "http://localhost:5000/api/contacts", // Fallback for local development
})

export const getContacts = () => api.get("/")
export const addContact = (contact) => api.post("/", contact)
export const updateContact = (id, contact) => api.put(`/${id}`, contact)
export const deleteContact = (id) => api.delete(`/${id}`)
