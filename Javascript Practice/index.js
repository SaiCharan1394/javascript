//     getname();
//   console.log(x);
//   console.log(getname);
//   var x = 7;
//   function getname() {
//     console.log("Iam new to javascript");
//   }
//   var x=10;
//   function b(){
//     var a =10;
//   }
//   console.log(x);
//   console.log(b);
//   console.log(a);
// var a;
// console.log(a)
// if (a===undefined){
//     console.log("a is undifined")
// }
// else{
//     console.log("a is not undifined")
// }
// var a=10;
// if (a===undefined){
//     console.log("a is undefined")
// }
// else{
//     console.log("a is defined")
// }
// var a="10"
// console.log(a)
// var a=10
// console.log(a)
// var b = 10;
// function a() {
//   var c = 20;
//   console.log(b);
//   d();
//   function d() {
//     var e = 30;
//     console.log(c);
//     f();
//     function f() {
//       var g = 40;
//       console.log(b);
//       console.log(c);
//       console.log(e);
//       console.log(g);
//     }
//   }
// }
// a();
//block scope

// var a=100;
// {
//     var a=20
//     let b=100;
//     const c=100;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
function x(){
    var a=1;
    setTimeout (function y(){
        var b=2;
        setTimeout (function z(){
            console.log(b)
        },6000)
        console.log(a)
    },5000)
    console.log("saicharan")
}
x();