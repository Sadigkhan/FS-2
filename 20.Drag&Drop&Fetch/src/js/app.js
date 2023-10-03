// const dropArea = document.getElementById("drop-area");
// const video=document.getElementById("video")
// const output=document.getElementById("output")
// // let videoSrc=video.src

// dropArea.addEventListener("dragover", (event) => {
//     event.preventDefault();
// });

// dropArea.addEventListener("drop", (event) => {
//     event.preventDefault();

//     const files = event.dataTransfer.files;

//     if (files.length > 0) {
//         const file = files[0];
//         // console.log(file.type)
//         if (file.type.startsWith("image/")) {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 const image = new Image();
//                 image.src = event.target.result
//                 image.style.maxWidth = "100%"
//                 image.style.maxHeight = "100%"
//                 dropArea.innerHTML = " "
//                 dropArea.appendChild(image)
//             }
//             reader.readAsDataURL(file);

//         }
//         else if(file.type==="video/mp4"){
//             // console.log("video")

//             const objectURL = URL.createObjectURL(file);
//             console.log(objectURL)
//                 video.src = objectURL;
//                 video.play();
//         }else if(file.type==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
//             const reader = new FileReader();
//             reader.onload=(event)=>{
//                 // console.log(event.target.result)
//                 const data=new Uint8Array(event.target.result);
//                 // console.log(data)
//                 const workbook=XLSX.read(data,{type:"array"})
//                 // console.log(workbook)
//                 const sheetName=workbook.SheetNames[0]
//                 // console.log(sheetName)
//                 const sheet=workbook.Sheets[sheetName]
//                 // console.log(sheet)
//                 const htmlTable=XLSX.utils.sheet_to_html(sheet)

//                 output.innerHTML=htmlTable
//                 // for(let sheetName of workbook.SheetNames){
//                 //     let sheet=XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
//                 //     console.log(sheet)
//                 // }
//             }
//             reader.readAsArrayBuffer(file);
//         }
//     }

// })

let output=document.getElementById("output")
let button=document.getElementById("fetch")

button.addEventListener("click",()=>{
    fetch("https://randomuser.me/api/?results=500")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data.results)
        data.results.forEach((element)=>{
            output.innerHTML+=
            `
            <div class="card">
                 <img src="${element.picture.large}" alt="">
               <div class="card-body">
                   <h3>${element.name.title} ${element.name.first} ${element.name.last}</h3>
                    <p>${element.email}</p>
                   <p>${element.phone}</p>
                   <p>${element.location.city}</p>
                </div>
            </div>`
        })
    
    })
   
})