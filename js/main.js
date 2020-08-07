// // Option 2 - jQuery Smooth Scroll

// $('.navbar a').on('click', function (e) {
//     if (this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// });

// Option 3 - Smooth Scroll Script

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});

// Menu Button

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
