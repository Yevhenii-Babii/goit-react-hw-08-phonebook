import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import { List } from "components/List/List";
import { Loader } from "components/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectFilter, selectLoader, selectUser } from "redux/selectors";
import { addContactRequest, deletContactRequest, getContactRequest } from "redux/slice/contactSlice";

export function ContactPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const userData = useSelector(selectUser);
  const isLoading = useSelector(selectLoader);
const error = useSelector(selectError);

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
            <h3>Додати новий контакт</h3>
            <label>
              Name:
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
              />
            </label>
            <label>
              Number:
              <input
                value={number}
                onChange={e => setNumber(e.target.value)}
                type="text"
              />
            </label>
            
            <button disabled={isLoading} type="submit">
              Додати контакт
            </button>
          </form>

<h2>Список контактів</h2>
{Array.isArray(contacts) && contacts.length === 0 && <p>У вас відсутні контакти </p>
          }
  {Array.isArray(contacts) && 
    contacts.map((contact)=> {
     return (
      <ul key={contact.id}>
        <li>
<h3>{contact.name}</h3>
<p>{contact.number}</p>
<button onClick={() => onDeleteClick(contact.id)}>Delete</button>
        </li>
      </ul>
     ) 
    })
  }
  </>
)













    // const contacts = useSelector(selectContacts);
    // const filter = useSelector(selectFilter);

    // const filterName = () => {
    //     const filterName = filter.toLowerCase().trim();
    //     return contacts.filter(user =>
    //       user.name.toLowerCase().trim().includes(filterName)
    //     );
    //   };
    // return ( 
    //     <>
    //     <Form/>
    //     <List contacts={filterName()}/>
    //     <Filter/>
    //     </>
    // )
}