//function () : ham
    // khai bao function : function declaration
        //cu phap(Syntax) : function functionName (parameters) {
            //your code here
        //}
    //parameters :  tham so truyen vao
    // let a = 1;
    // let b = 2
    // function sum (a,b) {
    //     return a + b;
    // }

    // console.log(sum(a,b));

//bt : tinh trung binh cua 2 so a va b

    // function average (a,b,sum) {
    //     return sum(a,b)/2
    // }

    // console.log(average(4,8,sum));

//anonymous function(function expression) -> khong bi hoisting
    // const logName = function () {
    //     console.log('yourName');
    // }
    // logName()

//IIFE  -> immediately invoked function excution

    // (function () {
    //     console.log("day la iife");
    // })()

//scope
    //global scope and function scope/local scope
        // let myName = "evondev" //-> global scope
        // function logYourName() {
        //     let myName2 = "EVONDEV" //->function scope
        //     console.log(myName2);
        // }

        // logYourName()
    //block scope 
        // if (2>1) {
        //     let message = "hello evondev"
        // }
        //trong {} thi goi la block
    
    //lexical scope
        // let newName = "evondev"
        // function sayHello () {
        //     let message = "hi"
        //     console.log(message + newName);
        // }
        // sayHello()

//var khong nen dung vi var: global scope and hoisting

//closure : function con có thể truy xuất scope của function cha
    // function sayHello2 (){  //parent function
    //     let message = "hi";
    //     function sayHi() { //child function
    //         console.log(message);
    //     }
    //     return sayHi
    // }
    
    // let result = sayHello2()
    // result()

