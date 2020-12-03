// function parseInput(inputText) {
//     return inputText
//     .trim()
//     .map(n => {})
//     .split(' ');
// }

function resolve1(input) {
    let countPasswords = 0
    input.forEach(x => {
        const inputValue = x.split(' ');
        const levels = inputValue[0].split('-');
        const obj = {
            lowNumber: parseInt(levels[0]),
            highNumber: parseInt(levels[1]),
            letter: inputValue[1].split(":")[0],
            passWord: inputValue[2],
            countedElements: countCharInString(inputValue[2],inputValue[1].split(":")[0])
        }
        if (obj.countedElements <= obj.highNumber && obj.countedElements >= obj.lowNumber) countPasswords +=1
    });

    return countPasswords;
}

function resolve2(input) {
    let countPasswords = 0
    input.forEach(x => {
        const inputValue = x.split(' ');
        const levels = inputValue[0].split('-');
        const obj = {
            lowNumber: parseInt(levels[0]),
            highNumber: parseInt(levels[1]),
            letter: inputValue[1].split(":")[0],
            passWord: inputValue[2],
            countedElements: countCharInString(inputValue[2],inputValue[1].split(":")[0])
        }
        if (obj.countedElements <= obj.highNumber && obj.countedElements >= obj.lowNumber) countPasswords +=1
    });

    return countPasswords;
}

function countCharInString(passWord, letter) {
    return (passWord.match(new RegExp(letter, "g")) || []).length;
}

function resolve2(input) {
    let countPasswords = 0
    input.forEach(x => {
        const inputValue = x.split(' ');
        const levels = inputValue[0].split('-');
        const obj = {
            firstPosition: parseInt(levels[0]),
            secondPosition: parseInt(levels[1]),
            letter: inputValue[1].split(":")[0],
            passWord: inputValue[2]
        }

        if (!(obj.passWord[obj.firstPosition-1] === obj.letter && obj.passWord[obj.secondPosition-1] === obj.letter))
            {
                if (obj.passWord[obj.firstPosition-1] === obj.letter || obj.passWord[obj.secondPosition-1] === obj.letter) 
                {
                    countPasswords +=1
                }
            }
    });

    return countPasswords;
}

//const input = parseInput(inputText);
//const output = resolve1(inputText);
const output2 = resolve2(inputText2);
//console.log(output);
console.log(output2);