
import { setCart } from '../cart-functions.js';

export const CART = 'CART';

export function renderProduct(product){
const li = document.createElement('li');
const id = document.createElement('p');
const name = document.createElement('p');
const image = document.createElement('img');
const description = document.createElement('p');
const category = document.createElement('p');
const price = document.createElement('p');
const button = document.createElement('button');
// const numberSelector = document.createElement('select');
// const option1 = document.createElement('option');
// const option2 = document.createElement('option');
// const option3 = document.createElement('option');

id.classList.add('id');
id.textContent = product.id;
li.appendChild(id);

name.classList.add('name');
name.textContent = product.name;
li.appendChild(name);

image.src = `../assets/${product.image}`;
li.appendChild(image);

description.classList.add('description');
description.textContent = product.description;
li.appendChild(description);

category.classList.add('category');
category.textContent = product.category;
li.appendChild(category);

price.classList.add('price');
price.textContent =`$${product.price}`;
li.appendChild(price);

// li.appendChild(numberSelector);
// option1.value = 1;

// option2.value = 2;

// option3.value = 3;

// numberSelector.appendChild(option1);
// numberSelector.appendChild(option2);
// numberSelector.appendChild(option3);


button.textContent = 'Add To Cart';
// const option = numberSelector.option.value
button.addEventListener('click', () => {
setCart(product);
})


li.appendChild(button);

return li;
}