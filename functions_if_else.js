function sum(a,b) {
    let result = a + b;
    console.log(result);;
}
sum(20, 10);


function add(c, d){
    let addedValue = c + d;
    console.log(addedValue)
}
let f =40;
let g = 50;
add(f, g);


function multiply(x, y){
    let answer = x * y;
    
    return answer;
}
let value = multiply(5,6)
console.log(value)


//write a function which accepts the age and tells whether a person is eligible to vote or not

function isEligible(age){
    if(age<0){
        console.log("Invalid Age")
    }else if(age >= 18){
        console.log("is Eliglible")
    }else{
        console.log("is Not Eligible")
    }
}

isEligible(10);

//create a function to check if a number is even or odd

function isEvenOrOdd(number){
    if(number<0){
        console.log("Invalid number")
    }else if(number % 2 == 0){
        console.log("even number")
    } else{
        console.log("odd number")
    }
}
isEvenOrOdd(60);

function isEvenOdd(num){
    let rem = num % 2;

    if(rem == 0){
        console.log("even number");
    }else[
        console.log("odd number")
    ]
}
isEvenOdd(95);