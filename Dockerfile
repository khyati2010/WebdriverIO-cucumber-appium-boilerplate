FROM node:10.16.0-stretch-slim

EXPOSE 5555

WORKDIR /app
ADD . /app
RUN npm i

CMD ["npm", "run", "test:features"]
