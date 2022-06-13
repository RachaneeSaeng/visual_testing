FROM alekzonder/puppeteer

USER root

WORKDIR /app

COPY package*.json .babelrc jest.config.js jest-css-modules-transform-config.js setupTests.js testsScript.sh ./
# COPY . .
RUN chmod +x testsScript.sh
ENTRYPOINT [ "/app/testsScript.sh" ]