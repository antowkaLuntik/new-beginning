import "../css/settings.css";

export default function Settings() {
    return(
        <div className="settings">
            <div className="head">
                <h3>Настройки</h3>
            </div>
            <div className="content">
                <div className="settings__row">
                    Аутентификация по умолчанию
                    <input className="settings__field"/>
                </div>
                <div className="settings__row">
                    Хост
                    <input className="settings__field"/>
                </div>
                <div className="settings__row">
                    Порт
                    <input className="settings__field"/>
                </div>
                <div className="settings__row">
                    База для поиска
                    <input className="settings__field"/>
                </div>
                <div className="settings__row">
                    Атрибут поиска
                    <input className="settings__field"/>
                </div>
                <div className="settings__row">
                    Имя пользователя
                    <input className="settings__field"/>
                </div>
                <div className="settings__row">
                    Пароль подключения
                    <input className="settings__field"/>
                </div>
            </div>
        </div>
    );
}