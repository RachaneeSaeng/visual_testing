FROM alekzonder/puppeteer

# RUN mkdir /app
WORKDIR /app

USER root

COPY package*.json .babelrc jest.config.js jest-css-modules-transform-config.js setupTests.js ./
# RUN npm ci
COPY . .
RUN npm uninstall jest-image-snapshot
RUN npm uninstall jsdom-screenshot
RUN npm install jest-image-snapshot
RUN npm install jsdom-screenshot
# ENTRYPOINT [ "npm", "install" ]
