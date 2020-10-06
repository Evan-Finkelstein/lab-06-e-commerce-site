import { calcLineItem } from '../utils.js';

const test = QUnit.test;

test('should return 18 when passed 3 and 6', (expect) => {
    const quanity = 3.00;
    const price = 6.00;
   

    //Arrange
    // Set up your arguments and expectations
    const expected = 18.00;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(quanity, price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
