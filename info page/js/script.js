let currentIndex = 0;

const slides = [
    document.getElementById("slide1"),
    document.getElementById("slide2"),
    document.getElementById("slide3"),
    document.getElementById("slide4")
]

 function showSlide(slide)  {
    slides[currentIndex].style.display = "none";
    slides[slide].style.display = "block";
    currentIndex = slide;
} 

function nextSlide() {
    let nextIndex = currentIndex  + 1;
    if (nextIndex >= slides.length){
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

function prevSlide(){
    let prevIndex = currentIndex -1;
    if(prevIndex < 0){
        prevIndex = slides.length - 1;
    }
    showSlide(prevIndex);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

showSlide(0);