FROM node:latest
EXPOSE 80
RUN mkdir /code
COPY package.json typings.json /code/
WORKDIR /code
RUN npm install --unsafe-perm=true --silent --depth 0
COPY . /code
CMD ["npm", "start"]