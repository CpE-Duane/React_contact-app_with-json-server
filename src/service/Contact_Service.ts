import axios from "axios"

let serverURL = "http://localhost:3004"

let getAllContacts = () => {
    return axios.get(`${serverURL}/contacts`)
}

let getContact = (contactId: any) => {
    return axios.get(`${serverURL}/contacts/${contactId}`)
}

let addContact = (payload: any) => {
    return axios.post(`${serverURL}/contacts`, payload)
}

let updateContact = (contactId: any, payload: any) => {
    return axios.put(`${serverURL}/contacts/${contactId}`, payload)
}

let deleteContact = (contactId: any) => {
    return axios.delete(`${serverURL}/contacts/${contactId}`)
}

const ContactService = {
    getAllContacts,
    addContact,
    getContact,
    updateContact,
    deleteContact
}

export default ContactService