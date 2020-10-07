import { getFromLocalStorage, setInLocalStorage } from '../local-storage-utils.js';

const test = QUnit.test;

test('it should correctly stringify and set things in local storage', function(assert) {

    //Arrange
    // Set up your parameters and expectations
    const sammy = {
        id: 'meow',
        weight: 4,
        color: 'calico'
    }
    const KEY = 'CAT'

    //Act 
    // Call the function you're testing and set the result to a const
        setInLocalStorage(KEY, sammy)
    const newSammy = getFromLocalStorage(KEY)
    const localStorageSammy = JSON.parse(localStorage.getItem(KEY));

    //Assert
    // Make assertions about what is expected versus the actual result

    // all three of these (sammy, newSammy, localStorageSammy) should be the same if we did our work right
    assert.deepEqual(sammy, newSammy);
    assert.deepEqual(newSammy, localStorageSammy)
});