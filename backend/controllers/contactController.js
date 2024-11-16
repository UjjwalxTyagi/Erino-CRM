const Contact = require("../models/Contact")

// Add a new contact
const addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body)
    await newContact.save()
    res.status(201).json(newContact)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Update a contact
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updatedContact)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// Delete a contact
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Contact deleted" })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { addContact, getContacts, updateContact, deleteContact }
