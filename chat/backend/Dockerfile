FROM node:alpine
WORKDIR /app
COPY server.js .
RUN npm install ws
CMD ["node", "server.js"]
