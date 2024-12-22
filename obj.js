
const phoneBook = [{
    id: 1,
    name: 'joblul',
    number: '632472791'
},
{ id: 2,
    name: 'samsul hoque',
    number: '01716098765'
}
];

const addNumber = (arr,obj) =>{
    const nameExist = arr.find( ele => ele.name == obj.name);
    if(nameExist){
        return obj.name + ' is already exist';
    } else {
    return [...arr,obj];
    }
}
const hasan = addNumber(phoneBook,{id:3,name:'hasan',number: 657243876});
const hasan1 = addNumber(hasan,{id:3,name:'hasan',number: 657243876});
console.log(hasan);
console.log(hasan1);

const editPhoneBook = (arr,obj) => {
    const avail = arr.find(ele => ele.name === obj.name);
    const edited = {...avail,name: 'joblul hoque'};
    return arr.map( pb => pb.name === obj.name ? edited : pb);
}
const editedPb = editPhoneBook(phoneBook,{
    id: 1,
    name: 'joblul',
    number: '632472791'
});
console.log(editedPb);
console.log(phoneBook);
