function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Magnetic Effect for Profile Picture
const profilePic = document.querySelector('.profile-img'); // Updated selector
const magnetStrength = 10; // Adjust to control the magnetism strength
let isHovered = false;
let mouseX = 0, mouseY = 0;

// Track mouse position
document.addEventListener('mousemove', (event) => {
mouseX = event.clientX;
mouseY = event.clientY;
});

profilePic.addEventListener('mouseenter', () => {
isHovered = true;
requestAnimationFrame(animateMagneticEffect);
});

profilePic.addEventListener('mouseleave', () => {
isHovered = false;
profilePic.style.transform = 'translate(0, 0)'; // Reset position
});

function animateMagneticEffect() {
if (isHovered) {
  const rect = profilePic.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const x = centerX - mouseX;
  const y = centerY - mouseY;

  const distance = Math.sqrt(x * x + y * y);

  if (distance < 200) { // Only apply effect if mouse is close
    const deltaX = -x / magnetStrength;
    const deltaY = -y / magnetStrength;

    profilePic.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }
}

if (isHovered) {
  requestAnimationFrame(animateMagneticEffect);
}
}
