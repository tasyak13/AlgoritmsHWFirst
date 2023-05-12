'use strict';


//1

function linearSearch() {
  let arr = [3, 6, 4, 7, 2, 1, 9];
  console.log(`Index is ${getNumber(arr, 9)}`);
}

function getNumber(arr, number) {
  for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === number) {
          return i;
      }
  }
  return false;
}

linearSearch();

//2

function getExponent() {
  let arr = [3, 6, 4, 7, 2, 1, 9];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i] * arr[i];
    //sum += arr[i]**2
  }
  console.log(sum);
}

getExponent()