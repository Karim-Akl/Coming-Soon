export const createStars = () => {
  const stars = 50;
  const container = document.querySelector('.magic-stars');

  if (container) {  
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(star);
    }
  } else {
    console.error("Container for stars not found");
  }
};
