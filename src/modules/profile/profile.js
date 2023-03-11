export const profileTemplate = ` <div class="container profile">
    <div class="profile__header">
      <div class="profile__header-avatar"></div>
      <div class="profile__header-name" id="display_name">Иван</div>
    </div>
    <div class="profile__content">
      <div class="profile__content-item" id="email">Почта <span>pochta@yandex.ru</span></div>
      <div class="profile__content-item" id="login">Логин <span>ivanivanov</span></div>
      <div class="profile__content-item" id="first_name">Имя<span>Иван</span></div>
      <div class="profile__content-item" id="second_name">Фамилия<span>Иванов</span></div>
      <div class="profile__content-item" id="display_name">Имя в чате<span>Иван</span></div>
      <div class="profile__content-item" id="phone">Телефон<span>+7 (909) 967 30 30</span></div>
    </div>
    <div class="profile__footer">
      <a href="" class="profile__footer-settings">Изменить данные</a>
      <a href="" class="profile__footer-password">Изменить пароль</a>
      <a href="/login" class="profile__footer-close">Выйти</a>
    </div>
     <a class="return" href="/chat">
      <img src="/images/Group 202.png" alt="icon">
    </a>
  </div>`;
