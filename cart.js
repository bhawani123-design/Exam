
let main_div = document.getElementById("main");
let totalPrice = document.getElementById("h33");
let pr = 0;
function createAllElement(el) {

    let div = document.createElement("div");
    div.setAttribute("id", "gridDiv")
    let p_div = document.createElement("div");
    let name = document.createElement("p");
    name.textContent = el.name;
    let img = document.createElement("img");
    img.src = el.image;
    
    img.setAttribute("id", "image")
    
    let price_p = document.createElement("p");
    price_p.textContent = el.price;
    let brand_p = document.createElement("p");
    brand_p.textContent = el.brand;
    p_div.append(img, name, price_p, brand_p)
    div.append(p_div);
    main_div.append(div);
    pr += Number( el.price);
    totalPrice.textContent = `Total Price of Product is: ${pr}`;
}

function fatchData() {
     let data = JSON.parse(localStorage.getItem('cart'));
    main_div.innerHTML = null;
     data.forEach(function (el) {
        createAllElement(el);
    })
}
fatchData()

let promoInput = document.getElementById("promoInput");
let promoButton = document.getElementById("promoButton");
c = 0;
function applyPromo() {
    if (promoInput.value == "masai30") {
        c++;
        let final_price = pr - (pr * (30 / 100))
        if (c == 1) {
            pr = final_price
            totalPrice.innerHTML = `Total Price of Product after apply the Promo code is: ${pr}`
        }
    }
    promoInput.value = null;
}


function checkOut() {
    window.location.href = "checkout.html"
}