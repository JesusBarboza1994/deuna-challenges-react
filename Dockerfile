# Imagen base
FROM node:latest

# Establece el directorio de trabajo en la carpeta "app"
WORKDIR /src

# Copia archivos necesarios
COPY package*.json ./
COPY package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]