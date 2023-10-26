function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Add this code to Script.js
const profilePic = document.querySelector('.section__pic-container img');
const magnetStrength = 10; // Adjust this value to control the strength of the magnetism
let isHovered = false;

profilePic.addEventListener('mouseenter', () => {
  isHovered = true;
  requestAnimationFrame(animateMagneticEffect);
});

profilePic.addEventListener('mouseleave', () => {
  isHovered = false;
});

function animateMagneticEffect() {
  if (isHovered) {
    const centerX = profilePic.getBoundingClientRect().left + profilePic.offsetWidth / 2;
    const centerY = profilePic.getBoundingClientRect().top + profilePic.offsetHeight / 2;

    const x = centerX - mouseX;
    const y = centerY - mouseY;

    const distance = Math.sqrt(x * x + y * y);

    if (distance < 200) {
      const deltaX = -x / magnetStrength;
      const deltaY = -y / magnetStrength;

      profilePic.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  } else {
    profilePic.style.transform = 'translate(0, 0)';
  }

  if (isHovered) {
    requestAnimationFrame(animateMagneticEffect);
  }
}

let mouseX, mouseY;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


