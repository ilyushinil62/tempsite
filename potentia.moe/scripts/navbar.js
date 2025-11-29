document.addEventListener('DOMContentLoaded', () => {
  const h2 = document.querySelector('h2.nav');
  const navItems = document.querySelectorAll('.navitem');

  // Create the highlight bar
  const highlight = document.createElement('div');
  highlight.classList.add('h2-highlight');
  h2.appendChild(highlight);

  navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      // Fade all, then un-fade the hovered item
      navItems.forEach(i => i.classList.add('faded'));
      item.classList.remove('faded');

      // Position the highlight to match the hovered navitem
      const rect = item.getBoundingClientRect();
      const h2Rect = h2.getBoundingClientRect();

      highlight.style.width = `${rect.width}px`;
      highlight.style.left = `${rect.left - h2Rect.left}px`;
      highlight.style.opacity = '1';
    });

    item.addEventListener('mouseout', () => {
      navItems.forEach(i => i.classList.remove('faded'));
      highlight.style.opacity = '0';
    });
  });
});
