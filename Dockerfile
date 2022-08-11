FROM node:16-alpine
RUN mkdir -p /usr/app/
WORKDIR /usr/app
COPY ./ ./

# COPY package.json yarn.lock ./
RUN npm cache clean --force
RUN npm install -g npm@8.17.0
RUN npm install
RUN npm run build

#COPY next.config.js ./next.config.js
#  admin--> laptop directory and ./admin container directory
# COPY admin ./admin  
# COPY components ./components
# COPY database ./database
# COPY middlewars ./middlewares
# COPY pages ./pages
# COPY prisma ./prisma
# COPY  public ./public
# COPY scss ./scss
# COPY services ./services
# COPY src ./src
# COPY store ./store
# COPY styles ./styles
# COPY utils ./utils
# COPY validation ./validation
EXPOSE 3000
CMD ["yarn", "dev"]
