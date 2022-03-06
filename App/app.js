const items = document.getElementById('items');
const items2 = document.getElementById('items2');
const items3 = document.getElementById('items3');
const items4 = document.getElementById('items4');
const items5 = document.getElementById('items5');
const items6 = document.getElementById('items6');
const items7 = document.getElementById('items7');
const searchBar = document.getElementById('searchBar');
let data = [];

const displayItems = (products) => {

    const htmlString = products.filter(xd => xd.category == 1)
        .map((product) => {

            let final_price = parseFloat(product.price - (product.price * (product.discount / 100)))

            return ` 
                <div class="col-12 mb-3 col-md-3">
                    <div class="card">
                        <img src="${product.url_image}" class="card-img-top">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <hr>
                            <div class="row" id="card-price">
                                <p>${final_price}</p>
                                <img src="../images/cart-plus-solid.svg" class="cart-plus">
                            </div>
                        </div>
                    </div>
                </div>`;

        }).join('')



    items.innerHTML = htmlString

    const htmlString2 = products.filter(xd => xd.category == 2)
        .map((product) => {

            let final_price = product.price - (product.price * (product.discount / 100))

            return ` 
            <div class="col-12 mb-3 col-md-3">
                <div class="card">
                    <img src="${product.url_image}" class="card-img-top">
                    <div class="card-body">
                        <h5>${product.name}</h5>
                        <hr>
                        <div class="row" id="card-price">
                            <p>$${final_price}</p>
                            <img src="../images/cart-plus-solid.svg" class="cart-plus">
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

    items2.innerHTML = htmlString2

    const htmlString3 = products.filter(xd => xd.category == 3)
        .map((product) => {

            let final_price = product.price - (product.price * (product.discount / 100))

            return ` 
            <div class="col-12 mb-3 col-md-3">
                <div class="card">
                    <img src="${product.url_image}" class="card-img-top">
                    <div class="card-body">
                        <h5>${product.name}</h5>
                        <hr>
                        <div class="row" id="card-price">
                            <p>$${final_price}</p>
                            <img src="../images/cart-plus-solid.svg" class="cart-plus">
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

    items3.innerHTML = htmlString3

    const htmlString4 = products.filter(xd => xd.category == 4)
        .map((product) => {

            let final_price = product.price - (product.price * (product.discount / 100))

            return ` 
                <div class="col-12 mb-3 col-md-3">
                    <div class="card">
                        <img src="${product.url_image}" class="card-img-top">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <hr>
                            <div class="row" id="card-price">
                                <p>$${final_price}</p>
                                <img src="../images/cart-plus-solid.svg" class="cart-plus">
                            </div>  
                        </div>
                    </div>
                </div>`;
        }).join('');



    items4.innerHTML = htmlString4

    const htmlString5 = products.filter(xd => xd.category == 5)
        .map((product) => {

            let final_price = product.price - (product.price * (product.discount / 100))

            return ` 
                <div class="col-12 mb-3 col-md-3">
                    <div class="card">
                        <img src="${product.url_image}" class="card-img-top">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <hr>
                            <div class="row" id="card-price">
                                <p>$${final_price}</p>
                                <img src="../images/cart-plus-solid.svg" class="cart-plus">
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('');



    items5.innerHTML = htmlString5

    const htmlString6 = products.filter(xd => xd.category == 6)
        .map((product) => {

            let final_price = product.price - (product.price * (product.discount / 100))

            return ` 
                <div class="col-12 mb-3 col-md-3">
                    <div class="card">
                        <img src="${product.url_image}" class="card-img-top">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <hr>
                            <div class="row" id="card-price">
                                <p>$${final_price}</p>
                                <img src="../images/cart-plus-solid.svg" class="cart-plus">
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('');



    items6.innerHTML = htmlString6

    const htmlString7 = products.filter(xd => xd.category == 7)
        .map((product) => {

            let final_price = product.price - (product.price * (product.discount / 100))

            return ` 
                <div class="col-12 mb-3 col-md-3">
                    <div class="card">
                        <img src="${product.url_image}" class="card-img-top">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <hr>
                            <div class="row" id="card-price">
                                <p>$${final_price}</p>
                                <img src="../images/cart-plus-solid.svg" class="cart-plus">
                            </div> 
                        </div>
                    </div>
                </div>`;
        }).join('');


    items7.innerHTML = htmlString7
};

searchBar.addEventListener('keyup', (e) => {
    const searchProducts = e.target.value.toLowerCase();
    const filteredProducts = data.filter((product) => {
        return (product.name.toLowerCase().includes(searchProducts))
    })
    displayItems(filteredProducts)
})

const loadCharacters = async () => {
    try {
        const res = await fetch('http://localhost:9000/api/product');
        data = await res.json();
        displayItems(data)
    } catch (err) {
        console.error(err);
    }
};

loadCharacters();



