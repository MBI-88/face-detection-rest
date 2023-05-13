FROM node:16.17-alpine3.16
WORKDIR /frontend
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm install 
RUN npm run build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]