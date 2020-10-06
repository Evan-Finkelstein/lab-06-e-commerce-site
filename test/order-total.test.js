import { orderTotal } from '../utils.js';
import { cart } from '../data.js'
const test = QUnit.test;

test('should return 18 when passed 3 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2011.35
    ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = orderTotal(cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
})
