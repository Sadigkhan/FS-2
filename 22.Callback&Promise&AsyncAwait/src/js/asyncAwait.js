// Sinxronluq
// function topla(a, b) {
//     return a + b;
//   }

//   function Vurma(a, b) {
//     return a * b;
//   }

//   var num1 = 5;
//   var num2 = 3;

//   var cem = topla(num1, num2); // İlk işlevi çağır ve sonucu al
//   console.log('Cem:', cem);

//   var hasil = Vurma(num1, num2); // İkinci işlevi çağır ve sonucu al
//   console.log('Hasil:', hasil);

// //asinxronluq

// function topla(a, b, callback) {
//     setTimeout(function() {
//       var netice = a + b;
//       callback(netice);
//     }, 1000); // 1 saniye gecikme 
//   }



//   function vurma(a, b, callback) {
//     setTimeout(function() {
//       var netice = a * b;
//       callback(netice);
//     }, 2000); // 2 saniye gecikme 
//   }

//   var num1 = 5;
//   var num2 = 3;

//   topla(num1, num2, function(cemNeticesi) {
//     console.log('Toplam:', cemNeticesi);
//   });

//   vurma(num1, num2, function(hasilNeticesi) {
//     console.log('Hasil:', hasilNeticesi);
//   });


// // bir funkisiyanin asinxron teyin etmek  ucun async yaziriq
// // async yazdigimiz zaman bu funksiya mutleq promise qaytarir

// async function myAsyncFunction() {
//     // asinxronluq burada baslayir
//     console.log("asinxronluq basladi")
//     return "Netice olaraq promise qayidir"; // Bu netice bir Promise qaytarir
// }

// myAsyncFunction().then(alert); // Netice

// // async funksiyalarin icinde await yazdigimiz zaman funksiya promise qaytarmalidir
// // await yazdigimiz zaman funksiya bitene qeder kodlarin islemesini dayandirir



// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {   // resolveAfter2Seconds funksiyasi promise qaytarir 
//                                         //asagidaki kod blokunda await yazdigimiz ucun bu funksiya promise qaytarmalidir
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result); // result 2 saniye sonra resolved olur, ve ekrana resolved yazilir.
//                         //await yazdigmiz funksiya tamamlanana qeder asagidaki kodlar islemir
//     console.log("asinxronluq bitdi")

//   }

//   asyncCall();



const listOfIngredients = [];
// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//       console.log(response)
//       const data = await response.json();
//       console.log(data)
//       listOfIngredients.push(data);
//       console.log(listOfIngredients);
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }

//   fetchData();


// function fetchDataWithPromise(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (response.ok) {
//                    return response.json();
//                 } else {
//                     reject(new Error('Failed to fetch data'));
//                 }
//             })
//             .then(data => {
//                 resolve(data)
//                 listOfIngredients.push(data);
//                 console.log(listOfIngredients);
//             })
//             .catch(error => reject(error));
//     });
// }
// fetchDataWithPromise("https://jsonplaceholder.typicode.com/posts/1")




console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000);
console.log(3)
setTimeout(() => {
    console.log(4)
    setTimeout(() => {
        console.log(5)
    }, 1000);
    new Promise((resolve, reject) => {
        console.log(6)
        resolve()
    }).then(() => {
        console.log(7)
    })
}, 0);
new Promise((resolve, reject) => {
    console.log(8)
    resolve()
}).then(() => {
    console.log(9)
})
console.log(10)
//Tural 1,3,4,5,6,7,2,8,9
//Qafar 1,3,4,8,9,7,5,6,2
//Ramiz 1,3,4,2,8,9,5,6,7
//Vidadi 1,3,2,4,5,6,7,9,8
//Huseyn 1,2,3,4,5,6,7,8,9
//Rahib 1,3,2,4,5,6,7,8,9
//Ruslan-Passsssssss
//Naile-Tural
//Rehimexanim - 1,3,4,6,7,2,5,8,9
//Samir 1,3,4,9,8,5,6,7,2


//1,3,8,9,4,6,7,2,5
