const btn = document.getElementById('submit-btn');

function addData() {
  const myData = {
    fullName: document.getElementById('full-name').value,
    userEmail: document.getElementById('email').value,
    textMessage: document.getElementById('textarea').value,
  };

  localStorage.setItem('userData', JSON.stringify(myData));
}
function retrieve() {
  const retrieveUser = JSON.parse(localStorage.getItem('userData'));

  document.getElementById('full-name').value = retrieveUser.fullName;
  document.getElementById('email').value = retrieveUser.userEmail;
  document.getElementById('textarea').value = retrieveUser.textMessage;
}

btn.addEventListener('click', addData);
window.addEventListener('DOMContentLoaded', () => {
  retrieve();
});
