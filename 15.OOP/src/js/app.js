// // const numbers = [1, 2, 3, 4, 5];

// //for loop
// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// //forEach
// // numbers.forEach((demo) => {
// //   console.log(demo);
// // });

// //while loop

// // let i = 0;
// // while (i < numbers.length) {
// //     console.log(numbers[i]);
// //     i++;
// // }

// //do while loop

// // let i = 0;
// // do {
// //     console.log(numbers[i]);
// //     i++;
// // }while (i < numbers.length)

// // for of loop

// // for (let number of numbers) {
// //     console.log(number);
// // }


// //for in loop

// // for (let index in numbers) {
// //     console.log(numbers[index]);
// // }


// // let person = {
// //     ad: 'John',
// //     age: 30,
// //     salary: 4000,
// //     department: 'IT'
// // }

// // for (let key in person) {
// //     // console.log(key);
// //     console.log(person[key]);
// // }

// // var x=3.14;
// // var x=3.15;


// // // const y=3.14;
// // // y=3.15;

// // let a=3.14;
// // let a=3.15;

// // console.log(a);


// // const person={
// //     ad:"Humay",
// //     soyad: "Hesenova",
// //     yas: 22,
// //     maas: 4000,
// //     getFullName: function(){
// //         return this.ad + " " + this.soyad;
// //     },
// //     // cars:{
// //     //     car1:"BMW",
// //     //     car2:"Mercedes",
// //     //     car3:"Audi",
// //     //     car4:"Lada07"
// //     // }
// //     // cars:[

// //     //         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
// //     //         {name:"BMW", models:["320", "X5", "X6"]},

// //     // ]
// // }





// // delete person;
// // console.log(person);

// // delete person.getFullName;
// // console.log(person)

// // const secondPerson={}
// // console.log(secondPerson);
// // secondPerson.ad="Samir";
// // secondPerson.soyad="Samirov";
// // secondPerson.yas=25;
// // secondPerson.getFullName=function(){
// //     return this.ad + " " + this.soyad;
// // }

// // console.log(secondPerson);


// // const anotherPerson=new Object();
// // console.log(anotherPerson);
// // anotherPerson.ad="Samir";
// // anotherPerson.soyad="Samirov";
// // anotherPerson.yas=25;

// // console.log(anotherPerson);


// // let x=person;
// // console.log(typeof x);
// // x.ad="Hesen";
// // x.soyad="Hesenov";
// // let c=x;
// // c.ad="Samir";


// // console.log(person.getFullName());
// // console.log(x.getFullName());
// // console.log(c.getFullName());

// // let btn1=document.getElementById("first");
// // let btn2=document.getElementById("second");

// // // console.log(btn2);



// // function First(a,b){
// //     console.log(a+b);
// // }

// // let Second=()=>console.log(this);

// // btn1.addEventListener("click",First)
// // btn2.addEventListener("click",Second)

// // function ThisDefiner(){
// //     "use strict"
// //     console.log(this);
// // }

// // ThisDefiner()

// // "use strict"

// // x=20;
// // console.log(x);

// class Human{
//     constructor(ad,soyad){
//         this.ad=ad;
//         this.soyad=soyad;
//     }

// }

// let Naile=new Human("Naile","Hesenova");



// let x=Naile;
// x.ad="Samir";
// console.log(Naile);
// // console.log(typeof Human);


// // function Person(ad,soyad){
// //     this.ad=ad;
// //     this.soyad=soyad;
// // }

// // let Hesen=new Person("Hesen","Hesenov");
// // console.log(typeof Person);



// let person = {
//     ad: 'John',
//     age: 30,
//     salary: 4000,
//     department: 'IT',
//     getFullName: function(){ 
//         return this.ad + " " + this.age;
//     }   
// }

// console.log(Object.keys(person).indexOf("ad"));

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   let myString = JSON.stringify(person);
//   console.log(myString);
//   let myObj = JSON.parse(myString);
//     console.log(myObj);







//getter and setter

// const person = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     city: "New York",
//     get fullName(){
//         return this.name + " " + this.surname + " "+ this.city;
//     },
//     GetFullName: function(){ //
//         return this.name + " " + this.surname;
//     },
//     SetFullname: function(value){ //constructor function
//         const parts=value.split(" ");
//         this.name=parts[0];
//         this.surname=parts[1];
//         this.city=parts[2];
//     },
//     set fullName2(value){
//         const parts=value.split(" ");
//         this.name=parts[0];
//         this.surname=parts[1];
//         this.city=parts[2];
//     }
// }


// console.log(person.fullName2="Samir Samirov Baku");
// // console.log(person.fullName);
// person.SetFullname("Samir Samirov Baku");
// console.log(person.fullName);


// const person = {
//     name:"",
//     set Name(ad){
//         if(ad.length>2){
//             this.name=ad.toUpperCase();
//         }
//         else if(ad.trim().length>2){
//             this.name=ad.trim().toUpperCase();
//         }
//         else{
//             console.log("Ad 2 herfeden az ola bilmez");
//         }
//     },

// }

// person.Name="Samir";
// console.log(person.name);


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// myFather.nationality="Aze";
// console.log(myFather.nationality);


function Person(first, last, age, eye,nationality) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality=nationality;
  }
  
  Person.nationality = "English";
  
  const myFather = new Person("John", "Doe", 50, "blue","English");
  const myMother = new Person("Sally", "Rally", 48, "green");

  console.log(myFather)