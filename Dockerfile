FROM node:14-buster
# RUN apt-get update && apt-get install -y apt-transport-https
# RUN apt-get install --yes curl
# RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -

# RUN apt-get install --yes nodejs
# RUN apt-get install --yes build-essential

WORKDIR /opt/ratemyanime/client

COPY package.json .

RUN npm cache clean --force
RUN npm install

COPY . ./

# EXPOSE 3000

# CMD [ "npm", "start" ]