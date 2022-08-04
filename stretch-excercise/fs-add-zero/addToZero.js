// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.
// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
let value = false;
for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
        if (i!== j){
            if(array[i] + array[j] ===0){
               value = true;
            }
        }
    }
}
console.log(value)