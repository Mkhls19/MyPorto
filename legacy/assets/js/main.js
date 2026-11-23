// Main JavaScript - Portofolio Muhlisin

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scroll Active Navigation Highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= (sectionTop - 180)) {
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

  // 2. Sound Toggle Button
  const soundBtn = document.getElementById('soundToggle');
  if (soundBtn) {
    let isMuted = false;
    soundBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      soundBtn.style.color = isMuted ? '#64748b' : '#38bdf8';
    });
  }

  // 3. Form Submit Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;

      const subject = encodeURIComponent(`Pesan Portofolio dari ${name}`);
      const body = encodeURIComponent(`Halo Muhlisin,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
      window.location.href = `mailto:andikfirmansyah.dev@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
