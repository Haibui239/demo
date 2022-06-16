//string(chuoi)
    "hello world";//double quotes
    'Hello';//single quote
    `xin chao toi la hai`;//backticks (template literal)

    //them bien vao chuoi
        //c1 : "+"
            // const a = ' hai';
            // console.log('xin chao' + a);//xin chao hai
        //c2: "${variable}" luu y: phai trong backticks
             // console.log(`xin chao ${a}`);
    //length -> do dai,va index -> vi tri index
        //let newString = "lol"
         //console.log(newString.length);//3
         //index la vi tri cua tung ki tu tinh ca khoang trang
    //split() -> tach chuoi
        // const myString = "Frontend Developer"
        // console.log(myString.split(" "));//["Frontend","Developer"]
        // console.log(myString.split(""));//["F","r","o","n","t","e","n","d"," ","D","e","v","e","l","o","p","e","r"]
    //toLowerCase() -> chu in thuong
        // console.log(myString.toLowerCase());//frontend developer
    //toUpperCase() -> chu in hoa
        // console.log(myString.toUpperCase());//FRONTEND DEVELOPER
    //startsWith(), endsWith() -> check lai chuoi bat dau bang chu gi hoac ket thuc bang chu gi
        // console.log(myString.startsWith("F"));//true
        // console.log(myString.startsWith("S"));//false
        // console.log(myString.endsWith("r"));//true
        // console.log(myString.endsWith("R"));//false
    //includes("ki tu") -> la bao gom
        // console.log(myString.includes("end"));//true
    //indexOf("ki tu can tim") -> la xem vi tri cua ki tu
        // console.log(myString.indexOf("F"));//0
    //lastIndexOf("ki tu can tim") ->  tim vi tri cua phan tu cuoi cung can tim
        // const myString1 = "Toi la nguoi, toi khong phai la cho"
        // console.log(myString1.lastIndexOf("la"));//29 -> chon ki tu "la" o sau
    //replace(chuoi ban dau, chuoi thay the) -> la thay the
        // console.log(myString.replace("Developer","Designer"));//Frontend Designer
    //repeat(so lan repeat) -> lap chuoi
        // console.log(myString.repeat(2));//Frontend DeveloperFrontend Developer
    //splice(start, end)->  tao ra 1 chuoi moi tu chuoi cu
        // console.log(myString.slice(0,3));//Fro -> dem tu trai sang
        // console.log(myString.slice(0));//Frontend Developer
        // console.log(myString.slice(-3));//per -> dem tu phai sang
    //trim -> loai bo khoang trong 2 ben
        // const str = "    Xin chao cac ban    "
        // console.log(str.trim());//"Xin chao cac ban"
    //trimStart -> loai bo khoang trong ben trai
        // console.log(str.trimStart());//"Xin chao cac ban       "
    //trimEnd -> loai bo khoang trong ben phai
        // console.log(str.trimEnd());//"       Xin chao cac ban"
    //charAt -> lay ra ki tu theo vi tri index 
        // console.log(str.charAt(5));//i
    //substr(vi tri bat dau, so ki tu can lay) -> lay ra 1 phan cua chuoi(string)
        // const str1 = "Xin chao mn nha"
        // console.log(str1.substr(0,3));//Xin
    //substring(vi tri bat dau, vi tri ket thuc) -> lay ra cac ki tu cua chuoi(string)
        // console.log(str1.substring(0,5));//Xin c



//đề bải 1 : loại bỏ khoảng trống, chữ hoa, thay chữ Dev thành Design, và repeat 2 lần
// let newString1 = "    Dev Frontend     "

// let newString2 = newString1.trim()
// let newString3 = newString2.toUpperCase()
// let newString4 = newString3.replace("DEV","Design")
// let newString5 = newString4.repeat(2)

// console.log(
//     newString1
//         .trim()
//         .replace("Dev","Design")
//         .toUpperCase()
//         .repeat(2)
// );

