const reducer = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload
      };
    default:
      return state;
  }
};

export default reducer;
