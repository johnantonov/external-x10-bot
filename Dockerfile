FROM node:18-alpine

# установка необходимых зависимостей для Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    font-noto-cjk \
    libx11 \
    libxcomposite \
    libxdamage \
    libxtst \
    libc6-compat \
    libxrandr \
    libxrender \
    mesa-gles \
    udev \
    dbus \
    ttf-dejavu

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x ./node_modules/.bin/tsc

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN npm run build

CMD ["node", "dist/src/bot.js"]