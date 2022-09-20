import "../css/settings.css";

export default function Settings() {
  const settingsRowName = [
    "Аутентификация по умолчанию",
    "Хост",
    "Порт",
    "База для поиска",
    "Атрибут поиска",
    "Имя пользователя",
    "Пароль подключения",
  ];
  const settingsRows = settingsRowName.map((settingsRowName) => (
    <div className="settings__row">
      {settingsRowName}
      <input className="settings__field" />
    </div>
  ));

  return (
    <div className="settings">
      <div className="head">
        <h3>Настройки</h3>
      </div>
      <div className="content">{settingsRows}</div>
    </div>
  );
}
