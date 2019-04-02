# MyQueue - Task in background

Calling queue.create() with the type of job ("process"), and arbitrary job data will return a Job , which can then be save() ed, adding it to redis, with a default priority.

### Installation

QUEUE requires [Node.js](https://nodejs.org/) v8+

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/brunoflegler/request-queue request-queue
$ cd api-vuttr
```

Installation is done using the npm install command:

```sh
$ npm install
```
Or run Yarn install command:

```sh
$ yarn install
```
### Test

To run the test suite, first install the dependencies, then run npm test:

```sh
$ npm test
```
Or run Yarn:

```sh
$ yarn test
```

### Run development

Run NPM development:

```sh
$ npm run dev
```

Or run Yarn development:

```sh
$ yarn dev
```
