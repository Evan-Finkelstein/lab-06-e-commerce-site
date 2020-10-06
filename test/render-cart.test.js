


import { renderCart } from '../cart/render-cart.js';

const test = QUnit.test;

test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {
    const cartItem = {
        id: 'apple',
        quantity: 3.0,
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = "<tr><td>Apple</td><td>$5</td><td>3</td><td>$15</td></tr>"
    ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCart(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});