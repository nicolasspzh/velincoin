// Navigation state, the active "how it works" step and the copy buttons.
(function () {
  // Nav gets its solid background once the hero headline has scrolled under it
  var nav = document.getElementById('nav');
  var title = document.getElementById('hero-title');
  if (nav && title && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }, { rootMargin: '-64px 0px 0px 0px' }).observe(title);
  }

  // The step in the middle band of the screen is the active one
  var steps = document.querySelectorAll('.how-steps .step');
  if (steps.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        steps.forEach(function (s) { s.classList.toggle('is-active', s === entry.target); });
      });
    }, { rootMargin: window.innerWidth < 900 ? '-62% 0px -30% 0px' : '-45% 0px -45% 0px' });
    steps.forEach(function (s) { io.observe(s); });
  }

  // Copy buttons: data-copy holds the text, data-copy-target names an element
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.copy');
    if (!btn || !navigator.clipboard) return;
    var text = btn.getAttribute('data-copy');
    var target = btn.getAttribute('data-copy-target');
    if (target) text = document.getElementById(target).textContent.trim();
    var label = btn.querySelector('span');
    navigator.clipboard.writeText(text).then(function () {
      btn.classList.add('is-done');
      if (label) label.textContent = 'Kopiert';
      setTimeout(function () {
        btn.classList.remove('is-done');
        if (label) label.textContent = 'Kopieren';
      }, 1600);
    }, function () {
      if (label) label.textContent = 'Markieren und kopieren';
    });
  });
})();
