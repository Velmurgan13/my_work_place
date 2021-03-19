var stack = []
var inputNumber = document.getElementById('number')
var output = document.getElementById('stack')
var errorMsg = document.getElementById('errorMsg')

document.getElementById('addBtn').addEventListener('click', function(event){
    var new_val = inputNumber.value;
    
    if (new_val == ""){
        errorMsg.innerText = "Please Enter Number"
    }
    else { 
    inputNumber.value = "";
    errorMsg.innerText = ''
    stack.push(new_val);
    output.innerHTML = ''
  
        for(i=0;i<stack.length;i++){
            var newNumber = document.createElement('span')
            var text = stack[i]
            if(i==0){
                newNumber.style.color = 'red'
            }
            else if(i==stack.length-1){
                newNumber.style.color = 'green'
                text = ',' + text
            }
            else{
                newNumber.style.color = 'black'
                text = ',' + text
            }
            newNumber.innerText = text
            output.appendChild(newNumber)
        }   
    }    
})

document.getElementById('removeBtn').addEventListener('click', function(event){
    if (stack.length == 0){
        output.innerText = "Nothing To Remove"
    }
    else { 

    stack.shift();
    output.innerHTML = ''
    for(i=0;i<stack.length;i++){
        var newNumber = document.createElement('span')
        var text = stack[i]
        if(i==0){
            newNumber.style.color = 'red'
        }
        else if(i==stack.length-1){
            newNumber.style.color = 'green'
            text = ',' + text
        }
        else{
            newNumber.style.color = 'black'
            text = ',' + text
        }
        newNumber.innerText = text
        output.appendChild(newNumber)
    }
    }
    
})