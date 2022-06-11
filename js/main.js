/* Cart */
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
/* Open Cart */
cartIcon.onclick = () => {
    cart.classList.add('active');
};
/* Close Cart */
closeCart.onclick = () => {
    cart.classList.remove('active');
};

/* Cart Working JS */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready();
}

/* Remove Items From Cart */
function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[1]
        button.addEventListener('click', removeCartItem)
    }
}

/* Remove Items From Cart */
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
}