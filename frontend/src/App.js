import React, { useState, useEffect } from "react"
import ContactForm from "./components/ContactForm"
import ContactsTable from "./components/ContactsTable"
import { getContacts } from "./api"
import { Container, Grid } from "@mui/material"
import "./App.css"

const App = () => {
  const [contacts, setContacts] = useState([])
  const [currentContact, setCurrentContact] = useState(null)

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data))
  }, [])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ERINO</h1>
      </header>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ContactForm
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
              setContacts={setContacts}
              getContacts={getContacts}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactsTable
              contacts={contacts}
              setContacts={setContacts}
              setCurrentContact={setCurrentContact}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
