// Array of song file paths
const songs = [
    "../placeholders/audio/acda-en-de-munnik-het-regent-zonnestr.mp3",
    "../placeholders/audio/andre-hazes-bloed-zweet-tranen.mp3",
    "../placeholders/audio/Augurk.mp3",
    "../placeholders/audio/doe-maar-liever-dan-lief.mp3",
    "../placeholders/audio/Flemming-amsterdam.mp3",
    "../placeholders/audio/guus-meeuwis-dondet.mp3",
    "../placeholders/audio/herman-van-veen-spetter-pieter-pater.mp3",
    "../placeholders/audio/marco-borsato-ik-leef-niet-meer-voor-jou.mp3",
    "../placeholders/audio/Rob-de-nijs-banger-hart.mp3"
];

// Function to play music based on the song index
function playMusic(index) {
    const audioPlayer = document.getElementById("audio-player");

    // Check if the audio player element exists
    if (!audioPlayer) {
        console.error("Audio player element not found!");
        return;
    }

    // Validate the song index
    if (index < 0 || index >= songs.length) {
        console.error("Invalid song index:", index);
        return;
    }

    // Set the audio source to the selected song
    audioPlayer.src = songs[index];

    // Play the selected song
    audioPlayer.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}
