let table = prompt("Enter number")

let limit = prompt("Enter limit")

if (limit == null)
{
    limit = 10
}

for(let i=1; i <= limit; i++)
{
    let res = i* table
    var paragraph = "<p>"+ table + " * " + i + " = " + res + "</p>"
    // document.write(table, "*", i, "=", res ,"<br> <br>")
    document.write(paragraph)
    console.log(table, "*", i, "=", res)
}
