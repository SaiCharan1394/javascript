const numbers=[3,4]

numbers.push(5,6);
numbers.unshift(1,2);
numbers.splice(2,0,'a','b','c');
console.log(numbers);
numbers.pop(numbers);
console.log(numbers);
numbers.shift(numbers);
console.log(numbers);



console.log(numbers.indexOf('c'));

const courses=[
    { id: 1, name :'a'},
    { id: 2, name :'b'},

]
const course=courses.find(function (course){
    return course.name==='a';

})
    console.log(course)