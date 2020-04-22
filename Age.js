var thisYear = new Date();

function birthYear(Age) {
  year = thisYear.getFullYear() - Age;
  console.log(year);
  return year;
}
function Input_data(age, name) {
  var sentence;
  sentence = `Welcome ${name} according to the entererd age ${age} you were born in ${birthYear(
    age
  )} `;
  console.log(sentence);
  return sentence;
}

Input_data(35, "Mohammed");
