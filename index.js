let numberOrDrumButtons = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOrDrumButtons; index++) {
    document.querySelector("button").addEventListener("click", function() {
        let audio = new Audio("sounds/ton-1.mp3");
        audio.play();
    });

}
