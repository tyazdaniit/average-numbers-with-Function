var myArray = [];
for(var i = 0 ; i < 4 ; i++){
    myArray[i] = prompt("insert number  " + (i + 1));
}
var sum = 0;
function showAverage(arrayNumber){
for(var i = 0 ; i < arrayNumber.length ; i++){
    sum = sum + Number(arrayNumber[i]);
}
alert(sum / myArray.length);
}
showAverage(myArray)