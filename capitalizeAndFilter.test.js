import { capitalizeAndFilter } from './capitalizeAndFilter';


describe('capitalize and filter', () => {
  it('takes an array of strings, capitalizes the first letters, and filters out any string that starts with the letter F.', () => {
    const array = ['hello', 'where', 'am', 'i', 'fred'];
    const editedArray = capitalizeAndFilter(array);
    expect(editedArray).toEqual(['Hello', 'Where', 'Am', 'I']);
  });
}); 
