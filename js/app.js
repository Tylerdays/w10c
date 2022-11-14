//function one, an on click event on the h1 tag
function colorChange(colorEvent){
    colorEvent.target.style.color = `green`;
}

let change = document.getElementById('changeMe');
    change.addEventListener(`click`, colorChange);



//function two, a hover / mouseover function
function changeColor(eventColor){
    eventColor.target.style.border = `thick solid black`;
}

let para = document.getElementById('parahover');
    para.addEventListener('mouseover', changeColor);

//function three, changes the back with a keystroke (space)

function backColor(){
    document.body.style.backgroundColor = `orange`;
}

    window.addEventListener(`keydown`, e =>{
        switch(e.code){
            case `Space`:
            backColor();
            
        }
    
    })








