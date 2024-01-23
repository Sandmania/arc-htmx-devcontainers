FROM mcr.microsoft.com/devcontainers/typescript-node
RUN apt update
RUN apt install -y awscli
RUN npm i -g @architect/architect aws-sdk
ENV AWS_PROFILE=architect