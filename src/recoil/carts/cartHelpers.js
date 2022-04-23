import { atom, selector } from "recoil";

export const cartList =  atom({
    key: 'cartList',
    default:[],
    effects_UNSTABLE: [
      ({ onSet }) => {
        onSet((e) => {
          console.debug("Cart", e);
        });
      }
    ]
  });

export const cartFetchData = selector({
    key : 'cartaddedData',
    get: ({get}) => {
      const cartD = get(cartList);
      const clength = cartD.length;
      const cartData = cartD;
      const total = cartD.reduce((prev , cur) => prev + cur.price , 0 ); 
      return {
        cartData,
        clength,
        total
      };
    },
})

