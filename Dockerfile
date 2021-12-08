FROM node:16

WORKDIR /home/farzina/testdemo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node" , "src/index.js"]