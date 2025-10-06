FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
# Ensure data directory exists at runtime
RUN mkdir -p data
EXPOSE 3002
CMD ["node", "dist/main.js"]
