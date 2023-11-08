const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];
// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
    console.log(capitalizeFirstLetter('anTHoNY'));
    console.log(capitalizeFirstLetter('jaMeS'));
    console.log(capitalizeFirstLetter('MIChaEl'));
    console.log(capitalizeFirstLetter('jeNNIFeR'));
    console.log(capitalizeFirstLetter('JoHn'));
    console.log(capitalizeFirstLetter('ChrISTiana'));
    console.log(capitalizeFirstLetter('MARia'));
// - Return the original array but with all names properly typed

console.log(people.map(capitalizeFirstLetter));

