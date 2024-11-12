FROM node:18-bullseye
WORKDIR /usr/src/app

# Устанавливаем wkhtmltopdf и его зависимости
RUN apt-get update && \
    apt-get install -y \
    wkhtmltopdf \
    xfonts-75dpi \
    xfonts-base && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Установка зависимостей проекта
COPY package*.json ./
RUN npm install

# Копируем исходный код и собираем проект
COPY . .
RUN chmod +x ./node_modules/.bin/tsc
RUN npm run build

# Запуск бота
CMD ["node", "dist/src/bot.js"]
