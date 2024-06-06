document.addEventListener('DOMContentLoaded', function () {
  window.location.hash = '#start';

  const emailLink = document.getElementById('email-link');
  const emailAddress = 'azmandenta@gmail.com';
  const subject = 'Subject of the email';
  const body = 'Body of the email';

  emailLink.addEventListener('click', function (event) {
    event.preventDefault();
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  });
});
