export const addToBasket = addedItem => {
    return {
        type: 'ADD_TO_BASKET',
        payload: addedItem,
    };
};

//remove item action
export const removeItem = item => {
    return {
        type: 'REMOVE_ITEM',
        payload: item,
    };
};
//subtract qt action
export const subtractQuantity = item => {
    return {
        type: 'SUB_QUANTITY',
        payload: item,
    };
};
//add qt action
export const addQuantity = item => {
    return {
        type: 'ADD_QUANTITY',
        payload: item,
    };
};

//add cart action
// export const addToCart= (id)=>{
//     return{
//         type: 'ADD_TO_CART',
//         id
//     }
// }
// //remove item action
// export const removeItem=(id)=>{
//     return{
//         type: 'REMOVE_ITEM',
//         id
//     }
// }
// //subtract qt action
// export const subtractQuantity=(id)=>{
//     return{
//         type: 'SUB_QUANTITY',
//         id
//     }
// }
// //add qt action
// export const addQuantity=(id)=>{
//     return{
//         type: 'ADD_QUANTITY',
//         id
//     }
// }
