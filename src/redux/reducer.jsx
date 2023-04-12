import { combineReducers } from 'redux';

const ContactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [];
console.log(ContactsInitialState);

const contactsReducer = (state = ContactsInitialState, action) => {
  switch (action.type) {
    case 'contact/addContact': {
      return [...state, action.payload];
    }
    case 'contact/deleteContact': {
      return state.contacts.filter(contact => contact.id !== action.payload.id);
    }
    default:
      return state;
  }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/addFilter':
      return action.payload.text;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
