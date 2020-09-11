FROM node:12.0-alpine

WORKDIR  /var/www/express-docker

ENV PORT=3003

# RUN apk add --no-cache tini

COPY package.json package-lock.json* yarn.lock* ./

RUN npm install -g nodemon

# RUN chown -R node:node .

# USER node

RUN npm install && npm cache clean --force

COPY . .

# ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["nodemon", "app.js"]