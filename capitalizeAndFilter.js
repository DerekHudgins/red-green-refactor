export const capitalizeAndFilter = (array) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const firstCharacter = array[index].charAt(0);
    if (firstCharacter.toUpperCase() !== 'F'){
      const word = array[index].charAt(0).toUpperCase() + array[index].slice(1);
      newArray.push(word);
    }
  }
  return newArray;
};
