





export function renderProduct(product){
const li = document.createElement('li');
const id = document.createElement('p');
const name = document.createElement('p');
const image = document.createElement('img');
const description = document.createElement('p');
const category = document.createElement('p');
const price = document.createElement('p');
const button = document.createElement('button');

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

button.textContent = 'Add To Cart';
li.appendChild(button);

return li;
}