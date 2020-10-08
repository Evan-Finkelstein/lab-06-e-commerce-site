import { orderTotal } from '../utils.js';
const test = QUnit.test;
const cart = [
        {
            id: 'soup-for-my-family',
            quantity: 3,
        },
        {
            id: 'apple',
            quantity: 2,
        },
        {
            id: 'milk-shake',
            quantity: 2,
        },
    ];
test('should return 18 when passed 3 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2013
    ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = orderTotal(cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
})
