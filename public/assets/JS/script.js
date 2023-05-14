let text = document.querySelector('.parallax_text');
let woman = document.querySelector('.woman');
window.addEventListener('scroll' , () =>{
    let value = window.scrollY;
    let s = this.scrollY;
    let w = this.outerWidth;
    let h = document.getElementsByClassName('parallax')[0].clientWidth;
    let h_b = document.getElementsByClassName('main_section')[0].clientWidth;
    let p = s/h*100;
    let p_b = s/h_b*100;
    let opas = 1-1/100*p_b;
    let z_1 = 1 + (w / 10000 * p_b);
    let hr_2 = w/1500*p_b;
    let hr = w/2000*p_b;
    let z_3 = 1+(w*0.000005*p_b);
    let z_4 = 1+(w*0.00001*p_b);
    text.style.marginRight = value * 2.5 + 'px';
   woman.style= `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
})
function changeBg(){
    let navbar = document.querySelector('.showcase_nav');
    let scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor')
    }
}
window.addEventListener('scroll' , changeBg);

let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.mobile_nav_link');
let colapse = document.querySelector('.colapse');
hamburger.addEventListener('click' , () =>{
    mobileNav.classList.add('reset')
})
colapse.addEventListener('click' , () =>{
    mobileNav.classList.remove('reset')
})