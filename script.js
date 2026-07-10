const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-panel');
tabs.forEach((tab, i) => {
  if (i === 0) tab.classList.add('active');
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    panels.forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab)?.classList.add('active');
    window.scrollTo({ top: document.querySelector('.menu-tabs-wrap').offsetTop, behavior: 'smooth' });
  });
});

const categoryButtons = document.querySelectorAll('.order-category');
const orderCards = document.querySelectorAll('.order-card');
categoryButtons.forEach((button) => button.addEventListener('click', () => {
  categoryButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.orderCategory;
  orderCards.forEach((card) => {
    const categories = card.dataset.category || '';
    card.classList.toggle('hidden', category !== 'favorites' && !categories.includes(category));
  });
}));

const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkout = document.getElementById('checkout-link');
function renderCart() {
  if (!cartItems || !cartTotal) return;
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Your table is waiting. Add an item to begin.</p>';
  } else {
    cartItems.innerHTML = cart.map((item, index) => `<div class="cart-row"><strong>${item.name}</strong><span>$${item.price.toFixed(2)}</span><button type="button" data-remove="${index}">Remove</button></div>`).join('');
  }
  cartTotal.textContent = `$${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`;
  checkout?.classList.toggle('disabled', cart.length === 0);
  document.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => {
    cart.splice(Number(button.dataset.remove), 1);
    renderCart();
  }));
}
document.querySelectorAll('.add-item').forEach((button) => button.addEventListener('click', () => {
  cart.push({ name: button.dataset.item, price: Number(button.dataset.price) });
  renderCart();
  button.textContent = 'Added';
  window.setTimeout(() => { button.textContent = 'Add'; }, 900);
}));
renderCart();
