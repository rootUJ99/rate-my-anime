FROM node:13.12.0-buster

RUN apt-get update && apt-get install apt-file -y && apt-file update

WORKDIR /opt/ratemyanime/client

COPY package.json .
RUN ls; pwd;
RUN npm --version; 
RUN node --version; 

RUN npm install

COPY . ./

EXPOSE 3000

CMD [ “npm”, “start” ] 