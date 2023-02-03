const textError = document.getElementById('error');
const btnSubmit = document.getElementById('submit-btn');

btnSubmit.addEventListener('click', (event) => {
  const validatedEmail = document.getElementById('email').value;
  if (validatedEmail !== validatedEmail.toLowerCase()) {
    textError.innerHTML = 'Please type the email in lowercase';
    event.preventDefault();
  }
});