var squares = document.getElementsByClassName("square");
var colors = [];
var result = document.getElementById("result");
var header = document.getElementById("header");
var playAgain = document.getElementById("play-again");
var newColor = document.getElementById("new-color");
generateColor();
assignColors();


function generateColor(){
    var i; 
    for (i = 0; i<squares.length; i++){
        colors.push(
            `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
        )
    }
}

function assignColors(){
    var i; 
    for (i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].setAttribute("data-color", colors[i]);
    }
}
var pickedColor = getrandomColor();
function getrandomColor(){
    var randomColor = colors[Math.floor(Math.random()*squares.length)];
    document.querySelector("#colordisplay").innerHTML = randomColor;
    return randomColor;
}

checkColor();

function checkColor(){
    var i, j; 
    for (i = 0; i<squares.length; i++){
        squares[i].onclick = function(){
            var getColor = this.getAttribute("data-color");
            if (getColor == pickedColor){
                for (j = 0; j<squares.length; j++){
                    squares[j].style.opacity = "1";
                    squares[j].style.backgroundColor = pickedColor;
                }
                playAgain.innerHTML = "Play Again"
                header.style.background = pickedColor; 
                result.innerText = "Correct";
            }else{
                result.innerText = "Wrong";
                this.classList.add("fade");
            }
        }
    }
}

newColor.onclick = function(){
    reset();
}

playAgain.onclick = function(){
    reset();
}

function reset(){
    window.location = location.href; 
}