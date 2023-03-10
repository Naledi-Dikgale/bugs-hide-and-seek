const contactForm = document.querySelector('.$contact-form');
const contactError = document.querySelector('.contact-error');
const emailInput = document.querySelector('#email');


  function submitForm(event){
  if (emailInput.value !== emailInput.value.toLowerCase()){
    contactError.style.display = 'block';
    contactError.style.backgroundColor = 'red';
    contactError.textContent = "Email address should be lowercase";
    event.preventDefault();

  }