
const translate = document.getElementById('translate-btn')
const startover = document.getElementById('startover-btn')
translate.onclick = flip;
startover.onclick = reset;


function flip() {
    const front = document.getElementById("front");
    const back = document.getElementById("back");
    front.style.display = "none";
    back.style.display = "block";
}

function reset()
{
    const front = document.getElementById("front");
    const back = document.getElementById("back");

    front.style.display = "block"
    back.style.display  = "none"
}

