# ResponseHandler

This module allows easier/cleaner way to handle HTTP JSON response.

## Installation

```shell

```

## Usage

```shell
RH = require();

(req, res) => doSomething(req).then(RH.handleSuccess(res)).catch(RH.handleError(res));
```
