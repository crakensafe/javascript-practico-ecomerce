const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#produtDetail");

const productDetailCloseIcon = document.querySelector(".product-detail-close")


menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)



function toogleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")

    const isAsideClose = shoppingCartContainer.classList.contains("inactive")

    if (!isAsideClose) {
        shoppingCartContainer.classList.add("inactive");
    }
}


function toogleMobileMenu(){

    const isAsideClose = shoppingCartContainer.classList.contains("inactive")

    if (!isAsideClose) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive")

}

function toogleCarritoAside(){
    const isMenuMobileClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = menuEmail.classList.contains("inactive");

    if (!isMenuMobileClose) {
        mobileMenu.classList.add("inactive");
    } 
    if (!isDesktopMenuClose) {
        desktopMenu.classList.add("inactive")
    }
    
    const isProductDetailClose = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailClose) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");

}


const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Pantalla",
    price: 1200,
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Computadora",
    price: 12000,
    image: "https://images.pexels.com/photos/13620263/pexels-photo-13620263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        //product = name, price and image => image = product.image
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    };
};

renderProducts(productList);