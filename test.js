// let obj = new Object();
// obj.z="z";
// obj.k="k";
// obj.a="a";
// console.log(obj);
// console.log(Object.fromEntries(Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]))));

function sortEntries(objectToSort , sortBy ,sortOrder){
    if (sortBy === "key"){
        if (sortOrder === "desc"){
        return Object.fromEntries(Object.entries(objectToSort).sort((a,b) => b[0].localeCompare(a[0])));
        }else{
        return Object.fromEntries(Object.entries(objectToSort).sort((a,b) => a[0].localeCompare(b[0])));
        }
        
    } else if (sortBy === "value"){
        if (sortOrder === "desc"){
        return Object.fromEntries(Object.entries(objectToSort).sort((a,b) => b[1].localeCompare(a[1])));
        }else{
        return Object.fromEntries(Object.entries(objectToSort).sort((a,b) => a[1].localeCompare(b[1])));
        }
    }
}
let favFruit ={
    fruit : "Mango",
    region : "India" ,
    color : "Yellow"
}
console.log(sortEntries(favFruit,"value","desc"))
console.log(sortEntries(favFruit,"value","asc"))
console.log(sortEntries(favFruit,"key","desc"))
console.log(sortEntries(favFruit,"key","asc"))

console.log("day 2")
