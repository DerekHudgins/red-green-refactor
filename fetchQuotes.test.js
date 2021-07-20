import { fetchQuotes } from './fetchQuotes';

describe('to return a single quote', () => {
  it('to return a single quote', async () => {
    const objectFormat = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    };

    expect(await fetchQuotes()).toEqual(objectFormat);

  });
});
