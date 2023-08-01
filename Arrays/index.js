// const numbers=[3,4]

// numbers.push(5,6);
// numbers.unshift(1,2);
// numbers.splice(2,0,'a','b','c');
// console.log('array1 :',numbers);
// // numbers.pop(numbers);
// // console.log(numbers);
// // numbers.shift(numbers);
// // console.log(numbers);



// // console.log(numbers.indexOf('c'));

// const courses=[
//     { id: 1, name :'a'},
//     { id: 2, name :'b'},

// ]
// console.log('array2 :',courses)
// // const course=courses.find(function (course){
// //     return course.name==='a';

// // })
// // console.log(course)
// // const combained=numbers.concat(courses);
// // console.log('array1+array2 :',combained);
// // const slice=combained.slice(3,combained.length-1)
// // console.log('sliced array :',slice)


// const data=[1,2,3,4,5,6]
// for (let i in data){
//     console.log(data[i]);
// }

// const data1=[3,4,5,2,6,1];
// data1.sort()
// console.log(data1)

// const data2=[
//     {id:1,name:'Node.js'},
//     {id:2,name:'Javascript'},
//     {id:3,name:'React'}
// ]
// data2.sort(function(a,b){
//     if(a.name<b.name)return -1
//     if (a.name>b.name)return 1
//     return 0;
// })
// console.log(data2)

// const data3=[1,-1,2,3]
// const positive=data3.every(function(value){
//     return value>=0;
// })
// console.log(positive);

var data4=[1,-1,3,4,'a'];
data4.filter(n=>n>=0)

console.log(data4)