(function () {
  // Defer-safe initialization: make sure elements exist before using them.
  const modeSwitch = document.getElementById('mode-switch');
  const sun = document.getElementById('Sun');
  const moon = document.getElementById('Moon');
  let isAnimating = false;

  const enableDarkmode = () => {
    if (isAnimating) return;
    isAnimating = true;
    
    // Add rotating animation to the button
    if (modeSwitch) modeSwitch.classList.add('rotating');
    
    // Add theme changing class for smooth color transition
    document.body.classList.add('theme-changing');
    
    setTimeout(() => {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'active');
      if (moon) moon.style.display = 'block';
      if (sun) sun.style.display = 'none';
      
      // Remove classes after animation completes
      setTimeout(() => {
        if (modeSwitch) modeSwitch.classList.remove('rotating');
        document.body.classList.remove('theme-changing');
        isAnimating = false;
      }, 500);
    }, 250);
  };

  const disableDarkmode = () => {
    if (isAnimating) return;
    isAnimating = true;
    
    // Add rotating animation to the button
    if (modeSwitch) modeSwitch.classList.add('rotating');
    
    // Add theme changing class for smooth color transition
    document.body.classList.add('theme-changing');
    
    setTimeout(() => {
      document.body.classList.remove('dark-mode');
      localStorage.removeItem('dark-mode');
      if (moon) moon.style.display = 'none';
      if (sun) sun.style.display = 'block';
      
      // Remove classes after animation completes
      setTimeout(() => {
        if (modeSwitch) modeSwitch.classList.remove('rotating');
        document.body.classList.remove('theme-changing');
        isAnimating = false;
      }, 500);
    }, 250);
  };

  // Restore state if previously enabled (no animation on page load)
  const darkmode = localStorage.getItem('dark-mode');
  if (darkmode === 'active') {
    document.body.classList.add('dark-mode');
    if (moon) moon.style.display = 'block';
    if (sun) sun.style.display = 'none';
  }

  // Only add the listener if the switch exists (defensive)
  if (modeSwitch) {
    modeSwitch.addEventListener('click', () => {
      const current = localStorage.getItem('dark-mode');
      if (current !== 'active') {
        enableDarkmode();
      } else {
        disableDarkmode();
      }
    });
  }
})();