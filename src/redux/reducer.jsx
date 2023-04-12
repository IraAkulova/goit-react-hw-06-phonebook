const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'contact/addContact': {
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      }
      case 'contact/deleteContact': {
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload.id
          ),
        };
      }
      case 'filter/addFilter':
        return {
          ...state,
          filter: action.payload.text,
        };
      default:
        return state;
    }
};
