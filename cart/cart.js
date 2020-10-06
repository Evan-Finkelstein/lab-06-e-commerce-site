import { cart, inventory } from '../data.js';
import { orderTotal } from '../utils.js';
import { renderCart } from './render-cart.js';

const table = document.querySelector('table');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const tr = renderCart(item);

    table.appendChild(tr);    
}


const total = orderTotal(cart, inventory);
const totalCell = document.querySelector('.total');
totalCell.textContent = `Total: $${total}`;