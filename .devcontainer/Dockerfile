# version
ARG VARIANT=15.13-buster-slim

# image
FROM node:${VARIANT}

# tools
RUN apt-get update && apt-get install -y \
  locales-all \
  emacs \
  git \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# 日本語化
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

# dotfiles
COPY .devcontainer/dotfiles/.emacs.d/init.el /root/.emacs.d/init.el

EXPOSE 4200
