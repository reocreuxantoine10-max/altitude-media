export const scrollToSection = (target) => {
  window.dispatchEvent(new Event('altitude:reveal-content'));
  let attempts = 0;
  const scrollWhenReady = () => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    attempts += 1;
    if (attempts < 80) window.setTimeout(scrollWhenReady, 50);
  };
  scrollWhenReady();
};
