// var inputText = `
// 16
// 10
// 15
// 5
// 1
// 11
// 7
// 19
// 6
// 12
// 4
// `
// var inputText = `
// 28
// 33
// 18
// 42
// 31
// 14
// 46
// 20
// 48
// 47
// 24
// 23
// 49
// 45
// 19
// 38
// 39
// 11
// 1
// 32
// 25
// 35
// 8
// 17
// 7
// 9
// 4
// 2
// 34
// 10
// 3
// `;

function parseInput(inputText) {
  return inputText
    .trim()
    .split("\n")
    .map((n) => parseInt(n))
    .sort((a, b) => a - b);
}

const initial = 0;

function getAdaptersDiff(input) {
  let oneArray = [];
  let threeArray = [];

  if (input.includes(initial + 1)) {
    oneArray.push(initial);
  }

  input.forEach((element) => {
    if (input.includes(element + 1)) {
      oneArray.push(element);
    } else {
      if (input.includes(element + 3)) {
        threeArray.push(element);
      }
    }
  });
  threeArray.push(Math.max(...input) + 3);
  return {
    oneArray,
    threeArray,
  };
}

function resolve1(input) {
  const { oneArray, threeArray } = getAdaptersDiff(input);
  return oneArray.length * threeArray.length;
}

function resolve2(input) {
  const newInput = [0].concat(input).concat(Math.max(...input) + 3);

  let diferences = [];
  for (let index = 0; index < newInput.length - 1; index++) {
    diferences.push(newInput[index + 1] - newInput[index]);
  }

  const arrayJoined = diferences
    .join("")
    .split("3")
    .filter((n) => n.length >= 2);

  let count1 = arrayJoined.filter((n) => n == "11").length;
  let count2 = arrayJoined.filter((n) => n == "111").length;
  let count3 = arrayJoined.filter((n) => n == "1111").length;

  return Math.pow(2, count1) * Math.pow(4, count2) * Math.pow(7, count3);
}
const input = parseInput(inputText);
console.log(input);
const output = resolve1(input);
console.log("solucion 1", output);

const input2 = parseInput(inputText);

const output2 = resolve2(input2);

console.log("solucion 2", output2);
