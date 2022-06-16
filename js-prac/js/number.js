console.log(5+7);//12
console.log(typeof 12);//number

//parseInt -> chuyen ve so nguyen
console.log(parseInt("5"));//5
//parseFloat -> chuyen ve so thap phan
console.log(parseFloat("4.8"));//4.8

//Math.abs -> tri tuyet doi
console.log(Math.abs(-9));//9

//Math.floor -> lam tron xuong
console.log(Math.floor(4.8));//4

//Math.ceil -> lam tron len
console.log(Math.ceil(4.9));//5

//Math.round -> lam tron gia tri gan nhat
console.log(Math.round(4.3));//4
console.log(Math.round(4.5));//5

//numer.toFixed() -> lay sau dau phay
console.log((1/3).toFixed(2));//0.33

//Math.random -> random so tu 0-1
console.log(Math.random());

//Math.min -> tra ra so nho nhat
console.log(Math.min(1,3,4));//1

//Math.max -> tra ra so lon nhat
console.log(Math.max(1,3,4,5,6));//6

//Math.pow -> mũ
console.log(Math.pow(2,2));//4 

//isNaN() -> is not a number
    console.log(isNaN("this is string"));//true
    console.log(isNaN("5"));//false -> nếu số ở trong chuỗi thì hàm isNaN sẽ tự động chuyển về số
//Number.isNaN()
    console.log(Number.isNaN("this is string"));//false
    console.log(Number.isNaN("5"));//false 
    console.log(Number.isNaN(NaN));//false

