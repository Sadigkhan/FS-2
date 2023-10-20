let productprice=document.getElementById("prod-price")
let prodcount=document.getElementById("prod-all-count")

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]))
    productprice.textContent="0";
    prodcount.textContent="0";
}else{
    let basket=JSON.parse(localStorage.getItem("basket"))
    let price=0;
    basket.forEach(item=>{
        price+=item.price*item.count
    })
    productprice.innerText=price.toFixed(2)
    prodcount.innerText=basket.length
}




fetch("db.json")
    .then(res => res.json())
    .then(data => {
        let html = " ";
        data.products.forEach(product => {
            html += `
        <div class="col-lg-3 custom-box">
        <div class="custom-card">
            <div class="img-div">
                <img src="${product.image}" alt="">
            </div>
            <div class="content">
                <h3 class="title">${product.name}</h3>
                <h2 class="price">${product.price}</h2>
            </div>
            <div class="addbasket-btn-div">
                <button data-price=${product.price} data-id="${product.id}" class="addbasket">Add to basket</button>
            </div>
        </div>
    </div>
        `
        })
        document.querySelector("#Products .container .row").innerHTML = html


        let addBasketBtns = document.querySelectorAll(".addbasket")
        // console.log(addBasketBtns)

        addBasketBtns.forEach(btn => {
            btn.addEventListener("click", function (e) {
                if (localStorage.getItem("basket") === null) {
                    localStorage.setItem("basket", JSON.stringify([]))
                }
                let basket = JSON.parse(localStorage.getItem("basket"))
                let data_id = e.target.getAttribute("data-id")
                let data_price=e.target.getAttribute("data-price")

                let exsist=basket.find(p=>p.id==data_id)

                if(exsist){
                    exsist.count++
                }else{
                    basket.push({
                        id: data_id,
                        count:1,
                        price:data_price
                    })
                }
                
                let price=0;
    basket.forEach(item=>{
        price+=item.price*item.count
    })
    productprice.innerText=price.toFixed(2)
    prodcount.innerText=basket.length
                localStorage.setItem("basket", JSON.stringify(basket))
            })
        })
    })