let progress = document.getElementById("progress");
let song = document.getElementById("audio");
let control = document.getElementById("control");

const songs = [
    { 
        src: "placeholders/audio/Vance Joy - Riptide (Lyrics).mp3", 
        title: "Riptide", 
        artist: "Vance Joy", 
        image: "images/Riptide.jpg"
    },
    { 
        src: "placeholders/audio/Lady Gaga, Bruno Mars - Die With A Smile (Lyrics).mp3",  
        title: "Die With A Smile", 
        artist: "Bruno Mars, Lady Gaga", 
        image: "images/Bruno mars.jpg" 
    },
    { 
        src: "placeholders/audio/Camila Cabello - Bam Bam (Lyrics) ft. Ed Sheeran.mp3",  
        title: "Bam Bam", 
        artist: "Camila Cabello, Ed Sheeran", 
        image: "images/Bam bam.jpg" 
    },
    { 
        src: "placeholders/audio/The Lumineers - Ophelia.mp3",  
        title: "Ophelia", 
        artist: "The Lumineers", 
        image: "images/Ophelia.jpg" 
    },
    { 
        src: "placeholders/audio/ROSE & Bruno Mars - APT. (Official Music Video).mp3",  
        title: "Apt", 
        artist: "Bruno Mars, ROSE", 
        image: "images/APT.jpg" 
    },
    { 
        src: "placeholders/audio/The Weeknd  Timeless with Playboi Carti (Official Music Video).mp3",  
        title: "Timeless", 
        artist: "The Weeknd", 
        image: "images/Timeless.jpg" 
    },
    { 
        src: "placeholders/audio/Kanye West - Bound 2 (audio).mp3",  
        title: "Bound2", 
        artist: "Kayne West", 
        image: "images/Bound 2.jpg" 
    },
    { 
        src: "placeholders/audio/Kendrick Lamar - Not Like Us.mp3",  
        title: "Not Like Us", 
        artist: "Kendrick Lamar", 
        image: "images/Not like us.jpg" 
    },
    
];

let currentSongIndex = 0;

function loadSong(index) {
    song.src = songs[index].src; 
    document.getElementById("song-title").textContent = songs[index].title;  
    document.getElementById("song-artist").textContent = songs[index].artist; 
    document.getElementById("song-image").src = songs[index].image;  
    song.load();  
    
    progress.value = 0;

    song.onloadedmetadata = function() {
        progress.max = song.duration;
    };

    control.classList.remove("fa-pause");
    control.classList.add("fa-play"); 
}


function sliderCarousel() {
    const songImages = document.querySelectorAll('.music img');
    for (let i = 0; i < songImages.length; i++) {
        songImages[i].src = songs[(currentSongIndex + i) % songs.length].image;
    }
}

song.addEventListener("timeupdate", function() {
    if (!song.paused) {
        progress.value = song.currentTime;  
    }
});

progress.addEventListener("input", function() {
    song.currentTime = progress.value; 
    if (song.paused) {
        song.play(); 
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
    }
});

song.addEventListener("ended", function() {
    progress.value = 0;  
    nextSong();  
});

function playPause() {
    if (control.classList.contains("fa-pause")) {
        song.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
    } else {
        song.play();
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;  
    loadSong(currentSongIndex);  
    sliderCarousel();  
    song.play();  
    control.classList.remove("fa-play");
    control.classList.add("fa-pause");
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;  
    loadSong(currentSongIndex);  
    sliderCarousel();
    song.play();
    control.classList.remove("fa-play");
    control.classList.add("fa-pause");
}

document.getElementById("nextSong").addEventListener("click", nextSong);
document.getElementById("prevSong").addEventListener("click", prevSong);

document.querySelector(".fa-backward").addEventListener("click", prevSong);  
document.querySelector(".fa-forward").addEventListener("click", nextSong);   

loadSong(currentSongIndex);


