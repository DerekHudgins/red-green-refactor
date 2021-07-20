import fetch from 'node-fetch';

export const fetchQuotes = async () => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/characters/leela');
  const quotes = await res.json();
  return {
    name: quotes[0].character,
    text: quotes[0].quote,
    image: quotes[0].image,
  };
};
