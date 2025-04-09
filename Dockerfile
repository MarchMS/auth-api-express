# Используем официальный Node.js образ
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем всё остальное
COPY . .

# Компилируем TypeScript
RUN npm run build

# Указываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["node", "dist/server.js"]