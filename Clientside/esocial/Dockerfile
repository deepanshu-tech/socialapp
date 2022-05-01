FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install -g
COPY . . 
EXPOSE 5000
CMD [ "npm","start" ]


