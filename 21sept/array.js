var arr = [1, 2, 4, 6, 7]

console.log(arr);
console.log("Length: ", arr.length);
console.log("First: ", arr[0]);
console.log("Last: ", arr[arr.length - 1]);

for(i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);
}


for(i = 0; i < arr.length; i++) {
    console.log(`Square of ${arr[i]} is ${arr[i] * arr[i]}`);
}


sum = 0
for(i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}

console.log("Total of all elements: ", sum);


for(i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        console.log("Is even: ", arr[i]);

    }
}







//output: 
/**
arr[0] = 1 
arr[1] = 2 
arr[2] = 4 
arr[4] = 6 
arr[5] = 7 

 */


