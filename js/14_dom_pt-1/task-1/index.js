const body = document.querySelector('body');

// innerHTML 

body.innerHTML =
    `<form class="create-user-form">
      <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя" />
      </label>
      <label>
        Пароль
        <input
          type="password"
          name="password"
          placeholder="Придумайте Пароль"
        />
      </label>
      <button type="submit">Подтвердить</button>
    </form>`;

// document.createElement()

const form = document.createElement('form');
form.className = 'create-user-form';

const labelName = document.createElement('label');

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Введите ваше имя';

labelName.append('Имя', inputName);

const labelPassword = document.createElement('label');

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.name = 'password';
inputPassword.placeholder = 'Придумайте Пароль';

labelPassword.append('Пароль', inputPassword);

const buttonSubmit = document.createElement('button');
buttonSubmit.type = 'submit';
buttonSubmit.textContent = 'Подтвердить';

body.append(labelName, labelPassword, buttonSubmit);
