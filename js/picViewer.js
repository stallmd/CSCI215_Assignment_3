var picture = document.getElementsByName('img');


for(var i=0; i<5; i++) {
    console.log("pic src:" + picture[i].src);

    function over(){
        picture[i]height = 200;
        picture[i].width = 400;
    }

    function out(){

        picture[i].height = 100;
        picture[i].width = 200;
    }

    function clicked(){
        var blownUp = document.getElementById('images');
        blownUp.innerHTML = "";
        blownUp.innerHTML += "<img src=" + picture[i].src + " height=400 width=600><br>";
        blownUp.style.visibility = "visible";

    };