/* console.log("4" + 2)
console.log("4" * 2)
console.log("4" === 4)
console.log("4" == 4)


let total = 0;
for (let i = 1 ; i <= 3 ; i++) {
    total += i;
}

console.log(total); */

/* const c1 = document.querySelector("#text")

c1.addEventListener("input", function() {
    let text1 = c1.value;
    console.log("Input 1:")
    console.log(text1)
    console.log(typeof text1)
})

const c2 = document.querySelector("#number")

c2.addEventListener("input", function() {
    let text2 = c2.value;
    console.log("Input 2:")
    console.log(text2)
    console.log(typeof text2)
})

const c3 = document.querySelector("#date")

c3.addEventListener("input", function() {
    let text3 = c3.value;
    console.log("Input 3:")
    console.log(text3)
    console.log(typeof text3)
}) */

const valor = 120;

let valid = String(valor.trim()) !== "" && isNaN(valor) && valor < 0;

console.log(valid)

console.log(0 || 10);
console.log(0 && 10);
console.log("" ?? "Sense nom");
console.log(null ?? "Sense nom");