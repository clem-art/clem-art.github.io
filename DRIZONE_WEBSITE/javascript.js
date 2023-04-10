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
