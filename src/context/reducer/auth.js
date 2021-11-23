//Reducer is a function that determine what previous state we had and what it will cha
//change to after something happen

const auth = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return state;
    default:
      return state;
  }
};
export default auth;
