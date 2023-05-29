const array = [3, 5, 2, 'a', 4, 1];
const array1 = {...array}

let result = array.reduce(function(sum, elem) {
    return sum + elem;
})

function findMinArray(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
const resultMin = findMinArray(array);

let string = "Hello World! It's a JavaScript.";
function countWhiteSpace(line) {
    let count = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] == " ") {
            count++;
        }
    }
    return count;
}
// let x
// [0, 1].forEach(function(){return 0;})
const countSpace = countWhiteSpace(string);
console.log(1 === true);
console.log(result);
console.log(resultMin);
console.log(countSpace);