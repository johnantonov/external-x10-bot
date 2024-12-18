FROM node:18-bullseye

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y \
    wkhtmltopdf \
    xfonts-75dpi \
    xfonts-base \
    libxrender1 \
    libjpeg62-turbo && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x ./node_modules/.bin/tsc
RUN npm run build

CMD ["node", "dist/src/services/reportService.js"]