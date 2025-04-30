FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
ENV PORT=8001            
EXPOSE 8001
CMD ["node","Server.js"]
