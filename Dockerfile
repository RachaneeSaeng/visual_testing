FROM alekzonder/puppeteer

WORKDIR /app

COPY package*.json .babelrc jest.config.js jest-css-modules-transform-config.js setupTests.js ./
COPY . .