const revealNodes = document.querySelectorAll('.reveal');
const counterNodes = document.querySelectorAll('[data-counter]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealNodes.forEach((node) => revealObserver.observe(node));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.getAttribute('data-counter'));
      let value = 0;
      const step = Math.ceil(target / 60);

      const timer = setInterval(() => {
        value += step;
        if (value >= target) {
          value = target;
          clearInterval(timer);
        }
        el.textContent = `${value}+`;
      }, 24);

      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.45 }
);

counterNodes.forEach((node) => counterObserver.observe(node));
