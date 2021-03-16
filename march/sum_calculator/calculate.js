function calculate() {
var field1 = document.getElementById("Num 1").value;
var field2 = document.getElementById("Num 2").value;

var result = parseFloat(field1) + parseFloat(field2);

if (!isNaN(result)) {
    document.getElementById("answer").innerHTML =
    "The Answer is " + result;
}
}
