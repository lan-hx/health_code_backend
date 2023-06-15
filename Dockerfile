FROM node:latest
LABEL authors="lan"

WORKDIR '/app'
COPY '.' '.'
RUN npm install
EXPOSE 8080

ENTRYPOINT ["/bin/bash", "-c"]
WORKDIR '/app'
CMD ["npm start"]