const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 0);
});

const listItems = document.getElementsByClassName('home');
console.log(listItems);

window.onscroll = () => {
  menubar.classList.remove('bx-x');
  navbar.classList.remove('open');
}