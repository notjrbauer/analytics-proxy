FROM node:6-onbuild

COPY . /app
WORKDIR /app

RUN npm install

# ENV vars
ENV PORT=3000
ENV DEBUG=*

EXPOSE 3000
#ENTRYPOINT ["node"]
#CMD ["index.js"]

