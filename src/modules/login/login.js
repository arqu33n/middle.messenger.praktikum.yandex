export const loginTemplate = `  <div class="container">
    <div class="login">
      <div class="login__header">Вход</div>
      <form class="login__form">
        <label for="login">Логин</label>
        <input type="text" class="login__form-input" placeholder="Ваш логин" name="login" id="login" required />
        <label for="password">Пароль</label>
        <input type="password" class="login__form-input" id="password" placeholder="Ваш пароль" />
      </form>
      <div class="login__footer">
        <button class="login__footer-button">Войти</button>
        <a class="login__footer-registration" href="/sign-in">Создать аккаунт</a>
      </div>
    </div>
  </div>`;
