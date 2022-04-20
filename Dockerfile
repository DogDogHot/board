# Base 이미지를 nodeJS alpine 버전으로 사용
FROM node:16-alpine

# 작업 디렉토리 전환
WORKDIR /usr/src/app

# package.json 파일을 현재 워킹 디렉토리에 복사 
COPY package*.json ./

# local machine 에서 npm install 실행 
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]