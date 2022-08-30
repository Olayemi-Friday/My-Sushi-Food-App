let count = 0;
const valueDisplay = document.getElementById("valueDisplay")

function increase(){
    count ++;
    valueDisplay.innerHTML = count
}

function decrease(){
    count --;
    valueDisplay.innerHTML = count
}