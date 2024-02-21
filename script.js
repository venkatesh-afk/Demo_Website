/*Home Page Scroll Effect*/
let text = document.getElementById('text');
let left = document.getElementById('left');
let right = document.getElementById('right');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    right.style.left = value * 1.5 + 'px';
    left.style.left = value * -1.5 + 'px';
}
)

/*Responsive Navbar*/
var sidemenu = document.getElementById("sidemenu");
  
function openmenu(){
sidemenu.style.right = "0";
}
function closemenu(){
sidemenu.style.right = "-200px";
}