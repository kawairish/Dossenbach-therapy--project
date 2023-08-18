// var navbar = document.querySelector(".navbar")

// window.onscroll = function(){
//     if(window.scrollY > 0) {
//         navbar.style.backgroundColor = "white";
//         navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
//     } else{
//         navbar.style.backgroundColor = "transparent";
//         navbar.style.boxShadow = "none";
//     }
// };

// navbar.addEventListener("onscroll, navbar")


// let navbar = document.querySelector('.navbar')

// navbar.style.backgroundColor = 'transparent';

// let open = false;

// function navMenu(){
//     if(open == false){
//         navbar.style.backgroundColor = 'white';
//         navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
//         open = true
//     } else {
//         navbar.style.backgroundColor = 'transparent';
//         navbar.style.boxShadow = "none";
//         open = false
//     }
// }

// navbar.addEventListener("onscroll", navMenu)

let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = "none";
    }
});

var mySpan = document.getElementById('.my-span');
mySpan.addEventListener('click', function() {
    console.log('Span clicked!');
});



var mySpan = document.getElementById('mySpan');
mySpan.addEventListener('click', function() {
console.log('Span clicked!');
var smallestNumber = 1;
var highestNumber = 160;
// Your code to use the smallest number as 1 and highest as 160 goes here
});



// button.addEventListener('click', function() {
//     console.log('Button clicked!');
//   });

// let individualBtn = document.getElementById('.individual-btn');
// individualBtn.addEventListener('click', function() {
//     window.location.href = './con';
// });

