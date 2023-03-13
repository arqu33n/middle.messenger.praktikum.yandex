export const loginTemplate = `<main class="container">
    <div class="login">
      <div class="login__header">Вход</div>
      <form method="get" class="login__form">
        <label for="login">Логин</label>
        <input type="text" class="login__form-input" placeholder="Ваш логин" name="login" id="login" required />
        <label for="password">Пароль</label>
        <input type="password" class="login__form-input" id="password" placeholder="Ваш пароль" />
        <div class="login__footer">
      <a href="/chat">
        <button type="button" class="login__footer-button">Войти</button>
        </a>
        <a class="login__footer-registration" href="/sign-in">{{loginText}}</a>
      </div>
      </form>    
    </div>
  </main>`;
