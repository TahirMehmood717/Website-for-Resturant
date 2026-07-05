// ===== The Olive & Oak — shared behaviour =====

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Mark active nav link based on current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // Form handler — submits to Formspree via fetch, shows real success/error state
  // (Booking / Contact / Catering / Banquet inquiry forms all use this)
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    const success = form.querySelector('.form-success');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      if (success) { success.classList.remove('show', 'is-error'); }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          if (success) {
            success.textContent = "Thanks — we've received your message and will be in touch shortly.";
            success.classList.add('show');
            success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        if (success) {
          success.textContent = "Something went wrong sending this — please call us instead, or try again in a moment.";
          success.classList.add('show', 'is-error');
          success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.label || submitBtn.textContent; }
      }
    });
  });


  // Footer year
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
