var mini_box = document.getElementsByClassName('mini-box')

colorRandomizer()

function colorRandomizer(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    mini_box.style.backgroundColor = randomColor
    mini_box.innerText = randomColor
}