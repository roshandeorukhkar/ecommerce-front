import { atom, selector } from "recoil";
//import  { getCartList }  from '../../core/apiCore'

// const initialCart = selector({
//   key: 'initialCart',
//   get: async ({get}) => {
//     return await getCartList()
//   }
// })

export const cartList =  atom({
  key: 'cartList',
  default:[],
  //default:initialCart,
});

export const cartFetchData = selector({
  key : 'cartaddedData',
  get: ({get}) => {
    const cartD = get(cartList);
    //const clength = cartD.length;
    const cartData = cartD;
    return {
      cartData,
      //clength
    };
  },
})