FROM alpine:3.16

RUN apk update && \
	apk upgrade && \
	apk add nodejs npm && \
	npm install --global yarn && \
	npm install -g @nestjs/cli

EXPOSE 3333

WORKDIR /srcs

CMD ["yarn", "start:dev"]
