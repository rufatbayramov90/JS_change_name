//#region  String Change Array
let fullName = "Bayramov Rufat";
let array = fullName.split(' ');
let result = document.getElementById('result');
console.log(array)
result.innerHTML = array;
//#endregion

//#region    Array Elements Reversed
let reversed = array.reverse();
console.log(reversed);
result1.innerHTML = reversed
//#endregion

//#region Array Change String
let string = reversed.join(' ');
console.log(string);
result2.innerHTML = string;
//#endregion