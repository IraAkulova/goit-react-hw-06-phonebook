// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, addFilter } from './actions';

// const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [];

// export const contactsReducer = createReducer(contactsInitialState, builder => {
//   builder
//     .addCase(addContact, (state, action) => [...state, action.payload]
//     )
//     .addCase(deleteContact, (state, action) => state.filter(contact => contact.id !== action.payload.id))
//     .addDefaultCase((state, action) => state);
// });

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, builder => {
//   builder
//     .addCase(addFilter, (state, action) => action.payload.text)
//     .addDefaultCase((state, action) => '');
// });
