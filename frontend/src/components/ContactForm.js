import React, { useState, useEffect } from "react"
import { TextField, Button, Box } from "@mui/material"
import { addContact, updateContact } from "../api"

const ContactForm = ({
  currentContact,
  setCurrentContact,
  setContacts,
  getContacts,
}) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  })

  useEffect(() => {
    if (currentContact) {
      setContact(currentContact)
    }
  }, [currentContact])

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentContact) {
      updateContact(currentContact._id, contact).then(() => {
        setCurrentContact(null)
        getContacts().then((res) => setContacts(res.data))
      })
    } else {
      addContact(contact).then(() => {
        getContacts().then((res) => setContacts(res.data))
      })
    }
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
    })
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="First Name"
        name="firstName"
        value={contact.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={contact.lastName}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={contact.email}
        onChange={handleChange}
      />
      <TextField
        label="Phone"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
      />
      <TextField
        label="Company"
        name="company"
        value={contact.company}
        onChange={handleChange}
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={contact.jobTitle}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        {currentContact ? "Update" : "Add"} Contact
      </Button>
    </Box>
  )
}

export default ContactForm
