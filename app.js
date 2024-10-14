const input = document.querySelector("#input");
const range = document.querySelector("#range");
const step = document.querySelector("#step");
const operation = document.querySelector("#operation");
const head = document.querySelector("#head");

function getTable() {
    let number = parseFloat(input.value);
    let tableRange = parseInt(range.value);
    let tableStep = parseInt(step.value);
    let selectedOperation = operation.value;

    // Clear existing table
    head.innerHTML = "";

    // Generate the table based on the selected operation
    for (let i = 1; i <= tableRange; i += tableStep) {
        switch (selectedOperation) {
            case "multiplication":
                head.innerHTML += `${number} * ${i} = ${number * i} <br />`;
                break;
            case "addition":
                head.innerHTML += `${number} + ${i} = ${number + i} <br />`;
                break;
            case "subtraction":
                head.innerHTML += `${number} - ${i} = ${number - i} <br />`;
                break;
            case "division":
                head.innerHTML += `${number} / ${i} = ${(number / i).toFixed(2)} <br />`;
                break;
            case "square":
                head.innerHTML += `${i}² = ${i * i} <br />`;
                break;
            case "cube":
                head.innerHTML += `${i}³ = ${i * i * i} <br />`;
                break;
            case "exponentiation":
                head.innerHTML += `${number}^${i} = ${Math.pow(number, i)} <br />`;
                break;
            case "percentage":
                head.innerHTML += `${i}% of ${number} = ${(number * (i / 100)).toFixed(2)} <br />`;
                break;
            case "decimal":
                head.innerHTML += `${number.toFixed(1)} * ${i} = ${(number * i).toFixed(2)} <br />`;
                break;
        }
    }

    // Clear input fields after table generation
    input.value = "";
}

function resetTable() {
    input.value = "";
    range.value = "10";
    step.value = "1";
    operation.value = "multiplication";
    head.innerHTML = "";
}
