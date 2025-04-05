FROM node:18-alpine

# NestJS CLI 전역 설치
RUN npm install -g @nestjs/cli

WORKDIR /app

# 패키지 파일만 복사
COPY package.json .
COPY tsconfig.json .
COPY nest-cli.json .

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY src/ ./src/

# 개발 서버 실행
CMD ["npm", "run", "dev"]