# مرحله build
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# مرحله production
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# کپی فایل پیکربندی Nginx (اختیاری)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
