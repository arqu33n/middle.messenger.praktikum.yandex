export const signinTemplate = `<div class="container">
    <div class="signin">
      <div class="signin__header">Регистрация</div>
      <form class="signin__form">
        <label for="email">Почта</label>
        <input type="email" class="signin__form-input" placeholder="Ваша почта" name="email" id="email" required />
        <label for="login">Логин</label>
        <input type="text" class="signin__form-input" placeholder="Ваш логин" name="login" id="login" required />
        <label for="first_name">Имя</label>
        <input type="text" class="signin__form-input" placeholder="Ваше имя" name="first_name" id="first_name"
          required />
        <label for="second_name">Фамилия</label>
        <input type="text" class="signin__form-input" placeholder="Ваша фамилия" name="second_name" id="second_name"
          required />
        <label for="phone">Телефон</label>
        <input type="phone" class="signin__form-input" placeholder="Номер телефона" name="phone" id="phone" required />
        <label for="password">Пароль</label>
        <input type="password" class="signin__form-input" id="password" placeholder="Ваш пароль" />
        <label for="password">Пароль еще раз</label>
        <input type="password" class="signin__form-input" id="password" placeholder="Ваш пароль" />
      </form>
      <div class="signin__footer">
        <button class="signin__footer-button">Зарегистрироваться</button>
        <a class="signin__footer-registration" href="/login">{{signinText}}</a>
      </div>
    </div>
  </div>`;
