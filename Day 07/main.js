const inputTextPrueba = `
shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.
`;

function parseInput(inputText) {
  return inputText
    .trim()
    .split("\n")
    .map((n) => {
      let obj = n.split("contain");
      return {
        bag: obj[0].replace("bags", "bag").trim(),
        contains: obj[1],
      };
    });
}

function parseInput2(inputText) {
  return inputText
    .trim()
    .split("\n")
    .map((n) => {
      let obj = n.split("contain");
      return {
        bag: obj[0].trim(),
        contains: obj[1]
          .replace(".", "")
          .trim()
          .split(",")
          .map((x) => {
            return {
              number: x.match(/\d+/) == null ? null : x.match(/\d+/)[0],
              bagName: x.replace(/[0-9]/g, "").trim(),
            };
          }),
        noBagsIncluded: obj[1].trim().includes("no other bags."),
      };
    });
}

function returnArray(input) {
  let canContainShinyBag = input.filter((x) =>
    x.contains.includes("shiny gold bag")
  );

  let father = canContainShinyBag;

  do {
    let newArr = [];
    canContainShinyBag.forEach((element) => {
      let arr = input.filter((x) => x.contains.includes(element.bag));

      newArr = newArr.concat(arr);
      father = father.concat(arr);
    });
    canContainShinyBag = newArr;
  } while (canContainShinyBag.length !== 0);

  return [...new Set(father.map(JSON.stringify))].map(JSON.parse);
}

function resolve1(input) {
  const all = returnArray(input);
  return all.length;
}

function resolve2(input) {
  let shinyBag = input.filter((x) => x.bag == "shiny gold bags")[0];
  console.log("shiny", shinyBag);

  let father = [];

  for (let index = 0; index < 100; index++) {
    let newArr = [];

    if (index == 0) {
      shinyBag.contains.forEach((element) => {
        let arr = input.filter((x) => x.bag == element.bagName);

        newArr = newArr.concat(arr);
        father = father.concat(arr);
      });
    } else {
      shinyBag.forEach((el) => {
        el.contains.forEach((element) => {
          let arr = input.filter((x) => x.bag == element.bagName);

          newArr = newArr.concat(arr);
          father = father.concat(arr);
        });
      });
    }
    shinyBag = newArr;
  }
  //TODO: incomplete, refactor
  console.log("father final", [...new Set(father.map(JSON.stringify))].map(JSON.parse));
  console.log(contar(father))
}

function contar(father)
{
  let sum=0;

  if  (father.contains.length == 1)
      return 1;
      
   father.contains.forEach(el => {
     return el.number * contar(el.contains, el.bagName)
   }) 

   return sum;
}

const input = parseInput(inputText);
//console.log(input);
const output = resolve1(input);
console.log("solucion 1", output);

const input2 = parseInput2(inputText);

const output2 = resolve2(input2);

console.log("solucion 2: 20189", output2);
