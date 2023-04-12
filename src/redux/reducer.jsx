const ContactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [];

export const contactsReducer = (state = ContactsInitialState, action) => {
  switch (action.type) {
    case 'contact/addContact': {
      return [...state, action.payload];
    }
    case 'contact/deleteContact': {
      return state.filter(contact => contact.id !== action.payload.id);
    }
    default:
      return state;
  }
};

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/addFilter':
      return action.payload.text;
    default:
      return state;
  }
};