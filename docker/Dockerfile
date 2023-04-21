FROM fedora

RUN dnf update -y && dnf install -y nodejs git 

WORKDIR /build

RUN git clone https://github.com/nicolasDelhomme/loafer

WORKDIR /build/loafer

ADD conf.json conf.json

RUN npm install

VOLUME /share

RUN ln -sf /share/conf.json conf.json

CMD ["npm", "start"]
