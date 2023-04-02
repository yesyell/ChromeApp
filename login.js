// 2. 로컬 스트리지를 사용한 로그인
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert('Logged in successfully!');
});

if (localStorage.getItem('username') && localStorage.getItem('password')) {
  usernameInput.value = localStorage.getItem('username');
  passwordInput.value = localStorage.getItem('password');
}
