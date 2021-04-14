'use strict';


//array1.pop();

//console.log(array1);

//array1.push(11);

//console.log(array1);

//for (let value of array1){
//    console.log(value);
//}

//array1[99] = 232;

//console.log(array1.length);

//const array1 = [1,2,3,4,5,6,7,8,9,10];

//array1.forEach(function(item, i, array1){
//    console.log(`${i}: ${item}  внутри массива ${array1}`);
//})

//const str = prompt('', ' ');

//const products = str.split(',');

//console.log(products.join('; '));

//products.sort()

const array2 = [2,64,123,403]

array2.sort(compareNum);

console.log(array2);

function compareNum(a,b){
    return a-b;
}
