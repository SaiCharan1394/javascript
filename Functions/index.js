// // arguments
// function sum(){
//     let total=0;
//     for (let i of arguments)
//         total+=i;
//     return total;
// }
// console.log(sum(1,2,3,4,5,6,7));


// // rest operator
// function sum(...num){
//     return num.reduce((a,b)=>a+b);
// }
// console.log(sum(1,3,5,6,7,8,8,9))


// // default perameters
// function interst(principal,rate,years){
//     rate=rate||3.5
//     years=years||4
//     return principal*rate/100*years;
// }
// console.log(interst(10000))


//Getters and setters
const person={
    firstName:'sai',
    secondName:'charan',
    get fullName(){
        return `${person.firstName} ${person.secondName}`
    },
    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.secondName=parts[1];
    }
};
person.fullName='Akki Raju'
console.log(person.firstName)  