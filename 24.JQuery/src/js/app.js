// $(document).ready(function(){
//     $("button").click(function(){
//       $("#demo").hide();
//     });
//   });

// $(document).ready(function(){
//     // $("button").click(function(){
//     //   $("*").hide();
//     // });

//     let elem=$("p.intro")
//     // console.log(elem)
//     // elem.forEach(element => {
//     //         console.log(element)
//     // });
//     console.log(elem.length)

//     for(let i=0;i<elem.length; i++){
//         console.log(elem[i])
//     }
//   });


// alert("<bold>Salam</bold>")

$(document).ready(function(){
    $("#btn1").click(function(){
        $('.container').text($('#test').html())
    //   alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        $('.container').html($('#test').html())
    });
  });