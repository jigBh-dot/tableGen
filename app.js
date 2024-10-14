const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const head = document.querySelector("#head");

function getTable(){
        head.innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            head.innerHTML += `${input.value} * ${i} = ${input.value*i} <br />`
        }
        input.value = "";
} 