import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage = typeof window !==`undefined` ? window.localStorage : null;

const { persistAtom  } = recoilPersist({
  key : 'recoil-persist',
  storage : localStorage
})



// export const cartList =  atom({
//     key: 'cartList',
//     default:[],
//     effects_UNSTABLE: [
//       ({ onSet }) => {
//         onSet((e) => {
//           console.debug("Cart", e);
//         });
//       }
//     ]
//   });


export const cartList =  atom({
  key: 'cartList',
  default:[],
  effects_UNSTABLE: [persistAtom]
});

export const cartFetchData = selector({
    key : 'cartaddedData',
    get: ({get}) => {
      const cartD = get(cartList);
      const clength = cartD.length;
      const cartData = cartD;
      const total = cartD.reduce((prev , cur) => prev + (cur.price * cur.quantity) , 0 ); 
      return {
        cartData,
        clength,
        total
      };
    },
})

// export const filterQantityByID = selector({
//   key : "filterQantityByID",
//   get : ({get}) => get
// })

