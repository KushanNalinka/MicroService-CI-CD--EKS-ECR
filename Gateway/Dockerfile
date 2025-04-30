

FROM node:18-alpine
WORKDIR /gateway
COPY package*.json ./
RUN npm ci --production
COPY . .
ENV PORT=80
EXPOSE 80
CMD ["node","server.js"]
