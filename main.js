let input = document.getElementById("input")
let randWord = document.getElementById("randp")
let reloadBtn = document.getElementById("reload-btn")
let verifyBtn = document.getElementById("verify-btn")
let txtArea = document.querySelector(".txtarea")

let randArray = [getRandLetter(), getRandLetter(), getRandLetter(), getRandLetter(), getRandLetter()]

function getRandNum(val1, val2){
    let number = Math.floor((Math.random() * val2) + 1)
    if (number < val1) {
        return getRandNum(val1, val2)
    } else {
        return number
    }
}

function getRandLetter() {
    const randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    const randomLetter = String.fromCharCode(randomCharCode);
    return randomLetter
}

function reload(){
    input.value = ""
    randArray = [getRandLetter(), getRandLetter(), getRandLetter(), getRandLetter(), getRandLetter()]
    randWord.innerHTML= ""
    styledtxt()
}

// RANDOM STYLES

let span;
function styledtxt(){
    for (let i = 0; i < randArray.length; i++) {
        span = document.createElement("span")
        span.textContent = randArray[i]

        txtArea.style.background= `linear-gradient(to bottom, rgb(${getRandNum(0, 255)}, ${getRandNum(0, 255)}, ${getRandNum(0, 255)}), rgb(${getRandNum(0, 255)}, ${getRandNum(0, 255)}, ${getRandNum(0, 255)}))`
        span.style.color= `rgb(${getRandNum(0, 255)}, ${getRandNum(0, 255)}, ${getRandNum(0, 255)})`
        span.style.fontSize= `${getRandNum(19, 37)}px`
        span.style.transform= `rotate(${getRandNum(80, 180)}deg)`
        span.style.letterSpacing= `${getRandNum(0, 30)}px`
        span.style.fontWeight= `${getRandNum(100, 900)}`
        
        randWord.appendChild(span)
    }
}
styledtxt()

function execute(){
    verifyBtn.addEventListener("click", function(){
        console.log(randWord.innerHTML)
        if (input.value === randArray.join('')) {
            alert("CAPTCHA passed!")
        } else {
            alert("Incorrect entry")
            reload()
        }
    })
    reloadBtn.addEventListener("click", function(){
        reload()
    })
}
execute()
