
import { renderProduct } from '../products/render-product.js';

const test = QUnit.test;

test('should take in a product and return an li with the appropariate contents', (expect) => {
    const product = {
        id: 'soup-for-my-family',
        name: 'Soup for My Family',
        image: 'soup-for-my-family.png',
        description: 'Soup to feed your family!',
        category: 'weapon',
        price: 13.12,
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = '<li><p class="id">soup-for-my-family</p><p class="name">Soup for My Family</p><img src="../assets/soup-for-my-family.png"><p class="description">Soup to feed your family!</p><p class="category">weapon</p><p class="price">$13.12</p><button>Add To Cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(product);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
