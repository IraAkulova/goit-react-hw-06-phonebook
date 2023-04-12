import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './list/ContactList';
import { addContact, deleteContact } from '../redux/actions';

import css from '../components/App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(contacts);

  const formSubmitHandler = data => {
    const contExist = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (contExist) {
      return alert(`${data.name} is already in contacts list!`);
    }
    dispatch(addContact(data));
  };

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    console.log(contacts);
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => {
      console.log(contact.name);
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };
  const visibleContacts = getVisibleContacts();

  const handleDelete = (id) => dispatch(deleteContact(id));

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={handleDelete}
        />
      </div>
    );
  }
