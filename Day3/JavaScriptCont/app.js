// console.log("Hi")
// // Objects
// let appName="facebook"
// var anotherapp="instagram"
// for(var i=0;i<1;i++){
//     appName="whatsapp"
//     console.log(appName)
//     console.log(anotherapp)
//     var anotherapp="twitter"
// }
// console.log(appName)
// console.log(anotherapp)
const person={
    name: "Akshay",
    age: 25,
    gender: "male",
    friends: ["Simran", "Abhinav", "Janmayjay"],
    intro: function (){
        console.log(this)
        console.log(this.name)
        //console.log("Hi from object")
    }
}
//2015
const intro2=person.intro
//console.log(person.age)

//Arrow functions
// function add(a,b){
//     //String literals
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
// }
//Arrow functions, ES6 Syntax
//NaN
const sub=(a,b)=>{
    console.log(a-b)
    //return a-b
}


//const sum = (a, b)=> (a+b)

//Arrow function & this

//setTimeout, setInterval, clearInterval
//callback
// console.log("Facebook")
// setTimeout(sub(7,1), 4000)
// console.log("Google")
//const id=setInterval(()=>{console.log("I Executed after 3 sec")}, 3000)
//clearInterval(id)