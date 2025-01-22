let currentMovieIndex = 0;

const movies = [
    {
        title: 'The Dark Knight',
        duration: '2hrs en 32min 2008',
        description: 'The Dark Knight is a superhero film written and directed by Christopher Nolan. Based on the Batman cartoons, the film is a sequel to Batman Begins, which is a reboot of the Batman series. Christian Bale stars.',
        image: 'images/Batman.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Avengers',
        duration: '2hrs 23min 2012',
        description: 'The Avengers is a superhero film produced by Marvel Studios. It is the sixth film in the Marvel Cinematic Universe (MCU).',
        image: 'images/Avengers.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Fall Guy',
        duration: '1hr 45min 2023',
        description: 'Fall Guy is a thrilling action movie with high-octane stunts and intense drama.',
        image: 'images/Fall guy.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Guardians of the Galaxy',
        duration: '2hrs 1min 2014',
        description: 'Guardians of the Galaxy is a space opera film based on the Marvel Comics superhero team of the same name.',
        image: 'images/Guardians.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Gladiator',
        duration: '2hrs 35min 2000',
        description: 'Gladiator is a historical epic directed by Ridley Scott, starring Russell Crowe.',
        image: 'images/Gladiator.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Lord of the Rings',
        duration: '3hrs 48min 2001',
        description: 'The Lord of the Rings is a fantasy epic directed by Peter Jackson based on the novels by J.R.R. Tolkien.',
        image: 'images/Lord of the rings.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Transformers: Rise of the Beasts',
        duration: '2hrs 7min 2023',
        description: 'Transformers: Rise of the Beasts is a science fiction action film directed by Steven Caple Jr. It is the seventh installment in the Transformers film series.',
        image: 'images/Transformers.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Sonic the Hedgehog',
        duration: '1hr 40min 2020',
        description: 'Sonic the Hedgehog is an action-adventure comedy film based on the popular video game franchise, starring Ben Schwartz as Sonic.',
        image: 'images/sonic.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Bad Boys 4',
        duration: '2hrs 0min 2024',
        description: 'Bad Boys 4 continues the adventures of Mike Lowrey and Marcus Burnett, directed by Adil & Bilall.',
        image: 'images/boys.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    },
    {
        title: 'Fast X',
        duration: '2hrs 22min 2023',
        description: 'Fast X is the tenth installment in the Fast & Furious franchise, featuring high-octane car chases and daring stunts.',
        image: 'images/x.jpg',
        video: 'placeholders/videos/placeholder-16x9.mp4'
    }


    
];

const moviePoster = document.getElementById('movie-poster');
const movieTitle = document.getElementById('movie-title');
const movieDuration = document.getElementById('movie-duration');
const movieDescription = document.getElementById('movie-description');
const videoPlayer = document.getElementById('video');

function showMovie(info) {
    const movie = movies[info];
    moviePoster.src = movie.image;
    movieTitle.innerText = movie.title;
    movieDuration.innerText = movie.duration;
    movieDescription.innerText = movie.description;
    videoPlayer.src = movie.video;
}

function sliderCarousel() {
    const sliderImages = document.querySelectorAll('.movies img');
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].src = movies[(currentMovieIndex + i) % movies.length].image;
    }
}

function nextMovie() {
    if (currentMovieIndex + 1 >= movies.length) {
        currentMovieIndex = 0;
    } else {
        currentMovieIndex++;
    }
    showMovie(currentMovieIndex);
    sliderCarousel();  
}

function prevMovie() {
    if (currentMovieIndex - 1 < 0) {
        currentMovieIndex = movies.length - 1;
    } else {
        currentMovieIndex--;
    }
    showMovie(currentMovieIndex);
    sliderCarouse();  
}

function openVideo() {
    document.getElementById('video-modal').style.display = 'block';
    document.getElementById('video').play();
}

function closeVideo() {
    document.getElementById('video-modal').style.display = 'none';
    document.getElementById('video').pause();
    document.getElementById('video').currentTime = 0;
}

showMovie(currentMovieIndex);
sliderCarouse();
