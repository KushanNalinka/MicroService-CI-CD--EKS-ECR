FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
ENV PORT=8003            
EXPOSE 8003
CMD ["node","Server.js"]

