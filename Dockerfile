FROM node:18 AS builder
WORKDIR /app

# Copiar archivos y construir el backend
COPY package*.json ./
RUN npm install
COPY . .

# Construir el frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

EXPOSE 3000

# Volver a la carpeta principal y ejecutar la app
WORKDIR /app
CMD ["node", "server.js"]

