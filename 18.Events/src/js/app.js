// let inp = document.querySelector('#inp');
// let alertDiv = document.querySelector('#alert')

// inp.addEventListener('keydown', function(e) {
//     let isActivated = e.getModifierState("CapsLock");

//     if(isActivated){
//         alertDiv.style.display = 'block';
//     }else{
//         alertDiv.style.display = 'none';
//     }
// });

// let eye = document.querySelector('.input-div .eye-div i');
// let passwordInp = document.querySelector('#passwordInp');

// eye.addEventListener("click", function() {
//     if(passwordInp.type == "password"){
//         passwordInp.type = "text";
//         eye.className = "fa-solid fa-eye-slash";
//     }else{
//         passwordInp.type = "password";
//         eye.className = "fa-solid fa-eye";
//     }
// })

// window.onkeydown=function(event){
//     console.log(event.keyCode)
// }

// let inp = document.querySelector('#smsInp');
// let smslength = document.querySelector('.smslength #smslength');
// let smscount = document.querySelector('.smscount #smscount');

// inp.addEventListener("keyup", function(event) {
//     console.log(inp.value.length)
//     smslength.innerText = inp.value.length;
//     smscount.innerText = Math.ceil(inp.value.length / 160);
// })

let board = document.querySelector('.board');
let snake = document.querySelector('.snake');

window.onkeydown = function(event) {

    let left = window.getComputedStyle(snake, "left").left
    let top = window.getComputedStyle(snake, "top").top

    if(event.keyCode === 38){
        if(top !== "0px"){
            snake.style.top = parseInt(top) - 10 + "px";
        }
    }else if(event.keyCode === 40){
        let height = window.getComputedStyle(board, "height").height;
        let snakeheight = window.getComputedStyle(snake, "height").height;
        
        if(parseInt(top) < parseInt(height) - parseInt(snakeheight)){
            snake.style.top = parseInt(top) + 10 + "px";
        }
    }else if(event.keyCode === 37){
        if(left !== "0px"){
            snake.style.left = parseInt(left) - 10 + "px";
        }
    }else if(event.keyCode === 39){
        snake.style.left = parseInt(left) + 10 + "px";
    }
}

let click = document.querySelector('#click');

click.addEventListener("click", function(event) {
    event.preventDefault();
})