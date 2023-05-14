FROM node:18.2-alpine3.15
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm install 
RUN npm run build
RUN npm install -g serve

EXPOSE 80
CMD ["serve", "-s", "build","-l","80"]