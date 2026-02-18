// Hide header on scroll down, show on scroll up
(() => {
  let lastScroll = 0;
  const header = document.querySelector('.site-header');
  if (!header) return;

  const threshold = 80;
  const onScroll = () => {
    const current = window.pageYOffset || document.documentElement.scrollTop;
    if (current <= 0) {
      header.classList.remove('hide');
      lastScroll = 0;
      return;
    }

    if (current > lastScroll && current > threshold) {
      // scrolling down
      header.classList.add('hide');
    } else if (current + window.innerHeight < document.body.scrollHeight || current < lastScroll) {
      // scrolling up
      header.classList.remove('hide');
    }

    lastScroll = current;
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});
})();
