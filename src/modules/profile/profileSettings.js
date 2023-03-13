export const profileSettingsTemplate = `  <main class="container profile">
    <div class="profile__header">
      <div class="profile__header-avatar"></div>
      <div class="profile__header-name" id="display_name">Иван</div>
    </div>
    <form class="profile__settings">
      <div>
        <label for="email">Почта</label>
        <input class="profile__settings-item" type="email" placeholder="ivanivanov" name="email" id="email">
        </input>
      </div>
      <div>
        <label for="login">Логин</label>
        <input class="profile__settings-item" type="text" name="login" id="login" placeholder="ivanivanov"></input>
      </div>
      <div>
        <label for="first_name">Имя</label>
        <input class="profile__settings-item" type="text" name="first_name" id="first_name" placeholder="Иван"></input>
      </div>
      <div>
        <label for="">Фамилия</label>
        <input class="profile__settings-item" id="second_name" type="text" name="second_name"
          placeholder="Иванов"></input>
      </div>
      <div>
        <label for="display_name">Имя в
          чате</label>
        <input class="profile__settings-item" type="text" name="display_name" id="display_name"
          placeholder="Иван"></input>
      </div>
      <div>
        <label for="phone">Телефон</label>
        <input class="profile__settings-item" type="tel" name="phone" id="phone"
          placeholder="+7 (909) 967 30 30"></input>
      </div>
      <div class="profile__settings-button">
        <a href="/profile">
          <button type="button">Сохранить</button>
        </a>
      </div>
    </div>

    <a class="return" href="/chat">
      <img src="../../images/Group 202.png" alt="icon">
    </a>
  </main>`;
