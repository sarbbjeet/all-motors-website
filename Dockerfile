FROM node:lts-slim AS build
# Create app directory
RUN apt-get update
# openssl package is missing from lts-slim node package 
RUN apt-get install -y openssl
# package for nc used in script.sh
RUN apt install -y netcat   
WORKDIR /app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json yarn.lock ./
COPY prisma ./prisma/
COPY script.sh ./
# Install app dependencies
#RUN npm install
RUN yarn install
COPY . ./
RUN yarn run build

# after build,change the node verison to alpine(light weight) 
FROM node:lts-slim
RUN apt-get update
RUN apt-get install -y openssl
# package for nc used in script.sh
RUN apt install -y netcat   

COPY --from=build /app/ ./

EXPOSE 3000
# 👇 new migrate and start app script
RUN chmod +x ./script.sh
# CMD [ "npm", "start" ]

CMD ["/bin/sh", "./script.sh"]