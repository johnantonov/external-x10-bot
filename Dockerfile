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

RUN rm ./src/services/reportService.ts

RUN chmod +x ./node_modules/.bin/tsc 
RUN npm run build

RUN rm -rf ./src/report


ENV XDG_RUNTIME_DIR=/tmp/runtime
RUN mkdir -p /tmp/runtime && chmod 700 /tmp/runtime

CMD ["node", "dist/src/bot.js"]