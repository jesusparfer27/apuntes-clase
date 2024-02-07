const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  const a = section.querySelector('a');
  const content = section.querySelector('.content');

  a.addEventListener('click', (e) => {
    e.preventDefault();

    if (section.classList.contains('open')) {
      section.classList.remove('open');
    } else {
      sections.forEach((s) => {
        s.classList.remove('open');
      });

      section.classList.add('open');
    }
  });
});