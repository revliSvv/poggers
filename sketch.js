let numbers = prompt('Enter the numbers you want to compare, seperated by spaces.');
var seperateNumbers;
var answerArray = [];
var setting = 0;

function setup() {
  seperateNumbers = numbers.split(' ');
}

function draw() {
  while (seperateNumbers != undefined) {
    compareNumbers();
    seperateNumbers = undefined;
  }
}

function compareNumbers() {
  for(var q = 0; q < seperateNumbers.length; q++ ) {
    
    console.log(seperateNumbers[q]);
  }

  console.log('Original list inputted: ' + seperateNumbers);
  console.log('Reformatted list: ', seperateNumbers.sort(function(a, b) {
    return a-b;
}));
}