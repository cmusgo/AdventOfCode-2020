function CountTreesPositions(input, stepHorizontal, stepVertical) {
  let horizontalPos = stepHorizontal;
  let totalTrees = 0;
  let index = stepVertical;

  while (index < input.length) {
    const element = input[index];
    let line = element.repeat(horizontalPos / element.length + 1);

    if (line[horizontalPos] === "#") {
      totalTrees += 1;
    }
    horizontalPos += stepHorizontal;

    index = index + stepVertical;
  }

  return totalTrees;
}

function resolve1(input) {
  return CountTreesPositions(input, 3, 1);
}

function resolve2(input) {
    
    const trees11 = CountTreesPositions(input, 1, 1);
    const trees31 = CountTreesPositions(input, 3, 1);
    const trees51 = CountTreesPositions(input, 5, 1);
    const trees71 = CountTreesPositions(input, 7, 1);
    const trees12 = CountTreesPositions(input, 1, 2);
    
    return trees11 * trees31 * trees51 * trees71 * trees12;
    
}

//const input = parseInput(inputText);
const output = resolve1(inputText); //225
const output2 = resolve2(inputText2);
console.log(output);
console.log(output2);
