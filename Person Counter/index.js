let count = 0

function increment(){
    count = count + 1;
    document.getElementById("count-el").innerHTML = count;
}

let ssave;

sele = document.getElementById("save-el")

function save(){
    ssave = count + " - ";
    sele.innerText += " " + ssave;
}

function reset(){
    count = 0;
}


function decrement(){
    count = count - 1;
    if(count>=0){
        document.getElementById("count-el").innerHTML = count;
    }
}


