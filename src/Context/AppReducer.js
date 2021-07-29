export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        userTransactions: state.userTransactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        userTransactions: [action.payload, ...state.userTransactions],
      };
    default:
      return state;
  }
};
