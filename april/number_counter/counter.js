// set initial count to be zero 

let count = 0 

// select the values and all buttons 

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

// console.log(btns)

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count = 0
        }

// Below condition is for changing the color 

        if(count > 0){
            value.style.color = 'green';
        }
        else if (count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black';
        }
        
        value.textContent = count;
    });
});