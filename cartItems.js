
const cartItems = [{id:1,name:'shirt',quantity:2},{id:2,name:'pant',quantity:1}];
const addToCart = (arr,obj) => {
    const existingItem = arr.find(item => {
        return item.id === obj.id;
    });
    console.log(existingItem);
    if(existingItem){
       const editedItem = {...obj,quantity:existingItem.quantity + obj.quantity};
       console.log(editedItem);
        const editedItems = arr.map(ele=> ele.id === obj.id ? editedItem: ele);
        let editedItems1 = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id == obj.id){
                editedItems1.push(editedItem)
            }else {
                editedItems1.push(arr[i])
            }
        }
        console.log(editedItems);
        console.log(editedItems1);
    } else {
        console.log([...arr,obj]);
    }
    
}
addToCart(cartItems,{id:1,name:'shirt',quantity:2});

const removedItem = (arr,obj) => {
    const existingItem = arr.find(ele => ele.id === obj.id);
    if(existingItem.quantity === 1){
        return arr.filter(item => item.id != obj.id);
    }
    //return arr.map(item => item.id === obj.id ? {...obj,quantity:item.quantity - obj.quantity} : item);
    let newArr = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i].id === obj.id){
             newArr.push({...obj,quantity: arr[i].quantity - obj.quantity})
        }else {
            newArr.push(arr[i]);
        }
         
    }
    return newArr;

}
console.log(removedItem(cartItems,{id:1,name:'shirt',quantity:2}));