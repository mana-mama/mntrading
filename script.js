let slides = document.querySelectorAll(".slide");
let next_button = document.querySelector(".next");
let prev_button = document.querySelector(".prev");
let max_slide = slides.length;

slides[0].classList.add("slidein");
slides[1].classList.add("slidewait");
slides[max_slide-1].classList.add("slideout");

let current_slide = 1;
let sliding = false;
let user_sliding = false;

setTimeout(function() {
    autoSlide();
}, 5000); 

function nextSlide() {
    if (sliding == true) {
        return;
    }

    for (i=0; i < slides.length; i++) {
        slides[i].classList.remove("slidein");
        slides[i].classList.remove("slideout");
        slides[i].classList.remove("slidewait");
        slides[i].classList.remove("reversein");
        slides[i].classList.remove("reverseout");
        slides[i].classList.remove("reversewait");
    }

    slides[current_slide-1].classList.add("slideout");
    
    current_slide += 1;

    if (current_slide > max_slide) {
        current_slide = 1;
    }
    
    slides[current_slide-1].classList.add("slidein");
    
    if (current_slide == max_slide) {
        slides[0].classList.add("slidewait");
    } else {
        slides[current_slide].classList.add("slidewait");
    }

    sliding = true;
    next_button.classList.add("disable");
    prev_button.classList.add("disable");
    setTimeout(function() {
        sliding = false;
        next_button.classList.remove("disable");
        prev_button.classList.remove("disable");
    }, 2000);
    
}

function prevSlide() {
    if (sliding == true) {
        return;
    }

    for (i=0; i < slides.length; i++) {
        slides[i].classList.remove("slidein");
        slides[i].classList.remove("slideout");
        slides[i].classList.remove("slidewait");
        slides[i].classList.remove("reversein");
        slides[i].classList.remove("reverseout");
        slides[i].classList.remove("reversewait");
    }

    slides[current_slide-1].classList.add("reversein");

    if (current_slide == max_slide) {
        slides[0].classList.add("reversewait");
    } else {
        slides[current_slide].classList.add("reversewait");
    }

    if (current_slide == 1) {
        slides[max_slide-1].classList.add("reverseout");
    } else {
        slides[current_slide-2].classList.add("reverseout");
    }

    current_slide -= 1;
    
    if (current_slide < 1) {
        current_slide = max_slide;
    }

    sliding = true;
    next_button.classList.add("disable");
    prev_button.classList.add("disable");
    setTimeout(function() {
        sliding = false;
        next_button.classList.remove("disable");
        prev_button.classList.remove("disable");
    }, 2000);
}

function autoSlide() {
    if (sliding == false) {
        if (user_sliding == true) {
            user_sliding = false;
        } else {
            nextSlide();
        }
    }

    setTimeout(function() {
        autoSlide();
    }, 5000); 
}

function userClick() {
    user_sliding = true;
}