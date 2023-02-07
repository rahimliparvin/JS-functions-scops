"use strict";


//TASK 1 

// function getDividedNums(n) {

//     if (typeof(n) == "number") {

//         if (n % 3 == 0  && n % 7 == 0) {

//             console.log("Bolunur");

//         }
//         else{
//             console.log("Bolunmur");
//         }   
//     }
//     else{
//         console.log("Duzgun eded daxil edin")
//     }

// }

//  getDividedNums();




// let getDividedNums = (number) => {

// if (typeof(number)== "number") {

//     if (number % 3 == 0 && number % 7 == 0) {

//         console.log("Bolunur");

//     } else {
//         console.log("Bolunmur");
//     }
// } 
// else {
//     console.log("Duzgun eded daxil et");
// }
// }

// getDividedNums(21);



//TASK2




// function getFactorial(num){


//     if (typeof(num) == "number") {

//         if (num > 0) {

//             let result = 1;

//             for ( let i = num ; i >= 1 ; i--) {


//                  result = result*i; 

//             }

//             console.log(result);

//         } else {
//             console.log("Musbet eded daxil")
//         }

//     } else {
//         console.log("Duzgun eded daxil edin")
//     }

// }

// getFactorial();




// let getFactorial = (number) => {

//     if (typeof (number) == "number") {

//         if (number > 0) {

//             let result = 1;

//             for (let i = number; i >= 1; i--) {


//                 result = result * i;

//             }

//             console.log(result);

//         } else {
//             console.log("Musbet eded daxil")
//         }

//     } else {
//         console.log("Duzgun eded daxil edin")
//     }

// }

// getFactorial();




//TASK3


// let number = [1,2,3,4,5,6,7,8,9];

// getEvenSquareSum(number);


// function getEvenSquareSum(arr) {


//     let result = 0;
   
//     for (let i = 0; i < arr.length; i++) {


//             if ( arr[i] % 2 == 0) {

                
                
//                 result+=arr[i]**2;


//             }
           
//         }
//         console.log(result);  
           
// }




// let getEvenSquareSum =  (arr) =>{

//     let result =0;

// for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i] % 2  == 0) {
        
//         result = result + arr[i]**2;
//     }
    
// }

// console.log(result);

// }

// let number = [1,2,3,4,5,6,7,8,9];

// getEvenSquareSum(number);


//TASK4

// let email ="cavid@code.edu.az";

// let password = "12345";

// login(email,password);


// function login(email,password ) {

//     if (email=="cavid@code.edu.az" &&  password == "12345") {
        
//         console.log("Girish olundu");
//     }
//     else{
//         console.log("Mail ve ya password yanlishdir");
//     }

// }


// let email ="cavid@code.edu.az";

// let password = "12345";


// let login = (email , password) => {

// if (email == "cavid@code.edu.az" && password == "12345") {
    
//     console.log("Girish olundu");
// }
// else{
//     console.log("Email ve ya password yanlisdir");
// }

// }  

// login(email,password);




//TASK5





// let nums = [1,2,3,4,5,6,7,8,9,10,];

// sumOddNums(nums);

// function sumOddNums(arr) {

//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 1) {
            
//             result = result + arr[i] ;

//         }      
   
//     }
//     console.log(result);
    
// }


// let nums  =[1,2,3,4,5,6,7,8,9,10]

// let sumOddNums = (arr) => {

//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
       
//         if (arr[i] % 2 == 1) {
            
//             result = result + arr[i];
//         }
        
//     }

//     console.log(result);
// }

// sumOddNums(nums);


//TASK6

// let nums = [1,2,3,4,5,6,7,8,9,10,12,13,15,16];

// sumEvenNums(nums);

// function sumEvenNums(arr) {

//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 1) {
            
//             count++;

//         }      
   
//     }
//     console.log(count);
    
// }





// let nums  =[1,2,3,4,5,6,7,8,9,10,12,14,15]

// let sumEvenNums = (arr) => {

//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
       
//         if (arr[i] % 2 == 0) {
            
//            count++;
//         }
        
//     }

//     console.log(count);
// }

// sumEvenNums(nums);