let navbar=document.querySelector('header')
let navbtn=document.querySelector('header nav ul li:last-child a')
const gap= 420;
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > gap || document.documentElement.scrollTop > gap ) {
        navbar.classList.add('scrolled')
        navbtn.setAttribute('id','navbtn')
        /* navbar.classList.remove('unscrolled') */

    } else {
        /* navbar.classList.add('unscrolled') */
        navbar.classList.remove('scrolled')
        navbtn.removeAttribute('id')
        
    }
}) 

console.log(document.body.scrollTop)
    

console.log(scrollY)


console.log(navbar.style.backgroundColor)