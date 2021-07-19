let main_div = document.getElementById("main");

function collectProducts() {
    function ConstructDummy(n, i, p, b) {
        this.name = n;
        this.image = i;
        this.price = p;
        this.brand = b;
        // this.button = btn;
    }

    var neck = new ConstructDummy("Pearl Long Necklace", "https://bulbandkey.com/blog/wp-content/uploads/2020/07/il_fullxfull.1621467162_r0kw.jpg", 3000,"Pearl Necklace" )
    var earing = new ConstructDummy("Round Hoop Earrings", "https://bulbandkey.com/blog/wp-content/uploads/2020/07/round-hoop-earrings-with-stone-drop.jpg", 5000,"Hoop Earrings" )
    var braslate = new ConstructDummy("A minimalist bracelet", "https://bulbandkey.com/blog/wp-content/uploads/2020/07/eManco-Not-Darken-316L-Stainless-Steel-Bracelets-for-women-Adjustable-Chain-Charm-Bracelets-women-Minimalist-Bracelet-3.jpg", 2000,"Mini Brace" )
    var ring = new ConstructDummy("Cocktail Rings", "https://bulbandkey.com/blog/wp-content/uploads/2020/07/9da55e7f838ba8655bb2c8c0db4194b7.jpg", 1000,"Special Ring" )
    var neck2 = new ConstructDummy(" Necklace", "https://bulbandkey.com/blog/wp-content/uploads/2020/07/0_FNjWyp5mSm46Qq0M.png", 12000,"Special Necklace" )
    var diaStuds = new ConstructDummy("Diamond Studs", "https://bulbandkey.com/blog/wp-content/uploads/2020/07/DS-PERFECT-STUDS-1000x1000.jpg", 8000,"Dia Studs" )
     var GoldBand = new ConstructDummy("Gold Band", "https://www.kuberbox.com/blog/wp-content/uploads/2020/11/solitare-ring-gold-band-2.png", 5000,"Mini Brace" )
    var neck3 = new ConstructDummy("Special necklace", "data:image/jpeg;base64,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", 15000,"Special Necklace" )
    var earing2 = new ConstructDummy("Diamond Earing", "https://www.kuberbox.com/blog/wp-content/uploads/2020/11/neck-jewellry.png", 10000,"Hoop Earrings" )

    let arr = [];
    arr.push(neck);
    arr.push(earing);
    arr.push(braslate);
    arr.push(ring);
    arr.push(neck2);
    arr.push(diaStuds);
    arr.push(GoldBand);
    arr.push(neck3);
    arr.push(earing2);

    if(localStorage.getItem('jewel') == null){
        localStorage.setItem('jewel', JSON.stringify(arr));
    }
}
collectProducts()

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
    let btn = document.createElement("button");
    btn.innerText = "Add to cart"
    btn.addEventListener("click",function () {
        addToCart(el);
    })
    p_div.append(img, name, price_p, brand_p, btn)
    div.append(p_div);
    main_div.append(div);
}

function showData(d) {
    let data = d
    main_div.innerHTML = null;

    data.forEach(function (el) {
        createAllElement(el);
    })
}


showData(JSON.parse(localStorage.getItem('jewel')));

function filterByBrand() {
    let brand = document.getElementById('brand').value;
    let data = JSON.parse(localStorage.getItem('jewel'));
    console.log(brand == data[i]["brand"])
    let f = true;
    for (var i = 0; i < data.length; i++) {
        if (brand == data[i]) {
            showData(data);
            f = false;
        }
    }
    if (f) { alert("sorry this brand is not available")}
    
    
}


function filterByPriceHtoL(){
    let data = JSON.parse(localStorage.getItem('jewel'));
    main_div.innerHTML = null;
    data.sort(function (a, b) {
        return b.price - a.price;
     })
showData(data);
    
}

function filterByPriceLtoH(){
    let data = JSON.parse(localStorage.getItem('jewel'));
    main_div.innerHTML = null;
    data.sort(function (a, b) {
        return a.price - b.price;
     })
showData(data);
    
}

function addToCart(obj){
    let arr;

    arr = localStorage.getItem('cart');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('cart'));
    }
    // console.log(arr[i].name, obj.name)
    
    arr.push(obj);
    localStorage.setItem('cart', JSON.stringify(arr));
    
}

function cartPage() {
    window.location.href = "cart.html"
}