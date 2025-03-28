1. Клонируем проект со всеми файлами с помощью 
    ```shell
    git clone https://github.com/AnTrald/my-shop.git
   ```
2. Устанавливаем все зависимости для запуска проекта
    ```shell
    npm install
   ```
3. Запускаем backend-сервер с mock-API на 3001 порту. 
    ```shell
    npx json-server --watch public/data.json --port 3001
   ```
    Там хранятся все данные о товарах, они доступны по ссылке `http://localhost:3001/products`.
4. Запускаем frontend-сервер.
    ```shell
    npm run dev
   ```
  По ссылке `http://localhost:5137/` можно взаимодействовать с нашим веб-сайтом.


   ![image](https://i.pinimg.com/736x/07/01/1e/07011eccd1f3c45d149441de527aa693.jpg)
