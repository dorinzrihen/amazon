//cart
const updateCart = document.getElementsByClassName('update-add-to-cart');

for(let i = 0;i< updateCart.length; i++){
    updateCart[i].addEventListener('click', function(){
        const cartValue = document.querySelector('.cart__number');
        let CurrentValue = parseInt(cartValue.innerHTML);
        cartValue.innerHTML = CurrentValue +=1;
    });
}

