//1.Dado um array com valores repetidos retorne o mesmo sem os valores que repetem

const myArray = [];
myArray.push("batata");
myArray.push("mandioca");
myArray.push("pepino");
myArray.push("mandioca");
myArray.push("repolho");
myArray.push("batata")

function valoresUnicos(array) {
    const mySet = new Set(array);

    return [...mySet];
}

console.log(valoresUnicos(myArray));