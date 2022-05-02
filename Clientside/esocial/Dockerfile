FROM node
WORKDIR /app 
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 

EXPOSE 5000

CMD [ "yarn","start" ]


