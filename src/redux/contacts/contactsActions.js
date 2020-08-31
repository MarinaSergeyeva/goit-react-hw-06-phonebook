import { v4 as uuidv4 } from "uuid";
import actionTypes from './contactsActionTypes'

const addContact = ({ name, number }) => ({
    type: addContact.ADD,
    payload: {
        contact: 
        {
            id: uuidv4()
            name,
            number,
        }
    }
        
});

const deleteContact = id => ({
    type: addContact.DELETE,
    payload: {
        id,
    }
})

const changeFilter = filter => ({
    type: addContact.FILTER,
    payload: {
        filter,
    }
})

export default {
    addContact,
    deleteContact,
    changeFilter,
}