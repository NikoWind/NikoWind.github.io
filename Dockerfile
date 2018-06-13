FROM docker.io/node:6.11
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
ADD . /www
WORKDIR /www
RUN cnpm install
CMD npm start
EXPOSE 3200