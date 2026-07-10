const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
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
document.getElementById('year').textContent = new Date().getFullYear();

const tabs=document.querySelectorAll('.menu-tab');const panels=document.querySelectorAll('.menu-panel');tabs.forEach((tab,i)=>{if(i===0)tab.classList.add('active');tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));panels.forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.tab)?.classList.add('active');window.scrollTo({top:document.querySelector('.menu-tabs-wrap').offsetTop,behavior:'smooth'});});});
