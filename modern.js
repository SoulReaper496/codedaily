//const && let
const x =1;
console.log(x);

//this is

const person ={
    name:'Praveen',
    walk:function(){
        return (this)},
    talk:function(){
        return "hello"
    }    
}
//walk &&talk both are function which is inside object but will give diff output becoz of this keyword .
const person2 =person.talk();
console.log(person2);

//Arrow function
//if there is only one argument then no need of paranthese if its 0 arg the put ()
const newFun = number => number*number;
console.log(newFun(5));

const newArr =[
    {id:1, isActive:true},
    {id:2, isActive:false},
    {id:3,isActive:true},
]

/*const active = newArr.filter(function(job){
    return job.isActive ;
})*/
//Arrow function
const active = newArr.filter(job => job.isActive )
console.log(active);

//Arrow and this keyword 

//arrow function not rebind this

const per1 ={
    talks(){
        var self = this;
        setTimeout(function() {  console.log('self',self)},1000 )
     
    }
}
console.log(per1);

//array.map

const colors= ['red','blue','green'];

 const color = colors.map(color => `<li>${color}</li>`);
 

 console.log(color);

 //spread operator

 const con = [1,2,3];
 const con2 = [5,6,7];
 //const combined = con.concat(con2);
 //console.log(combined);
 
 //In ES6 we have another option

 const com =[...con,4,...con2,'abc'];
 console.log(com)

 //we can use this spread operator (...)to object

 const first = {
     name :'Praveen',

 }

 const second = {job : 'instructor'}

 const combined = {...first,...second,locations :'bangalore'};
 console.log(combined);

 //classs

 class Job {
     constructor(name){ 
        return  this.name = name;
     }

    work(){
      console.log('work');
    }
 }

 const job2= new Job('praveen');
console.log(job2.name) 
console.log(job2.work) 
 