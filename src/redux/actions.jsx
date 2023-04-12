import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
}
  
export const deleteContact = id => {
  return {
    type: 'contact/deleteContact',
    payload: { id },
  };
};

export const addFilter = text => {
  return {
    type: 'filter/addFilter',
    payload: { text },
  };
};