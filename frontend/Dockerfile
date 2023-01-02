FROM node:16.17-alpine3.16
WORKDIR /frontend
COPY . .
RUN npm run build --production
RUN npm install -g serve
EXPOSE 5000
CMD ["serve","-s","build"]