const nav= document.querySelector('.nav-menu');
const toggle= document.querySelector('.nav-toggle');
toggle.onclick=function() {
    nav.classList.toggle('show-nav');
}

//remove navbar

const navLink= document.querySelectorAll('.nav-link');
function linkActon(){
    const navMenu=document.querySelector('.nav-menu');
    navMenu.classList.remove('show-nav');
}
navLink.forEach(n=> n.addEventListener('click', linkActon));
// CHange Active Color
const linkColor= document.querySelectorAll('.nav-link');

function colorLink(){
    if(linkColor){
        linkColor.forEach(L=>L.classList.remove('active'));
        this.classList.add('active');
    }
}

linkColor.forEach(L=>L.addEventListener('click', colorLink));

function scrollHeader(){
    const scrollHeader=document.getElementById('hedaer')
    if(this.scrollY >= 200){
        scrollHeader.classList.add('scroll-header')
    }else{
        scrollHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader);