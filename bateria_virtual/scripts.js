document.body.addEventListener('keyup', (evento) => {
    playSound( evento.code.toLowerCase() );
});

document.querySelector('.composer button')
.addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 500);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 500;
    }
}

const volumeControl = document.querySelector('#volume-range');

volumeControl.addEventListener('input', (evento) => {
    setVolume(evento.target.value);
});

function setVolume(volume){
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio) => {
        audio.volume = volume;
    });
}
