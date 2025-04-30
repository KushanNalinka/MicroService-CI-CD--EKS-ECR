FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
ENV PORT=8004            
EXPOSE 8004
CMD ["node","Server.js"]

