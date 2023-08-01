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


// //Getters and setters and try and catch
// const person={
//     firstName:'sai',
//     secondName:'charan',
//     get fullName(){
//         return `${person.firstName} ${person.secondName}`
//     },
//     set fullName(value){
//         if (typeof value!=='string')
//         throw new Error('This is not string');      
//         const parts=value.split(' ');
//         if (parts.length !==2)
//         throw new Error('Enter first and last name')
//         this.firstName=parts[0];
//         this.secondName=parts[1];
//     }
// };
// try{
//     person.fullName='';
// }
// catch(a){
//     alert(a)
// }
// console.log(person.firstName)  


// this 
