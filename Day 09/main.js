// var inputText = `
// 35
// 20
// 15
// 25
// 47
// 40
// 62
// 55
// 65
// 95
// 102
// 117
// 150
// 182
// 127
// 219
// 299
// 277
// 309
// 576
// `
const preamble = 25;

function parseInput(inputText) {
  return inputText
    .trim()
    .split("\n")
    .map(n => parseInt(n)
    );
}


function resolve1(input) {
    let i=preamble;
    let numberToTest=0;

    do {
        const group = input.slice(i-preamble, i)
        numberToTest = input[i]
        if (testSumBefore(numberToTest, group))
        {
            break;
        }
        i++
    } while (i<input.length);

    return numberToTest;
}

function testSumBefore(numberToTest, group)
{
    let sums = [];

    for (let i = 0; i < group.length; i++) {
      for (let j = 0; j < group.length; j++) {
        if (!sums.includes(group[i] + group[j])) {
          sums.push(group[i] + group[j]);
        }
      }
    }
  
    return (!sums.includes(numberToTest));
}

function sumGroups(input, numberToFind) {

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j <= input.length; j++) {
        const groups = input.slice(i, i + j);
  
        if (groups.length > 0) {
          const sum = groups.reduce((acc, num) => acc + num);
  
          if (sum === numberToFind) {
            return Math.min(...groups) + Math.max(...groups);
          }
        }
      }
    }
  }

function resolve2(input) {
    const numberToTest = resolve1(input);

    return sumGroups(input, numberToTest);
}

const input = parseInput(inputText);
console.log(input);
const output = resolve1(input);
console.log("solucion 1", output);

const input2 = parseInput(inputText);

const output2 = resolve2(input2);

console.log("solucion 2", output2);
