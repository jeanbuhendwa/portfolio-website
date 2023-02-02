const textError = document.getElementById('error');
const btnSubmit = document.getElementById('submit-btn');
const validEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

btnSubmit.addEventListener('click', (event) => {
  const validatedEmail = document.getElementById('email').value;
  if (!validEmail(validatedEmail)) {
    textError.innerHTML = 'Please type the email in lowercase';
    event.preventDefault();
  }
});