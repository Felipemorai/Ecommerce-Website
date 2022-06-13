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
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons);
    for (var i = 0; i < reomveCartButtons.length; i++) {
        var button = reomveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

/* Remove Items From Cart */
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
}

/* Update Total */
function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var quantity = quantityElement.value
        total = total + price * quantity;
    }
}