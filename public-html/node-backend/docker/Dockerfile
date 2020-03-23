FROM node:12-alpine
LABEL maintainer idiots718 <idiots718@gmail.com>

WORKDIR /app

# Setup timezone data.
RUN apk --no-cache update && \
    apk --no-cache upgrade && \
    apk --no-cache add tzdata

COPY ./scripts /scripts
RUN find /scripts -type f -iname "*.sh" -exec chmod a+x {} \;

EXPOSE 3000

ENTRYPOINT ["/scripts/entrypoint.sh"]
# CMD [ "npm", "start" ]
