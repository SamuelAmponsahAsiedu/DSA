//Write a function that searches for an element in an array and returns the index. If the element is not present, it returns -1;

function searchElement(arr, element){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == element){
            return i;
        }
    }
    return -1;
};

let arr =[90, 85, 87, 100, 70]

let result = searchElement(arr, 85)
console.log(result);

//Write a function that returns the number of negative numbers in an array

function findNegatives(arr1){
    let count = 0;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]<0){
            count ++;
        }
    }
    return count;
}

let arr1 = [2, 6, -9, 90, -80, 7, 8];
let res = findNegatives(arr1)
console.log(res);

//write a function that returns the largest number in an array

function findLargest(arr2){
    let largest = -Infinity;
    for(let i=0; i<arr2.length; i++){
        if(arr2[1]>largest){
            largest = arr2[i]
        }
    }
    return largest;
};

let arr2 =[2, 80, 90, 40, 100];
let answer = findLargest(arr2);
console.log(answer);