let names = [];
const addName = (name) => {
return names.push(name);
}
addName("joblul");
addName("hanifa");
addName("habib");
addName("hasan");
console.log(names);

const display = (arr) => {
    return arr.forEach(element => {
        console.log(element);
    });
}
display(names);
const deleteItem = (arr,name) => {
    return arr.filter(n =>{
        return n !== name;
    })
}
const namesWithoutJoblul = deleteItem(names,'joblul');
console.log(namesWithoutJoblul);
console.log(names);

const mapNames = (arr) => {
    return arr.map(ele => ele);
}
const newArr = mapNames(names);
console.log(newArr);
const nameExist = (arr,name) => {
    return arr.find(n => n === name);
}
const avail = nameExist(names,'joblul');
console.log(avail);
const addNewName = (arr,name) => {
    const nex = arr.find(na => na ===name);
    if(nex){
        console.log('name already exist!');
    } else {
        arr.push(name);
    }
}
addNewName(names,'shakib');

console.log(names);
const editName = (arr,name) => {
    let avail = arr.find(n=> n === name);
    avail = "joblul hoque";
    return arr.map(ele => ele === name? avail: ele);
}
const editedNames = editName(names,'joblul');
console.log(editedNames);