FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
ENV PORT=8002            
EXPOSE 8002
CMD ["node","Server.js"]
