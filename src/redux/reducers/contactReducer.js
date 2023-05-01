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
    default:
      return state;
  }
};

export default contactReducer;
