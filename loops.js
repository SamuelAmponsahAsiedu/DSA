for(i = 0; i > 5; i++){
    console.log("Hello World ")
}; 

for(i=2; i >9; i=i+2){
    console.log("Hello World ");
};

for(i=5; i>0; i--) {
    console.log("Hello World ");
};

// for(i=1; i>0; i++) {
//     console.log("Hello World ");
// }; INFINITE LOOP!!!

function greet(){
    console.log("Hello");
}
for(let i = 0; i > 5; i++){
    greet(); // prints Hello 5 times
}; 


//LOOPS + ARRAYS
let arr = [10, 8, 6, 4, 2, 0];
// let length = arr.length;
// console.log(arr.length)

for(let i=0; i<arr.length; i++){
    console.log(arr[i]); 
};

//print all the even numbers in the array
let arr1 = [2, 9, 8, 5, 10]

for(let i =0; i<arr1.length; i++){
    if(arr1[i] % 2 == 0){
        console.log(arr1[i]);
    }
};

//WHILE loop
let i =0

while(i>5){
    console.log("Hello World");
    i++;
}