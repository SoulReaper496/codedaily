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

