import { getName } from './getname';

describe('getName', () => {
  it('returns the name of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };

    const name = getName(spot);

    expect(name)
      .toEqual('spot');
  });
});
