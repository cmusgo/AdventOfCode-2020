function parseInput(inputText) {
  return inputText.trim().split("\n");
}

function find_unique_characters(string) {
  var unique = "";
  for (var i = 0; i < string.length; i++) {
    if (unique.indexOf(string[i]) == -1) {
      unique += string[i];
    }
  }
  return unique;
}

function resolve1(input) {
  let total = 0;
  let group = "";
  let answers = [];

  input.forEach((element) => {
    if (element == "") {
      let completeGroup = find_unique_characters(group);
      answers.push(completeGroup);

      total += completeGroup.length;
      group = "";
    } else {
      group += element;
    }
  });

  let completeGroup = find_unique_characters(group);
  answers.push(completeGroup);

  total += completeGroup.length;

  return total;
}

function countDuplicatesByPassenger(completeGroup, numberPassengers) {
    let obj={}
    let repeats=[];
    
    for(x = 0, length = completeGroup.length; x < length; x++) {
        let l = completeGroup.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    repeats = Object.values(obj)

    return repeats.filter(n => n === numberPassengers).length;
}

function resolve2(input) {
  let total = 0;
  let group = "";

  let fullAnswers = [];
  let numberPassengers = 0;

  input.forEach((element) => {
    if (element == "") {
        fullAnswers.push({group, numberPassengers});
      if (numberPassengers == 1) {
        
        total += group.length;
      } else {
        
        total += countDuplicatesByPassenger(group, numberPassengers);
      }
      group = "";
      numberPassengers = 0;
    } else {
      group += element;
      numberPassengers += 1;
    }
  });

  //     total += totalReps;
  if (numberPassengers == 1) {
    fullAnswers.push({group, numberPassengers});
    total += group.length;
  } else {
    fullAnswers.push({group, numberPassengers});
    
    total += countDuplicatesByPassenger(group, numberPassengers);
  }

  return total;
}

const input = parseInput(inputText);
console.log("input", input);

const output = resolve1(input);
console.log("solucion 1", output);

const input2 = parseInput(inputText);

const output2 = resolve2(input2);

console.log("solucion 2", output2);
