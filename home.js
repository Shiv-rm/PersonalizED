// Add functionality for smooth scrolling for the CTA buttons, if needed
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  });
  