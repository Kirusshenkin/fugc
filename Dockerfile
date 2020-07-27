FROM node:10

WORKDIR /public

COPY package.json yarn.lock /public/

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]