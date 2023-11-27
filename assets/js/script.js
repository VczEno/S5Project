let navbar=document.querySelector('header')
console.dir(navbar)
navbar.addEventListener('scroll', changeColor)

function changeColor () {
    if(scrollY > 420) {
        navbar.style.backgroundColor='white';
    }
}   

console.log(scrollY)
console.log(navbar.style.backgroundColor)