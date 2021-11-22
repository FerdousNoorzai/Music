let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function(e) {
        let aud = new Audio(`sounds/tom-${i+1}.mp3`);
        aud.play();
    })
}

window.addEventListener('keypress', function(e) {
    let sound;
    switch (e.key) {
        case 'w':
            sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case 'a':
            sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
        case 's':
            sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;
        case 'd':
            sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;
        case 'j':
            sound = new Audio('sounds/tom-5.mp3');
            sound.play();
            break;
        case 'k':
            sound = new Audio('sounds/tom-6.mp3');
            sound.play();
            break;
        case 'l':
            sound = new Audio('sounds/tom-7.mp3');
            sound.play();
            break;
        default:
            alert("Please enter a valid keypad!");
            break;
    }
    animation1(e.key);
})

function animation1(ee) {
    let keys = document.querySelector("." + ee);
    keys.classList.add("pressed");
    setTimeout(function() {
        keys.classList.remove("pressed")
    }, 300)
}