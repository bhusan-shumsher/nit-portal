FROM node:latest
WORKDIR /usr/app 
RUN apt-get update && apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2
RUN apt-get install -y fonts-indic
RUN apt-get install chromium -y
RUN apt-get install certbot -y
RUN apt-get install python3-certbot-nginx -y
RUN apt-get install certbot -y
RUN apt-get install python3-certbot-nginx -y
RUN certbot --nginx -d ncit.college -d www.ncit.college
COPY ./package.json ./
RUN npm install 
COPY ./ ./
EXPOSE 3000
CMD [ "npm","run","start" ]
