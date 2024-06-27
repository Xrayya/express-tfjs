FROM oven/bun:latest
# FROM node:lts-iron

WORKDIR /app

ENV PORT=3000
ENV MYSQL_DB_HOST=34.50.71.246 
ENV MYSQL_DB_USER=root
ENV MYSQL_DB_PASSWORD=Rahasia01
ENV MYSQL_DB_NAME=qflare
ENV JWT_SECRET=eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxODc4OTc3MiwiaWss*F0IjoxNzE4Nzg5NzcyfQ.HrETTsyY8LhXFNtuH6uY7avOJHIQOnoKEHw5-0v1FCM
ENV ML_API_BASE_URL=https://mlbackend-zmweai4oka-et.a.run.app
ENV GCP_BUCKET_NAME=qflareuserimages
ENV GCP_PROJECT_ID=qflarecapstoneproject 
ENV GCP_KEYFILE_PATH=./keyfile_prod.json

COPY . .

RUN bun install
# RUN npm install && npm run build:node

EXPOSE 3000

CMD ["bun", "run", "src/index.ts"]
# CMD ["npm", "start"]

