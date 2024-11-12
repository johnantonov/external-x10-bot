FROM node:18-alpine
WORKDIR /usr/src/app

# Установим зависимости для wkhtmltopdf
RUN apk --no-cache add \
    wkhtmltopdf \
    ttf-freefont \
    fontconfig

# Установка зависимостей проекта
COPY package*.json ./
RUN npm install

# Копируем исходный код и собираем проект
COPY . .
RUN chmod +x ./node_modules/.bin/tsc
RUN npm run build

# Запуск бота
CMD ["node", "dist/src/bot.js"]