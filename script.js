score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 32) {
        kid = document.querySelector('.kid');
        kid.classList.add('animatedkid');
        setTimeout(() => {
            kid.classList.remove('animatedkid')
        }, 500);
    }

    if (e.keyCode == 39) {
        kid = document.querySelector('.kid');
        kidx = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
        kid.style.left = kidx + 112 + "px";
    }

    if (e.keyCode == 37) {
        kid = document.querySelector('.kid');
        kidx = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
        kid.style.left = (kidx - 112) + "px";
    }
}

setInterval(() => {
    kid = document.querySelector('.kid');
    gameover = document.querySelector('.gameover');
    dino = document.querySelector('.dino');

    kidx = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
    kidy = parseInt(window.getComputedStyle(kid, null).getPropertyValue('top'));

    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dinoy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    offsetX = Math.abs(kidx - dinox);
    offsetY = Math.abs(kidy - dinoy);

    if (offsetX < 30 && offsetY < 40) {
        gameover.innerHTML = "Game Over - Reload to start over";
        dino.classList.remove('dinoanimated')
        audiogo.play()
        setTimeout(() => {
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            dino.style.animationDuration = newDur + 's';
        }, 2000);
      
    }

}, 10);

function updatescore(score) {
    scoreCont.innerHTML = "Your Score:" + score
}


