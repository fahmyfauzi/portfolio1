(function () {
  emailjs.init('5M08LVCxiksW5Mxq2');
})();

window.onload = function () {
  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_h47f9pv', 'template_yl1iy1o', this).then(
      function () {
        contactForm.reset();
        submitButton.classList.add('ease-in-out', 'duration-500');
        submitButton.textContent = 'Send message successfully';
        submitButton.classList.add('bg-slate-800', 'dark:bg-slate-100', 'dark:text-dark');
        submitButton.classList.remove('bg-primary', 'hover:opacity-80', 'hover:shadow-lg');
        submitButton.disabled = true;

        console.log('SUCCESS!');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  });
};
