# Usar una imagen de Node.js como base
FROM node:latest

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto en el que se ejecuta el servidor
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["npm", "start"]
