import { getLocalStorage  } from '../local-storage-utils.js';
import { renderProduct } from './render-product.js';

const inventoryList = document.querySelector('#inventory-list');
const  fullInventory = getLocalStorage();
for( let i = 0; i < fullInventory.length; i++){
    const product = fullInventory[i];
    const li = renderProduct(product);

    inventoryList.appendChild(li);
}