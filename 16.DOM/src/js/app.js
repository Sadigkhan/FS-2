// // // let body = document.getElementById("body")
// // // let body = document.getElementsByTagName("p")
// // // console.log(typeof body)
// // // let i = 1;
// // // body.forEach(element => {
// // //   element.innerText=i;
// // //   i++
// // // });
// // // console.log(body)
// // // for (element of body) {
// // //   element.innerText = i
// // //   i++
// // // }

// // // let p=document.getElementsByClassName("rahib")
// // // console.log(p)

// // // let names=document.getElementsByName("fs2")
// // // console.log(names)

// // // let p=document.querySelectorAll(".rahib")
// // // let pTag=document.getElementsByTagName("p")
// // // // console.log(p)

// // // // for(element of p){
// // // //   console.log(element)
// // // // }

// // // p.forEach((element)=>{
// // //   console.log(element)
// // // })



// let img1=document.getElementById("first")
// let img2=document.getElementById("second")
// let img3=document.getElementById("third")
// let img3Src=img3.src

// img1.addEventListener("mouseover",function(e){
//   img3.src=e.target.src
// })
// img1.addEventListener("mouseout",function(e){
//   img3.src=img3Src
// })


// let leyla=document.getElementById("leyla")
// leyla.style.transition="0.7s"

// leyla.addEventListener("mouseover",function(e){
// leyla.style.color="red"
// })

// leyla.addEventListener("mouseout",function(e){
//   leyla.style.color="black"
//   })

// // let mainDiv=document.getElementById("main")

// // function ChangeImage(e){
// //   img3.src=e.src
// // }

// // let h1=document.createElement("h1")


// // function ElementAdder(){
// //   main.appendChild(h1)
// //   h1.innerText="Hello Tort yeyenler"

// // }

// // function TextAdder(){
// //   h1.setAttribute("class","text")

// // }

// // function ClassRemover(){
// //   h1.classList.remove("text")
// // }

// // function ElementRemover(){
// //   main.removeChild(h1)
// // }

// // function AttrRemover(){
// //   h1.removeAttribute("class")
// // }


// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {

//   console.log(x.elements[i])
//   // text += x.elements[i].value + "<br>";
// }


// let inp=document.getElementById("inp")

// inp.addEventListener("change",function(e){
// console.log(e.target.value)
// })




let red=document.getElementById("Red")
let yellow=document.getElementById("Yellow")
let green=document.getElementById("Green")


red.addEventListener("click",function(e){
  e.stopPropagation()
  console.log("Red")
})
yellow.addEventListener("click",function(e){
  e.stopPropagation()
  console.log("Yellow")
})
green.addEventListener("click",function(e){
  e.stopPropagation()
  console.log("Green")
})


