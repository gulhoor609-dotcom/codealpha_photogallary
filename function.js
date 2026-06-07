const images = document.querySelectorAll(".gallery .card img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// OPEN LIGHTBOX
images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        lightboxImg.src = img.src;
        lightbox.style.display = "flex";

    });

});

// CLOSE
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// NEXT
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});

// PREVIOUS
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});

// CLOSE ON BACKGROUND CLICK
lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }

});

// KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => {

    if(lightbox.style.display !== "flex") return;

    if(e.key === "ArrowRight"){
        nextBtn.click();
    }

    if(e.key === "ArrowLeft"){
        prevBtn.click();
    }

    if(e.key === "Escape"){
        lightbox.style.display = "none";
    }

});

// FILTER FUNCTION
function filterImages(category){

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let cardCategory =
            card.querySelector(".info p")
            .textContent
            .trim()
            .toLowerCase();

        if(category === "all" || cardCategory === category){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}