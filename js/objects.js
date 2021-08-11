//this file is for understanding basics about objects

//declare objects 
function ab(x, y)  { 
    this.model= x; 
    this.brand = y; 
}
     
const a = [{brand:"bmw", price : 2000},{model:"X series "}]
console.log(a [0]);
console.log(a [1]);

var c = new ab(a[1], a[0]);
console.log(c);

// const car  = new ab(
//     {
//   model: "A6", 
//     model:"xseries"
      
//      //color :"Black", 
//     // price :260000,
//     },
//   {
//     brand : "Audi",
//         brand:"bmw"
//        // color: "blue",
//         //price:20690595,
//        // carName :new ab(model,brand)
//  }
// );
// console.log(car);
    
   // let y = car.car2. price;
    
   // console.log(y);











