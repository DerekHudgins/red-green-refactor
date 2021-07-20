export const capitalizeAndFilter = (array) => {
  const upperCaseArry = array.map(str => capitalizeString(str));
  const filteredArray = filter(upperCaseArry);
  return filteredArray;
};

const capitalizeString = (string) => string.toUpperCase();

const filter = (ary) => {
  const newArray = [];
  ary.map(string => {
    if(string[0] != 'F') {
      newArray.push(string);
    }
  });  
  return newArray;
};

