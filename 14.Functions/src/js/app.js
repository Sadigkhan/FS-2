//function declaration

// console.log(Topla(1,2)); 


// function Topla(a,b){
//     return a+b;
// }




//function expression
// Topla(5,6)

// var Topla = function(a,b){
//     console.log(a+b);
// }

//arrow function
// var Topla = a => a;
// console.log(Topla(1));


// let person = {
//     ad: "Mehmet",
//     surname:"Kara",
//     age: 25,
//     fullname: function(){
//         return this.ad + " " + this.surname;
//     }
// }
// console.log(person.fullname());

// var Sum = (a) =>(b) => a+b;
// console.log(Sum(1)(2));

// function Topla(a, b) {
//     console.log(a + b);
// }

// (function () {
//     console.log("Merhaba");
//     Topla(1, 2);
// }())

// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// let person1 ={
//     name:"Mehmet",
//     surname:"Kara",
//     age:25
// }


// var text=new String("Hello")
function String(text,text2){
    this.text=text
    this.text2=text2
}

var text=new String("Hello")

console.log(text.text2);

// var person = new Person("Mehmet", "Kara", 25);
// console.log(person);
// console.log(person1);