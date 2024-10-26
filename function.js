

//  For mobile design:: navbar hide and show three bar::START

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

};

// For mobile design:: navbar hide and show three bar::END



// when user scrolls down then show go to Top button::START

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// when user scrolls down then show go to Top button::END   

// Whatsapp Chat Icon:: START
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('whatsapp-chat-button');
    const phoneNumber = '+8801327491315'; // Replace with your phone number

    chatButton.addEventListener('click', function(event) {
        event.preventDefault();
        const message = encodeURIComponent('Hello! I have a question.'); // Your predefined message
        const whatsappUrl = `https://t.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    });
});
// Whatsapp Chat Icon:: END


// Achivement Section::START
//Access images
let slideImages = document.querySelectorAll('.achivement_img');
//access next buttons
let next = document.querySelector('.next');
//Access prev buttons
let prev = document.querySelector('.prev');
//Access dot indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

//code for next buttons
next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {

        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    dotsLabel();
};

//code for prev buttons
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {

        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    dotsLabel();
};

//auto sliding
function autoSliding() {
    deleteInterval = setInterval(timer, 2000);
    function timer() {
        slideNext();
        dotsLabel();
    }
}
autoSliding();


//stop auto sliding when mouse is over

const mainContainer = document.querySelector('.slide_container');
mainContainer.addEventListener('mouseover', function () {
    clearInterval(deleteInterval);
});
//Resume autosliding when mouse is out

mainContainer.addEventListener("mouseleave", autoSliding);

//add and remove active class from indicators

function dotsLabel() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('achivement_active', '');
    }
    dots[counter].className += ' achivement_active';
}
// Achivement Section::END
