FROM alekzonder/puppeteer

# RUN mkdir /app
WORKDIR /app

COPY package*.json .babelrc jest.config.js jest-css-modules-transform-config.js setupTests.js ./
RUN npm ci
COPY . .
