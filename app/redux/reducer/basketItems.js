const basketItems = (state = [], action) => {
    if (action.type === 'ADD_TO_BASKET') {
        const newState = [...state];
        const addedItem = action.payload;
        let itemIndex = newState.findIndex(
            item => item.itemId === addedItem.itemId,
        );

        if (newState.find(item => item.itemId === addedItem.itemId)) {
            const oldItem = newState[itemIndex];
            const newItem = {
                ...oldItem,
                itemId: oldItem.itemId,
                itemName: oldItem.itemName,
                itemPrice: oldItem.itemPrice,
                itemQuantity: addedItem.itemQuantity + oldItem.itemQuantity,
                itemTotalPrice:
                    addedItem.itemPrice * addedItem.itemQuantity +
                    oldItem.itemPrice * oldItem.itemQuantity,
            };
            newState.splice(itemIndex, 1, newItem);
            return newState;
        } else {
            return [
                ...state,
                {
                    itemId: addedItem.itemId,
                    itemName: addedItem.itemName,
                    itemPrice: addedItem.itemPrice,
                    itemQuantity: addedItem.itemQuantity,
                    itemTotalPrice:
                        addedItem.itemPrice * addedItem.itemQuantity,
                },
            ];
        }
    }

    //INSIDE CART COMPONENT
    if (action.type === 'ADD_QUANTITY') {
        const newState = [...state];
        let itemIndex = newState.findIndex(
            item => item.itemId === action.payload.itemId,
        );
        const oldItem = newState[itemIndex];
        const newItem = {
            ...oldItem,
            itemQuantity: oldItem.itemQuantity + 1,
            itemTotalPrice: oldItem.itemPrice * (oldItem.itemQuantity + 1),
        };

        newState.splice(itemIndex, 1, newItem);
        return newState;
    }

    if (action.type === 'SUB_QUANTITY') {
        const newState = [...state];
        let itemIndex = newState.findIndex(
            item => item.itemId === action.payload.itemId,
        );
        const oldItem = newState[itemIndex];
        if (oldItem.itemQuantity === 1) {
            newState.splice(itemIndex, 1);
            return newState;
        } else {
            const newItem = {
                ...oldItem,
                itemQuantity: oldItem.itemQuantity - 1,
                itemTotalPrice: oldItem.itemPrice * (oldItem.itemQuantity - 1),
            };
            newState.splice(itemIndex, 1, newItem);
            return newState;
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const newState = [...state];
        let itemIndex = newState.findIndex(
            item => item.itemId === action.payload.itemId,
        );
        // const oldItem = newState[itemIndex];
        newState.splice(itemIndex, 1);
        return newState;
    }

    return state;
};

export default basketItems;

// const basketItems = (state = [], action) => {

//         if (action == 'ADD_TO_BASKET') {
//           let addedItem = state.items.find(item=> item.id === action.id)
//                 //check if the action id exists in the addedItems
//             let existed_item= state.addedItems.find(item=> action.id === item.id)
//             if(existed_item)
//             {
//                 addedItem.quantity += 1
//                     return{
//                         ...state,
//                         total: state.total + addedItem.price
//                     }
//             }
//             else{
//                 addedItem.quantity = 1;
//                 //calculating the total
//                 let newTotal = state.total + addedItem.price

//                 return{
//                     ...state,
//                     addedItems: [...state.addedItems, addedItem],
//                     total : newTotal
//                 }

//             }
//         }else if(action == 'REMOVE_FROM_BASKET'){
//             let itemToRemove= state.addedItems.find(item=> action.id === item.id)
//                         let new_items = state.addedItems.filter(item=> action.id !== item.id)

//                         //calculating the total
//                         let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
//                         console.log(itemToRemove)
//                         return{
//                             ...state,
//                             addedItems: new_items,
//                             total: newTotal
//                         }
//         }else if(action == 'ADD_QUANTITY'){
//             let addedItem = state.items.find(item=> item.id === action.id)
//             addedItem.quantity += 1
//             let newTotal = state.total + addedItem.price
//             return{
//                 ...state,
//                 total: newTotal
//             }
//         }else if(action == 'SUB_QUANTITY'){
//             let addedItem = state.items.find(item=> item.id === action.id)
//             //if the qt == 0 then it should be removed
//             if(addedItem.quantity === 1){
//                 let new_items = state.addedItems.filter(item=>item.id !== action.id)
//                 let newTotal = state.total - addedItem.price
//                 return{
//                     ...state,
//                     addedItems: new_items,
//                     total: newTotal
//                 }
//             }
//             else {
//                 addedItem.quantity -= 1
//                 let newTotal = state.total - addedItem.price
//                 return{
//                     ...state,
//                     total: newTotal
//                 }
//             }
//         }else if(action == 'ADD_SHIPPING'){
//             return{
//                 ...state,
//                 total: state.total + 6
//             }
//         }else if(action == 'SUB_SHIPPING'){
//             return{
//                 ...state,
//                 total: state.total - 6
//             }
//         }

//     return state
// }

// export default basketItems
