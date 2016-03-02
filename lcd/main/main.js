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

function printCharNumbers(charNumbers){
  var outputChar = '';
  for (var i = 0; i < 3; i++){
    charNumbers.forEach(function(number,index){
      outputChar += number[i];
      if (index != charNumbers.length-1){
        outputChar += ' ';
      }else {
        outputChar += '\n';
      }
    });
  }
  return outputChar.substr(0,outputChar.length-1);
}
