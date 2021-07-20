export const capitalizeAndFilter = (array) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const firstCharacter = array[index].charAt(0);
    if (firstCharacter.toUpperCase() !== 'F'){
      const word = array[index].toUpperCase();
      newArray.push(word);
    }
  }
  return newArray;
};
