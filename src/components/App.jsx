import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './list/ContactList';
import { deleteContact } from '../redux/contactsSlice';

import css from '../components/App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  const handleDelete = (id) => dispatch(deleteContact(id));

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={handleDelete}
        />
      </div>
    );
  }
