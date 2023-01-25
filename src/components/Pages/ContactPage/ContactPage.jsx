
import WithAuthDirect from "components/hoc/WithAuthDirect";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { Loader } from "components/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts,  selectLoader, selectUser } from "redux/selectors";
import { addContactRequest, deletContactRequest, getContactRequest } from "redux/slice/contactSlice";
import { List } from "@mui/material";
import { AddNewContact, Item, TextContacts } from "./ConctactPage.styled";
import { LabelFlex } from "components/Layout/Layout.styled";


function ContactPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const userData = useSelector(selectUser);
  const isLoading = useSelector(selectLoader);


const [name,setName] = useState('');
const [number, setNumber] = useState('');

useEffect(()=> {
  if(userData === null ) return 
  
  dispatch(getContactRequest())
},[userData,dispatch])

const onSubmitClick = (event) => {
  event.preventDefault()
  const formData = { 
    name,
    number
  }
  dispatch(addContactRequest(formData))
  setName('');
  setNumber('');
} 

const onDeleteClick = (contactId) => {
dispatch(deletContactRequest(contactId))
}

return (
  <>
  {isLoading && <Loader/>}
  <form onSubmit={onSubmitClick}>
            <AddNewContact>Add new contact</AddNewContact>
            <LabelFlex>
              Name:
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
              />
            </LabelFlex>
            <LabelFlex>
              Number:
              <input
                value={number}
                onChange={e => setNumber(e.target.value)}
                type="text"
              />
            </LabelFlex>
            
            <Button variant="contained" endIcon={<SendIcon />} disabled={isLoading} type="submit">
              Save
            </Button>
          </form>

<TextContacts>Contacts List</TextContacts>
{Array.isArray(contacts) && contacts.length === 0 && <p>У вас відсутні контакти </p>
          }
  {Array.isArray(contacts) && 
    contacts.map((contact)=> {
     return (
      <List key={contact.id}>
        <Item>
<h3>{contact.name}</h3>
<p>{contact.number}</p>
<IconButton  aria-label="delete" size="large" onClick={() => onDeleteClick(contact.id)}><DeleteIcon fontSize="inherit" /></IconButton>
        </Item>
      </List>
     ) 
    })
  }
  </>
)
}
const ProtectedPage = WithAuthDirect(ContactPage, "/login")
export default ProtectedPage
