const searchBar = document.getElementById('searchBar');
let data = [];

const displayItems = (products) => {

    const htmlString = products.filter(product => product.category == 1)
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
                                <p>${final_price}</p>
                                <img src="../images/cart-plus-solid.svg" class="cart-plus">
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('')

    items.innerHTML = htmlString


    const htmlString2 = products.filter(product => product.category == 2)
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


    const htmlString3 = products.filter(product => product.category == 3)
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


    const htmlString4 = products.filter(product => product.category == 4)
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


    const htmlString5 = products.filter(product => product.category == 5)
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


    const htmlString6 = products.filter(product => product.category == 6)
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


    const htmlString7 = products.filter(product => product.category == 7)
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
    if (e.target.value) {
        title.classList.add('hide')
        title2.classList.add('hide')
        title3.classList.add('hide')
        title4.classList.add('hide')
        title5.classList.add('hide')
        title6.classList.add('hide')
        title7.classList.add('hide')
        const searchProducts = e.target.value.toLowerCase();
        const filteredProducts = data.filter((product) => {
            return (product.name.toLowerCase().includes(searchProducts))
        })
        displayItems(filteredProducts)
    }
    else {
        title.classList.remove('hide')
        title2.classList.remove('hide')
        title3.classList.remove('hide')
        title4.classList.remove('hide')
        title5.classList.remove('hide')
        title6.classList.remove('hide')
        title7.classList.remove('hide')
    }
})

const loadCharacters = async () => {
    try {
        const res = await fetch('https://rodrigo-moya.herokuapp.com/api/product');
        data = await res.json();

        displayItems(data)
    } catch (err) {
        console.error(err);
    }
};

loadCharacters();
