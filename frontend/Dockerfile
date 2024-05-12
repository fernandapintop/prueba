# Etapa de construcción
FROM node:latest as build

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación Vite para producción
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos estáticos generados durante la etapa de construcción
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando predeterminado para ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

