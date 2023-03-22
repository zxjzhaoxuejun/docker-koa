# 安装依赖
FROM node:16.13.0-alpine
WORKDIR /app
# 拷贝github上代码文件
COPY ..
RUN npm config set registry https://github.com/zxjzhaoxuejun/docker-koa.git && npm install && npm run prd
EXPOSE 9000
CMD npm start