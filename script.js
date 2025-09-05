
// Sounds list
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');
const audioContainer = document.getElementById('audios');
let currentAudio = null;

// Create buttons + audio elements dynamically
sounds.forEach(sound => {
  // create button
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  // create audio
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  audioContainer.appendChild(audio);

  // play on button click
  btn.addEventListener('click', () => {
    stopSound();
    currentAudio = document.getElementById(sound);
    currentAudio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Stop button
const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
