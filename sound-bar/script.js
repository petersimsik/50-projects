const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelector('.buttons'); 

sounds.forEach(sound => {
    const button =  document.createElement('button');
    button.classList.add('btn');
    button.innerText = sound;
    buttons.appendChild(button);

    button.addEventListener('click', () => {
        stopPlayingSound();
        document.getElementById(sound).play();

    });
});

function stopPlayingSound() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;            
    }); 
}