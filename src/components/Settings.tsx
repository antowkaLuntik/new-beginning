import "../css/settings.css";
import React from "react";

const settingsRowName: string[] = [
  "Аутентификация по умолчанию",
  "Хост",
  "Порт",
  "База для поиска",
  "Атрибут поиска",
  "Имя пользователя",
  "Пароль подключения",
];

const settingsRows = settingsRowName.map((rowName) => {
  return (
    <div className="settings__row" key={rowName}>
      {rowName}
      <input className="settings__field" />
    </div>
  );
});

interface Props {
  className: string;
  classTitle: string;
  classContent: string;
  value: string;
}

const Settings: React.FC<Props> = ({
  className,
  classTitle,
  classContent,
  value,
}) => {
  return (
    <div className={className}>
      <div className={classTitle}>
        <h3>{value}</h3>
      </div>
      <div className={classContent}>{settingsRows}</div>
    </div>
  );
};

export default Settings;
