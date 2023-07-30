
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    }
}
createCircle.color='yellow';
console.log(createCircle)


const circle={
    ridus:1,
    draw(){
        console.log('draw')
    }
};
// const another={};
// for (let key in circle){
//     another[key]=circle[key];
// }
const another=Object.assign({},circle);
console.log(another)