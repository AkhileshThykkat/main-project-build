
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {

  if (usernameInput.value === 'akhilesh' && passwordInput.value === 'akhilesh') {
    //alert('Login successful!');

    window.location.href = 'dashboard.html';
  } else {
    alert('Username or password is incorrect.');
    window.location.href = 'index.html';
  }
});