FROM node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8100

RUN ls

ENTRYPOINT [ "cd", "/usr/src/app" ]
CMD [ "ionic", "serve", "--prod" ]