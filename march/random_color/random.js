var generateBtn = document.getElementById('generateBtn')

colorRandomizer()

function colorRandomizer() {
    const randomColor1 = "#"+ Math.floor(Math.random()*16777215).toString(16);

    const randomColor2 = "#"+ Math.floor(Math.random()*16777215).toString(16);

    const randomColor3 = "#"+ Math.floor(Math.random()*16777215).toString(16);

    const randomColor4 = "#"+ Math.floor(Math.random()*16777215).toString(16);

    const randomColor5 = "#"+ Math.floor(Math.random()*16777215).toString(16);

    box1.style.backgroundColor = randomColor1
    box1.innerText = randomColor1

    box2.style.backgroundColor = randomColor2
    box2.innerText = randomColor2

    box3.style.backgroundColor = randomColor3
    box3.innerText = randomColor3

    box4.style.backgroundColor = randomColor4
    box4.innerText = randomColor4

    box5.style.backgroundColor = randomColor5
    box5.innerText = randomColor5
}
generateBtn.addEventListener('click',colorRandomizer)