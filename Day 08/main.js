// const inputText = `
// nop +0
// acc +1
// jmp +4
// acc +3
// jmp -3
// acc -99
// acc +1
// jmp -4
// acc +6
// `;

function parseInput(inputText) {
  let line = -1;
  return inputText
    .trim()
    .split("\n")
    .map((instruc) => {
      const obj = instruc.split(" ");
      line += 1;
      return {
        operation: obj[0],
        argument: parseInt(obj[1].substring(1)),
        sign: obj[1].substring(0, 1),
        full: instruc,
        executed: false,
        line: line,
      };
    });
}

function resolve1(input) {
  let accumulate = 0;
  let i = 0;

  do {
    input[i].executed = true;
    if (input[i].operation == "nop") {
      i += 1;
    } else if (input[i].operation == "acc") {
      accumulate =
        accumulate +
        (input[i].sign == "+" ? input[i].argument : input[i].argument * -1);
      i += 1;
    } else {
      i =
        i + (input[i].sign == "+" ? input[i].argument : input[i].argument * -1);
    }
  } while (i < input.length && !input[i].executed);

  return {
    accumulate,
    isInfinityLoop: input[i].executed,
  };
}

function solveWithLineToChange(input, line) {
  let accumulate = 0;
  let i = 0;

  do {
    input[i].executed = true;
    if (line == i) {
      if (input[i].operation == "nop") {
        //   console.log("from nop to jmp",input[i])
        i =
          i +
          (input[i].sign == "+" ? input[i].argument : input[i].argument * -1);
        //   console.log("from nop to jmp next line",input[i])
      } else if (input[i].operation == "acc") {
        accumulate =
          accumulate +
          (input[i].sign == "+" ? input[i].argument : input[i].argument * -1);
        i += 1;
      } else {
        //   console.log("from jmp to nop",input[i])
        i += 1;
      }
    } else {
      if (input[i].operation == "nop") {
        i += 1;
      } else if (input[i].operation == "acc") {
        accumulate =
          accumulate +
          (input[i].sign == "+" ? input[i].argument : input[i].argument * -1);
        i += 1;
      } else {
        i =
          i +
          (input[i].sign == "+" ? input[i].argument : input[i].argument * -1);
      }
    }
  } while (i < input.length && !input[i].executed);

  return {
    accumulate,
    isInfinityLoop: i < input.length,
  };
}

function resolve2(input) {
  let result = resolveWithChange(input, 'jmp')
  console.log(result)
  if (!result.aborted)
    result = resolveWithChange(input,'nop')
    console.log(result)
return result.accumulate

}

function resolveWithChange(input,operation)
{
  let i = 0;
  let newInput = inicializeArray(input); //.filter(n => n.executed=false);
  const jmp = input.filter((n) => n.operation == operation);
  console.log(operation,jmp.length)

  let result = null;
  do {
    result = solveWithLineToChange(newInput, jmp[i].line);
    newInput = inicializeArray(input);
    i++;
  } while (i < jmp.length && result.isInfinityLoop);

  return {
      aborted: i<jmp.length,
      accumulate: result.accumulate,
      i:i
  }
}

function inicializeArray(arr) {
  arr.forEach((element) => {
    element.executed = false;
  });
  return arr;
}

const input = parseInput(inputText);
console.log("input", input);
const output = resolve1(input).accumulate;
console.log("solucion 1", output);

const input2 = parseInput(inputText);
//console.log('input2',input2);
const output2 = resolve2(input2);

console.log("solucion 2", output2);
