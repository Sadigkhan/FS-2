//call apply bind
//DRY - Don't Repeat Yourself

// let human={
//     getDetails:function(surname,adress){
//         console.log(`Name is ${this.name} and age is ${this.age} and surname is ${surname} adress is ${adress}`);
//     }
// }

// let person={
//     name:"John",
//     age:30,
//     getDetails:function(){
//         console.log(`Name is ${this.name} and age is ${this.age}`);
//     }
// }
// let person2={
//     name:"Mike",
//     age:25
// }
// person.getDetails();
// person2.getDetails();
// human.getDetails();

//call
// human.getDetails()

// human.getDetails.call(person,"Doe","USA")
//apply
// human.getDetails.apply(person2,["Doe","USA"])

//bind
// person.getDetails()

// setTimeout(person.getDetails.bind(person),3000)
// setTimeout(person.getDetails,3000)



//XMLHttpRequest - XHR

// let btn=document.querySelector("#btn");
// let outputMain=document.querySelector("#output");

// //github users api
// btn.addEventListener("click",function(){
//     let xhr=new XMLHttpRequest();
//     // console.log(xhr);
//     xhr.open("GET","https://api.github.com/users",true);
//     xhr.onload=function(){
//         if(this.status===200){
//             // console.log(this.responseText);
//             let users=JSON.parse(this.responseText);
//             console.log(users);
//             let output="";
//             users.forEach(user => {
//                 output+=`
//                     <div class="user">
//                         <img src="${user.avatar_url}" width="70" height="70">
//                         <ul>
//                             <li>ID: ${user.id}</li>
//                             <li>Login: ${user.login}</li>
//                         </ul>
//                     </div>
//                 `;
//             });
//             outputMain.innerHTML=output;
//         }
//     }
//     xhr.send()
   
// });



console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000)

function Foo(){
    console.log(3)
    setTimeout(() => {
        console.log(4)
    }, 0)
    
}
Foo()
console.log(7)

// function Foo2(){
//     console.log(8)
//     setTimeout(() => {
//         console.log(9)
//     }, 0)
//     new Promise((resolve, reject) => {
//         console.log(10)
//         resolve()
//     }).then(() => {
//         console.log(11)
//     })
// }
// Foo2()