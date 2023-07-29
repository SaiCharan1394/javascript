// If else

// let hour = 10;
// if (hour >= 6 && hour < 12) {
//   console.log("Good Morning");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }

// Switch Case

// let role;
// switch (role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User');
// }

// For loop

// for (let i=1;i<=5;i++){
//     if (i/2 === 0){
//         ans=(i/2)
//         console.log(ans);
//     }
//     else{
//         console.log(i,' is not divided by 2')
//     }
// }

// While Loop

//  let i=1;
//  while (i<=5){
//     if (i%2 !==0){
//         console.log(i)
//     }
//     i++
//  }

// Do While loop

//   let i=10;
//   do{
//     if (i%2 === 0){
//         console.log(i);
//     }
//     i++;
//   } while(i<=5)

// For In

// let colour=['red','green','yellow'];
// for (let index in colour){
//     console.log(index,colour[index]);
// }
// let person={
//     name:'sai',
//     age:30
// }
// for (let value in person ){
//     console.log(value,person[value]);
// }

// For Of

// let person=['red','yellow','blue','green']

// for (let persons of person){
//     console.log(persons)
// }

// Exersices

//write a fun that takes two num and return the max of two

// function maxNumber(a,b){
//     if (a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }

// console.log(maxNumber(5,6));

//write a code to check land scape

// function isLandscape(width,height){
//     return (width>height) ? true : false;
// }
// console.log(isLandscape(6,4))

//fizzbuzz algoritham

// function fizzbuzz(input) {
//   if (typeof input !== "number") {
//     return NaN;
//   } else if (input % 3 === 0 && input % 5 !== 0) {
//     return "Fizz";
//   } else if (input % 3 !== 0 && input % 5 === 0) {
//     return "Buzz";
//   } else if (input % 3 === 0 && input % 5 === 0) {
//     return "FizzBuzz";
//   } else {
//     return input;
//   }
// }
// const output = fizzbuzz(16);
// console.log(output);

// check speed

function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;
    if (speed<speedLimit+kmPerPoint){
        console.log('Ok');
    }
    else{
        points=Math.floor((speed-speedLimit)/kmPerPoint);
        if (points>=12){
            console.log('Licence Cancelld')
        }
        else{
            console.log('Points : ',points)
        }
    }
}
checkSpeed(74);