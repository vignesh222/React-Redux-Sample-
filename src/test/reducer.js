export const data = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'DEL':
      if (state <= 0) {
        return state;
      } else {
        return state - 1;
      }

    case 'RESET':
      return 0;
    default:
      return state;
  }
};
