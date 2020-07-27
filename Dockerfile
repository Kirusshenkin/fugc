FROM node:12.14.0-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

# RUN -c yarn build

EXPOSE 3000

CMD ["npm", "start"]