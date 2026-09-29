/* Silva & Araújo Advogados — main.js */

(function () {
  'use strict';

  // Header scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Reveal on scroll
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }

  // Carrossel "Quem somos"
  document.querySelectorAll('.who-carousel').forEach((carousel) => {
    const items = carousel.querySelectorAll('.who-slide-item');
    const dots = carousel.querySelectorAll('.who-dot');
    const prev = carousel.querySelector('.who-nav.prev');
    const next = carousel.querySelector('.who-nav.next');
    if (!items.length) return;
    let idx = 0;
    let timer = null;

    const show = (i) => {
      items.forEach((el, k) => el.classList.toggle('active', k === i));
      dots.forEach((el, k) => el.classList.toggle('active', k === i));
      idx = i;
    };

    const step = (dir) => {
      show((idx + dir + items.length) % items.length);
      restart();
    };
    const restart = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => show((idx + 1) % items.length), 6000);
    };

    show(0);
    restart();
    if (prev) prev.addEventListener('click', () => step(-1));
    if (next) next.addEventListener('click', () => step(1));
    dots.forEach((dot, k) => dot.addEventListener('click', () => { show(k); restart(); }));
  });

  // ================================================
  // Micro-interações: parallax leve + tilt suave
  // ================================================
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    // Parallax leve em imagens/blocos com [data-parallax]
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    if (parallaxEls.length && 'requestAnimationFrame' in window) {
      let ticking = false;
      const update = () => {
        const vh = window.innerHeight;
        parallaxEls.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > vh) return;
          const speed = parseFloat(el.dataset.parallax) || 0.15;
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          const offset = -progress * 40 * speed;
          el.style.setProperty('--parallax-y', offset.toFixed(2) + 'px');
        });
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      update();
    }

    // Tilt 3D leve em cards que aceitam
    const tiltEls = document.querySelectorAll('.area-card, .service-card, .team-card, .eligibility-card');
    tiltEls.forEach((el) => {
      let rafId = null;
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          el.style.transform = `translateY(-4px) perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
        });
      };
      const onLeave = () => {
        if (rafId) cancelAnimationFrame(rafId);
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  // Carrossel "Quem somos"
  document.querySelectorAll('.who-carousel').forEach((carousel) => {
    const items = carousel.querySelectorAll('.who-slide-item');
    const dots = carousel.querySelectorAll('.who-dot');
    const prev = carousel.querySelector('.who-nav.prev');
    const next = carousel.querySelector('.who-nav.next');
    if (!items.length) return;
    let idx = 0;
    let timer = null;

    const show = (i) => {
      items.forEach((el, k) => el.classList.toggle('active', k === i));
      dots.forEach((el, k) => el.classList.toggle('active', k === i));
      idx = i;
    };

    const step = (dir) => {
      show((idx + dir + items.length) % items.length);
      restart();
    };
    const restart = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => show((idx + 1) % items.length), 6000);
    };

    show(0);
    restart();
    if (prev) prev.addEventListener('click', () => step(-1));
    if (next) next.addEventListener('click', () => step(1));
    dots.forEach((dot, k) => dot.addEventListener('click', () => { show(k); restart(); }));
  });

  // Ano no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
