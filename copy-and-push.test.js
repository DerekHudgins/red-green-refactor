import { copyAndPush } from './copy-and-push';

describe('copyAndPush', () => {
  it('adds item to an array and then returns array', () => {
    const numbers = [1, 2, 3];
    const result = copyAndPush(numbers, 4);

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
