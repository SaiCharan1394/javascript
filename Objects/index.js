
// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     }
// }
// createCircle.color='yellow';
// console.log(createCircle)


// const circle={
//     ridus:1,
//     draw(){
//         console.log('draw')
//     }
// };
// // const another={};
// // for (let key in circle){
// //     another[key]=circle[key];
// // }
// const another=Object.assign({},circle);
// console.log(another)

// const message='This is my first message'
// console.log(message.length)
// console.log(message.replace('first','second'))
// console.log(message.toUpperCase())
// console.log(message.toLowerCase())
// let age=20;
// const another=`i am ${age}
// charan is my 
// friend.`;
// console.log(another)


//exercise


//  const showAddress={
//     street:'gandallapalli',
//     city:'pileru',
//     zipcode:517214

// };
// for (let keys in showAddress)
// console.log(keys,':',showAddress[keys])
// // console.log(showAddress[keys])


// factory function

// function createAddress(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode
//     }
// }
// console.log(createAddress('a','pileru',517214));


// // constrctor function

// function Address(street,city,zipcode){
//     this.street=street;
//     this.city=city;
//     this.zipcode=zipcode;
// }
// let address=new Address('a','pileru',517214)
// console.log(address)