(function () {

  if (typeof emailjs === 'undefined') {
    console.warn('EmailJS SDK not loaded.');
    return;
  }

  emailjs.init('PyK64lO2gpWY_gL6v');

  document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contact-form');

    if (!form) return;

    function getStatusEl() {

      let el = form.querySelector('.form-status');

      if (!el) {
        el = document.createElement('div');
        el.className = 'form-status';
        el.setAttribute('aria-live', 'polite');
        form.appendChild(el);
      }

      return el;
    }

    form.addEventListener('submit', function (event) {

      event.preventDefault();

      const statusEl = getStatusEl();

      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      emailjs.sendForm(
        'service_hshn4xu',
        'template_ndu8uoo',
        form
      )

      .then(function () {

        statusEl.textContent = 'Message sent successfully!';

        form.reset();

      })

      .catch(function (err) {

        console.error(err);

        statusEl.textContent =
          'Failed to send message. Please try again later.';

      })

      .finally(function () {

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }

        setTimeout(function () {
          statusEl.textContent = '';
        }, 5000);

      });

    });

  });

})();