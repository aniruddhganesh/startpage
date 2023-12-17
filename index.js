const tw_text = "Surf The Web";
let tw_i = 0;
const tw_speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += tw_txt.charAt(i);
        i++;
        setTimeout(typeWriter, tw_speed);
    }
}
