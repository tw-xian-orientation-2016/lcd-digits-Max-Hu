function splitNumber(numberStr){
  return numberStr.match(/.{1,1}/g);
}

function getElement(numberArray,dictionary){
  var charNumbers = [];
  numberArray.forEach(function(element){
    charNumbers.push(dictionary[parseInt(element)]);
  });
  return charNumbers;
}
