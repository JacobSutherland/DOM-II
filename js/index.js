// Your code goes here
const busImg = document.querySelector('.intro img'); //mouseOver / mouseOut
const links = document.querySelector('nav'); //click
const logo = document.querySelector('.logo-heading')//dbl click
const boatImg = document.querySelector('.content-destination img'); //change width on window resize 
const mapImg = document.querySelector('.content-section').children[1].children[0]; 
const introText = document.querySelector('.intro p')
const letsGoText =  document.querySelector('.content-section').children[0].children[1];

busImg.addEventListener('mouseover', () => {
busImg.style.border = '2px solid black'
})

busImg.addEventListener('mouseout', () => {
busImg.style.border = '1px solid white'
})

links.addEventListener('click', (e) =>{
e.target.style.fontSize = '2.5rem';    
e.preventDefault();
});

logo.addEventListener('dblclick', () =>{
logo.style.color = 'red';

});

window.addEventListener('resize', () =>{
    boatImg.style.width ='50%';
    boatImg.style.marginLeft = '25%';
})

window.addEventListener('scroll', () =>{
    introText.style.color = 'red';
})

window.addEventListener('keydown', () => { 
    mapImg.src = '/img/fun.jpg'
})

window.addEventListener('keyup', () => {
    mapImg.src = '/img/adventure.jpg'
})

letsGoText.addEventListener('copy', () => {
    letsGoText.style.color  = 'blue';
})

window.addEventListener('wheel', () => {
    letsGoText.style.fontSize  = '3rem';
})
