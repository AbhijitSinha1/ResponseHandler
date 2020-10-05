# ResponseHandler

This module allows easier/cleaner way to handle HTTP JSON response.

## Installation

```shell
npm i -S handle-response
```

## Usage

```shell
RH = require('handle-response');

(req, res) => doSomething(req).then(RH.handleSuccess(res)).catch(RH.handleError(res));
```
