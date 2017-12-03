var userInput = document.getElementById('userInput');
var output = document.getElementById('output');

function remain() {
    var remaining = 50 - userInput.value.length;
    output.innerHTML = remaining;

    if(remaining < 0){
        output.style.color ='red';
    }
};
