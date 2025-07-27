const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Enable dropdowns on mobile
dropdowns.forEach(drop => {
  drop.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent immediate navigation
      this.classList.toggle('active');
    }
  });
});
