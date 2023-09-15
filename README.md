# task_react_for-skilla

#Описание приложения "task_react_for-skilla"
Данное приложение позволяет просматривать блок с таблицей на основе дизайна из фигмы: https://www.figma.com/file/gvmxvc9SOiBIHmBxFkLlzy/Test-task-for-the-developer-(Copy)-(Copy)?node-id=0%3A1
а так же данных с бека по апи https://api.skilla.ru/testapi с тестовым токеном — testtoken

#Основные функции приложения:

- листинг звонков с выборкой по датам
- выбор входящих, исходящих или всех звонков
- проигрывание записи (если есть)
- сортировка на клиенте
- меню - статика без функционала, активный раздел "Звонки"

#Технические требования:
Приложение разработано с использованием react: "18.2.0", redux, typescript, axios, bootstrap, sass, nanoid.

#Установка зависимостей: После загрузки приложения на компьютер необходимо выполнить команду yarn install для установки всех зависимостей, необходимых для работы приложения.

#Запуск приложения: После установки зависимостей приложение можно запустить с помощью команды yarn start. Запущенное приложение будет доступно на локальном сервере.

#P.S.
1)время записанного разговора может оказываться неточным так как длительность самой записи переданной с бэка не совпадаетс с тем, что передано с данными по времени опять же с бэка;
2)т к с сервера приходили пустые аватарки заменил их рандомным выставлением с фигмы;
