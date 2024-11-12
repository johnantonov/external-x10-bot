
FROM node:18-alpine

RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x ./node_modules/.bin/tsc

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN npm run build

CMD ["node", "dist/src/bot.js"]