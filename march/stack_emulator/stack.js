var stack = [];
var input_number = document.getElementById("addNumber");
var stack_print = document.getElementById("stack_output");

document
.getElementById("PushButton")
.addEventListener("click", function (event) {
    var new_val = input_number.value;
    input_number.value = ""
    stack.push(new_val);
    console.log(stack);
    stack_print.innerText = stack
});

document
.getElementById("PopButton")
.addEventListener("click", function (event) {
    stack.pop();
    console.log(stack);
    stack_print.innerText = stack
});
    