function headFunBack() {

    head.style.width = `75px`;
    head.style.transition = `1s ease-in`;

}

// function headFun() {
//     head.style.width = `100px`;
//     head.style.transition = `1s ease-in-out`;
//     setTimeout(headFunBack, 1000)
// }

function back() {
    left_arm.style.transform = `rotate(0deg)`;
    right_arm.style.transform = `rotate(-20deg)`;
    left_leg.style.transform = `rotate(0deg)`;
    right_leg.style.transform = `rotate(-20deg)`;
}

function dance() {
    left_arm.style.transform = `rotate(20deg)`;
    right_arm.style.transform = `rotate(0deg)`;
    left_leg.style.transform = `rotate(20deg)`;
    right_leg.style.transform = `rotate(0deg)`;
    // setTimeout(headFun, 2000)
    setTimeout(back, 500)
}

setInterval(dance, 1000)
let audio = document.createElement("audio");
audio.setAttribute("src", "music.mp3");
audio.autoplay = true;
audio.play();