//your JS code here. If required.
// List of sound names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Function to stop all sounds
function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0; // Reset playback
  });
}

// Dynamically create buttons and audio elements
const buttonsDiv = document.getElementById("buttons");

sounds.forEach((sound) => {
  // Create a button for each sound
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  // Add click event to play the corresponding sound
  btn.addEventListener("click", () => {
    stopSounds(); // Stop other sounds
    document.getElementById(sound).play(); // Play selected sound
  });

  buttonsDiv.appendChild(btn);

  // Create audio element for each sound
  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

// Create the "Stop" button
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn", "stop");
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSounds);
buttonsDiv.appendChild(stopBtn);
