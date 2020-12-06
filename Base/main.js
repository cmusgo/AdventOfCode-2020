function parseInput(inputText) {
//   return inputText
//     .trim()
//     .split("\n")
//     .map(seat => parseInt(seat
//         .replaceAll('B', '1')
//         .replaceAll('R', '1')
//         .replaceAll('F', '0')
//         .replaceAll('L', '0')
//         , 2)
//     );
}


function resolve1(input) {
    
}

function resolve2(input) {
    
}

const input = parseInput(inputText);
console.log(input);
const output = resolve1(input);
console.log("solucion 1", output);

const input2 = parseInput(inputText);

const output2 = resolve2(input2);

console.log("solucion 2", output2);
