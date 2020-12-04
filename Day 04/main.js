function parseInput(input) {
  let newInput = [];
  let newValue = "";
  let newPassport = true;

  input.forEach((element) => {
    if (newPassport) {
      newPassport = false;
    }

    if (element.length == 0) {
      newPassport = true;
      newInput.push(newValue.trim());
      newValue = "";
    } else {
      newValue += element + " ";
    }
  });
  return newInput.map((n) => n.split(" "));
}

function resolve1(input) {
  const onlySeven = input
    .filter((x) => x.length == 7)
    .map((n) => n.join(""))
    .filter((y) => !y.includes("cid:"));

  return input.filter((x) => x.length == 8).length + onlySeven.length;
}

function resolve2(input) {
  const valid = input
    .filter((x) => x.length >= 7)
    .filter((x) => IsValidPassword(x));

  return valid.length;
}

function IsValidPassword(passPort) {
  let isValid = true;

  if (passPort.length == 7) {
    if (passPort.join("").includes("cid:")) {
      return false;
    }
  }

  passPort.forEach((line) => {
    const obj = line.split(":");

    switch (obj[0]) {
      case "byr":
        if (isNaN(parseInt(obj[1])) || obj[1].length != 4) {
          isValid = false;
        } else {
          if (parseInt(obj[1]) < 1920 || parseInt(obj[1]) > 2002) {
            isValid = false;
          }
        }
        break;

      case "iyr":
        if (isNaN(parseInt(obj[1])) || obj[1].length != 4) {
          isValid = false;
        } else {
          if (parseInt(obj[1]) < 2010 || parseInt(obj[1]) > 2020) {
            isValid = false;
          }
        }
        break;

      case "eyr":
        if (isNaN(parseInt(obj[1])) || obj[1].length != 4) {
          isValid = false;
        } else {
          if (parseInt(obj[1]) < 2020 || parseInt(obj[1]) > 2030) {
            isValid = false;
          }
        }
        break;

      case "pid":
        {
          if (isNaN(parseInt(obj[1])) || obj[1].length != 9) {
            isValid = false;
          }
        }
        break;

      case "hcl":
        {
          if (!obj[1].match("^#[a-zA-Z0-9]{6,}$")) {
            isValid = false;
          }
        }
        break;

      case "ecl":
        {
          if (
            !["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(obj[1])
          ) {
            isValid = false;
          }
        }
        break;

      case "hgt":
        {
            const units = obj[1].substring(obj[1].length-2);
            const tall = obj[1].substring(0,obj[1].length-2);
            console.log(obj[1], tall)
            if (units == 'cm')
            {
                if (tall <150 || tall> 193)
                {
                    isValid=false;
                }
            }
            else if (units == 'in')
            {
                if (tall <59 || tall> 76)
                {
                    isValid=false;
                }
            }
            else
            {
                isValid = false;
            }

        }
        break;
    }
  });

  return isValid;
}

const input = parseInput(inputText);
const output = resolve1(input);
console.log("solucion 1", output);

const input2 = parseInput(inputText2);

console.log(input2.filter((x) => x.length >= 7));

const output2 = resolve2(input2);

console.log("solucion 2", output2);
