var btn = document.querySelector(".submit");
btn.addEventListener("click",function calculator() {
    var Num1 = parseInt(document.getElementById("Number1").value);
    var Num2 = parseInt(document.getElementById("Number2").value);
    var oporator = document.getElementById("oporator").value;
    var ans = document.getElementById("ans");
    if (oporator == "sum") {
        var sum = Num1 + Num2
        ans.innerText = sum;
    }
    else if (oporator == "substract") {
        var substract = Num1 - Num2
        ans.innerText = substract;
    }
    else if (oporator == "division") {
        var division = Num1 / Num2
        ans.innerText = division;
    }
    else if (oporator == "select") {
        alert("Choose proper option");

    }
    else {
        var multiply = Num1 * Num2
        return ans.innerText = multiply;
    }
})
