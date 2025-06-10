// Theme Toggle (Light, Dark, Auto)
const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;
    document.documentElement.setAttribute('data-color-scheme', mode);

    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Scroll shrink effect
// const zoomImg = document.querySelector('.zoom-screenshot');
// const container = document.getElementById('scroll-container');

// window.addEventListener('scroll', () => {
//   const containerRect = container.getBoundingClientRect();
//   const scrollProgress = Math.min(Math.max((window.innerHeight - containerRect.top) / window.innerHeight, 0), 1);

//   const scale = 1 - 0.5 * scrollProgress;
//   const translateY = 0 + 50 * scrollProgress;

//   zoomImg.style.transform = `translateX(-50%) translateY(${translateY}%) scale(${scale})`;
// });

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const siteNav = document.getElementById('site-nav');

hamburger.addEventListener('click', () => {
  siteNav.classList.toggle('active');
});