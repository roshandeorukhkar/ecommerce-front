export const reducer = (state, action) => {
    console.log("reducerState--->",state)
    if (action.type === "CLEAR_CART") {
        return { ...state, item: [] };
    }

    if (action.type === "GET_TOTAL") {
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
  
        //   let updatedTotalAmount = price * quantity;
        //   accum.totalAmount += updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
    return state;
  };