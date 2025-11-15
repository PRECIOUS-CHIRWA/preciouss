// Smooth scrolling for nav links
document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Highlight active section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60; // offset for header height
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Optional: Make navbar sticky when scrolling
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
