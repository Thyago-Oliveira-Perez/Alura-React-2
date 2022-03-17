FROM node:16.14.0 
WORKDIR /formulario-cadastro 
ARG PORT_BUILD=8000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . . 
RUN npm install 
ENTRYPOINT npm start 

#FROM node:16.14.0 definindo que vamos utilizar a versão 16.14.0 do node como base 
#WORKDIR /formulario-cadastro definindo o diretorio de trabalho padrao como /formulario-cadastro, ou seja, aonde vai rodar a aplicação
#ARG PORT_BUILD=8000 o ARG é utilizado em tempo de built do container como uma variavel
#ENV PORT=$PORT_BUILD passando a varivael definida no ARG para o ENV definimos uma nova variavel que ira persistir dentro do container, depois dela ja buildado 
#EXPOSE $PORT_BUILD com o EXPOSE eu estou dizendo que a porta $PORT_BUILD, predefinida no ARG, está exposta dentro do meu container para ser utilizada posteriormente pelo host
#COPY . .  copiando as arquivos do diretorio atual(primeiro ponto) para o diretorio que ira executar dentro do Docker(segundo ponto, que é o diretorio de trabalho padrao)
#RUN npm install esse comando vai ser executado enquanto a imagem estiver sendo criada
#ENTRYPOINT npm start quando o container for executado a partir da imagem esse comando vai ser executado 