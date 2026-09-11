
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.writing-item');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    items.forEach(item => {
      item.style.display = filter === 'all' || item.dataset.type === filter ? 'grid' : 'none';
    });
  });
});

document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('mobile-open');
});
