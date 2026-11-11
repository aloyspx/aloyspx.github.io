(() => {
  const filters = document.querySelector('[data-publication-filters]');
  if (filters) {
    const buttons = [...filters.querySelectorAll('button[data-filter]')];
    const rows = [...document.querySelectorAll('[data-publication-category]')];
    const status = document.querySelector('[data-filter-status]');
    filters.hidden = false;
    const filter = (category) => {
      let visible = 0;
      rows.forEach(row => {
        row.hidden = category !== 'all' && row.dataset.publicationCategory !== category;
        if (!row.hidden) visible++;
      });
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
      if (status) status.textContent = `${visible} publication${visible === 1 ? '' : 's'}${visible === 0 ? ' — try another category.' : ''}`;
    };
    buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter)));
    filter('all');
  }
  const printButton = document.querySelector('[data-print-cv]');
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
  }
})();
