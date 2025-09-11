(function(){
  const form = document.getElementById('loginForm');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const showPass = document.getElementById('showPass');
  const msg = document.getElementById('formMessage');

  // показ/приховування пароля
  showPass.addEventListener('change', () => {
    password.type = showPass.checked ? 'text' : 'password';
  });

  function showError(input, message) {
    document.getElementById('err-' + input.id).textContent = message || '';
  }

  function validEmail(v){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = '';
    msg.className = '';

    let hasError = false;

    if (!firstName.value.trim() || firstName.value.trim().length < 2) {
      showError(firstName, "Ім'я має містити мінімум 2 символи.");
      hasError = true;
    } else showError(firstName, "");

    if (!lastName.value.trim() || lastName.value.trim().length < 2) {
      showError(lastName, "Прізвище має містити мінімум 2 символи.");
      hasError = true;
    } else showError(lastName, "");

    if (!email.value.trim() || !validEmail(email.value.trim())) {
      showError(email, "Введіть коректну email адресу.");
      hasError = true;
    } else showError(email, "");

    if (!password.value || password.value.length < 6) {
      showError(password, "Пароль має бути щонайменше 6 символів.");
      hasError = true;
    } else showError(password, "");

    if (hasError) {
      msg.textContent = "Будь ласка, виправте помилки у формі.";
      msg.className = "errors";
      return;
    }

    msg.textContent = `Успішно! Вітаємо, ${firstName.value.trim()} ${lastName.value.trim()}.`;
    msg.className = "success";
  });
})();
