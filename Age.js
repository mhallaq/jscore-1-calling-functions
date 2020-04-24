function birthYear(Age) {
  var thisYear = new Date();
  thisYear = thisYear.getFullYear() - Age;
  return thisYear;
}
function inputData(age, name) {
  var sentence;
  sentence = `Welcome ${name} according to the entererd age ${age} you were born in ${birthYear(
    age
  )} `;
  console.log(sentence);
  return sentence;
}

inputData(35, "Mohammed");
