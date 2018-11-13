# loafer

Node.js/Express.js front end for Gofer2

See [https://github.com/bschiffthaler/gofer2](https://github.com/bschiffthaler/gofer2)

### Dependencies

* [Node.js](https://nodejs.org/en/) with [`npm`](https://www.npmjs.com/);

### Getting started

First clone the repo and set up all required node modules

```shell
git clone https://github.com/bschiffthaler/loafer
cd loafer
npm install
```

Now link (or copy) the same config file used for `Gofer2`. The config file or link
must be name `conf.json` and must be in the root of the `loafer` directory:

```shell
ln -s <path/to/gofer2/conf.json> conf.json
```

Now you can start `loafer` with:

```shell
npm start
```

`Loafer` will listen on port 3000 by default (if you need to change this, modify
the `bin/www` file accordingly. See line 18 in `bin/www`). If you have the config
option `key`, `cert` and `chain` set in the `gofer2` config file, `loafer` will
also run in ecrypted mode using the same certificates. If you want to change that,
you can modify `bin/www` in block L27-L34.