var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("navbar-brand")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "6px solid #71bd46";
        variableBorder = 1;
    }
}

var dialogs = {
    value0: function() {
        texts = "Luis Forni";
        timer = 150;
    },
    value1: function() {
        texts = "Prueba Técnica";
        timer = 150;
    },
    value2: function() {
        texts = "CUNIX";
        timer = 150;
    },
};

var number = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + number]();
    if (number >= 1) {
        number = -1;
    }
    
    dialog.innerHTML = "";
    var Letters = [];
    
    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }
    
    writes = setInterval(write, timer);
    
    positionLetter = 0;
    
    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            number++;
            if (number == Object.keys(dialogs).length) {
                clearInterval(writes);
                return up();
            }
            setTimeout(type, 1000);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}   


