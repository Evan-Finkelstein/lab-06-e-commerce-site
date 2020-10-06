import { inventory } from '../data.js';
import { renderProduct } from './render-product.js'

const inventoryList = document.querySelector('#inventory-list');

for( let i = 0; i < inventory.length; i++){
    const product = inventory[i];
    const li = renderProduct(product);

    inventoryList.appendChild(li);
}