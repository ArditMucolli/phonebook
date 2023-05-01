const intialState = [
  {
    id: 0,
    name: "Ardit Mucolli",
    phoneNumber: 1234,
    email: "rs@gmail.com",
  },
  {
    id: 1,
    name: "test name",
    phoneNumber: 4321,
    email: "test@gmail.com",
  },
];

const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        contact => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
