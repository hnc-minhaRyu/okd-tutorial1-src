FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN npm install --production --silent && mv node_modules ../
RUN npm install react-scripts@2.1.3 -g --slient
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
LABEL key="NewBlog"
