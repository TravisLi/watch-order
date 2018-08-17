FROM node:argon

RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime && \
    apk del tzdata && \
    rm -rf /var/cache/apk/*

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8100
CMD [ "ionic", "serve", "--prod" ]