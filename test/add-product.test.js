import { addProduct } from '../local-storage-utils.js';

const test = QUnit.test;



test('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newItem = {
        id: 'a',
        name: 'b',
        image: 'c',
        description: 'd',
        category: 'e',
        price: 1.00,
    };
    const expected = [
        {
        id: 'soup-for-my-family',
        name: 'Soup for my family',
        image: 'soup-for-my-family.png',
        description: 'Soup to feed your family!',
        category: 'weapon',
        price: 1.00,
    },{
        id: 'apple',
        name: 'Apple',
        image: 'apple.png',
        description: 'Apple with a bite taken out of it.',
        category: 'weapon',
        price: 5.00,  
    },{
        id: 'shield',
        name: 'Homemade Shield',
        image: 'shield.png',
        description: 'Used to offensively block others attacks. This is a weapon because reasons.',
        category: 'weapon',
        price: 1.23,  
    },{
        id: 'water-bottle',
        name: 'Empty water bottle',
        image: 'water-bottle.png',
        description: 'Used to hold water. Now the deadliest weapon in your arsenal.',
        category: 'weapon',
        price: 13.12,  
    },{
        id: 'milk-shake',
        name: 'Milk shake',
        image: 'milk-shake.png',
        description: 'Delicious and high calorie. Absolutely do not throw on fascists.',
        category: 'weapon',
        price: 1000.00,  
    },{
        id: 'a',
        name: 'b',
        image: 'c',
        description: 'd',
        category: 'e',
        price: 1.00,
    },
    ];
    
        
    console.log(expected)

    
    addProduct(newItem);

    const localStorageAfter = JSON.parse(localStorage.getItem('PRODUCTS'));
   console.log(localStorageAfter, expected)
    expect.deepEqual(expected, localStorageAfter);
});

