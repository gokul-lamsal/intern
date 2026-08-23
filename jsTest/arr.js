const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [88, 5, 7, 99, 66, 9];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i]; //or user arr2.push[arr1[i]]
}
for (let i = 0; i < arr2.length; i++) {
  arr3[i + arr1.length] = arr2[i]; //or use arr3.push(arr2[i])
}

console.log(arr3);
