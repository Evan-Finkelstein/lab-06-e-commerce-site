export function getFromLocalStorage(key) {
    // remember, we need to parse any values get from local storage
const item = localStorage.getItem(key);

return JSON.parse(item)
}

// this function will not return anything
export function setInLocalStorage(key, value) {
    // remember, we need to stringify any values we want to set into local storage
const stringyItem = JSON.stringify(value);
localStorage.setItem(key, stringyItem);
}