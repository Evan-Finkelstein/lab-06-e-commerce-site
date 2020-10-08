import { inventory } from './data.js'

const PRODUCTS = 'PRODUCTS'

export function getFromLocalStorage(key) {
const item = localStorage.getItem(key);

return JSON.parse(item);
}


export function setInLocalStorage(key, value) {
const stringyItem = JSON.stringify(value);
localStorage.setItem(key, stringyItem);
}

export function addProduct(newItem){
    const localStorageProducts = getLocalStorage();

    localStorageProducts.push(newItem);

    const stringyLocalProduct = JSON.stringify(localStorageProducts);
    localStorage.setItem(PRODUCTS, stringyLocalProduct);
}

export function getLocalStorage(){
    let localStorageProduct = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageProduct) {
        const stringyProducts = JSON.stringify(inventory);
    
        localStorage.setItem(PRODUCTS, stringyProducts);
        localStorageProduct = inventory;
    }
    
    return localStorageProduct;
    }
    
    console.log(getLocalStorage())