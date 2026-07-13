(function () {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('closeMenu');

  if (!hamburger || !overlay || !closeBtn) return;

  hamburger.addEventListener('click', function () {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeMenu() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeMenu);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeMenu();
  });
})();
