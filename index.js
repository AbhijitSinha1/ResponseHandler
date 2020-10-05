const handleResponse = (res) => (message, error, status) =>
  res.status(status).send({ message, error, status });

const handleSuccess = (res) => (data, status = 200) =>
  handleResponse(res)(data, null, status);

const handleError = (res) => (error, status = 500) =>
  handleResponse(res)(null, error, status);

module.exports = { handleSuccess, handleError };
