# Imagen base
FROM node:18-slim

# Crear directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./
RUN npm install

COPY index.js index.js

# Exponer el puerto
EXPOSE 3000

# Comando para correr la app
CMD ["node", "index.js"]
