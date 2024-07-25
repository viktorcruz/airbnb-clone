FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package*.json ./

RUN npm install --only=production --legacy-peer-deps

EXPOSE 3000

CMD ["node", "server.js"]