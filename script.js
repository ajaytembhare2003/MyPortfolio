// Togggle icon navbar start here
let navIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

navIcon.onclick = () => {
  navIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Togggle icon navbar ends here

// Navbar active scrolling link starts
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
    }
  });
};
// Navbar active scrolling link ends

// Sticky navbar starts
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

// Sticky navbar ends

//Remove toogle icon and  toggle navbar when click on toggle navbar link stats

navIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

//Remove toogle icon and  toggle navbar when click on toggle navbar link ends



// Scroll PageReveal starts
ScrollReveal({
  reset: false,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.myImg, .project-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
// Scroll PageReveal Ends


// Contact Email Js starts
function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        number : document.getElementById("number").value,
        message : document.getElementById("message").value
    }
        emailjs.send("service_oqtco58", "template_la7m2dh", params)
        .then(() => {
            alert("Email Sent!!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        });
}
// Contact Email Js Ends