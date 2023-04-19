// const menuButton = document.getElementById("menu-button");
// const menuItems = document.querySelector(".menu-items");
// const menuIcon = document.querySelector(".menu-icon");

// menuButton.addEventListener("click", () => {
//   menuItems.classList.toggle("show");
//   menuIcon.classList.toggle("active");
// });

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

mobileMenuBtn.addEventListener('click', function() {
  this.classList.toggle('open');
});
function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}