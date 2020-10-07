import { CART } from './products/render-product.js';
import { getFromLocalStorage, setInLocalStorage } from './local-storage-utils.js'
import {findById } from './utils.js'

export function clearCart(cart){
    const stringyCart = JSON.stringify(cart, true, 2)
    alert(stringyCart);
    localStorage.removeItem(CART)
    window.location.href = './thank-you.html'
    }

export function setCart( product){
        const cart2 = getFromLocalStorage(CART) || [];
        const itemsInCart = findById (cart2, product.id);
        if (itemsInCart === undefined){
            const newCartItem = {
                id: product.id,
                quantity: 1,
            }
            cart2.push(newCartItem);
        } else {
            itemsInCart.quantity++;
        }
        
        setInLocalStorage(CART, cart2);
        }
        