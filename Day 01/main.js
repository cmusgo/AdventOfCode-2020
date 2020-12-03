function parseInput(inputText) {
    return inputText
    .trim()
    .split('\n')
    .map(n => parseInt(n));
}

function resolve1(input) {
    let suman = [];

    let i = 0;
    let j = 0;
    
    for (i =0; i <= input.length; i++)
    {
        for (j =0; j <= input.length; j++)
        {
            if (parseInt(input[i]) + parseInt(input[j]) == 2020 )
            {
                console.log(input[i], input[j])
                
                if (!suman.includes(input[i])) suman.push(input[i]);
                if (!suman.includes(input[j]))suman.push(input[j])
            }
        }
    }
    //return suman;
    return suman.reduce((a,b) => a * b);
}

function resolve2(input) {
    let suman = [];

    let i = 0;
    let j = 0;
    let k = 0;

    for (i =0; i <= input.length; i++)
    {
        for (j =0; j <= input.length; j++)
        {
            for (k =0; k <= input.length; k++)
            {
                if (parseInt(input[i]) + parseInt(input[j]) + parseInt(input[k]) == 2020 )
                {
                    console.log(input[i], input[j], input[k])
                    
                    if (!suman.includes(input[i])) suman.push(input[i]);
                    if (!suman.includes(input[j]))suman.push(input[j]);
                    if (!suman.includes(input[k]))suman.push(input[k]);
                }
            }
        }
    }
    //return suman;
    return suman.reduce((a,b) => a * b );
}

const input = parseInput(inputText);
//const output = resolve1(input);
const output2 = resolve2(inputText2);
//console.log(output);
console.log(output2);