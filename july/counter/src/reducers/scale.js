const initalState = {
  counter: 0,
};

const changeNumber = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = {
        // ...state,
        counter: state.counter + 1,
      };
      break;

    case "DECREMENT":
      state = {
        // ...state,
        counter: state.counter - 1,
      };
      break;

    default:
      state = initalState;
  }

  return state;
};

const dummy = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = {
        // ...state,
        name: "Murgan",
      };
      break;

    case "DECREMENT":
      state = {
        // ...state,
        name: "Nishant",
      };
      break;

    default:
      state = {
        // ...state,
      };
  }

  return state;
};

// export default changeNumber;

export { changeNumber, dummy };
