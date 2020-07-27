FROM node:8

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]