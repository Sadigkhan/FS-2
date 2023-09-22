// let first=window.document.getElementById("first")
// let second=document.getElementById("second")
// let third=document.getElementById("third")

// console.log(first)
// // console.log(second)
// // console.log(third)

// console.log(second.lastElementChild)


// setInterval(Hello)

// function Hello(){
//   console.log("Hello")
// }

// setTimeout(Hello,5000)

let menu_btn = document.querySelector("#Header .container .all .right .menu-icon-btn");
let menu_dropdown = document.querySelector("#Header .container .all .dropdown");

menu_btn.addEventListener("click", function(){
  menu_dropdown.classList.toggle("active")
})

// menu_btn.addEventListener("click", function(){
//   if(menu_dropdown.classList.contains("active")){
//     menu_dropdown.classList.remove("active")
//   }else{
//     menu_dropdown.classList.add("active")
//   }
// })

let dropdown_items = document.querySelectorAll(".dropdown-item")

dropdown_items.forEach(element => {
  element.addEventListener("click", function(){
    element.querySelector(".inner-dropdown").classList.toggle("active")
  })
})