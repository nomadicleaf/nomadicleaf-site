function toggleMenu(){
  const m = document.getElementById('menu');
  const b = document.querySelector('.nav__toggle');
  const open = m.style.display === 'block';
  m.style.display = open ? 'none' : 'block';
  b.setAttribute('aria-expanded', String(!open));
}
document.getElementById('year').textContent = new Date().getFullYear();
