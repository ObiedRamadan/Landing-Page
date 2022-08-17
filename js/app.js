/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
var sec=document.querySelectorAll("section");
var links=document.querySelectorAll(".links");
var btn=document.getElementById("toggle");

/**
 * Define Global Variables
 * 
*/
document.getElementById("sec1").innerHTML="SECTION1";
document.getElementById("sec2").innerHTML="SECTION2";
document.getElementById("sec3").innerHTML="SECTION3";
document.getElementById("sec4").innerHTML="SECTION4";

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function scrolling() {
    var length=sec.length;
    
        while (--length && window.scrollY + 80 <sec[length].offsetTop) {}
        links.forEach(activ => activ.classList.remove("active"));
        links[length].classList.add("active");
        sec.forEach(lay => lay.classList.remove("layer"));
        sec[length].classList.add("layer");
    
    // console.log(window.scrollY)
}
scrolling();
window.addEventListener("scroll",scrolling);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// btn.addEventListener("click",function(){
//     if (){
        
//     }
// })

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
let scroll = new SmoothScroll('.navbar__menu a[href*="#"]',{
    speed:1000
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
