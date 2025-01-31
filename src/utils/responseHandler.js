exports.PositiveRes = (message, data = {}) => ({
    status: "Good",
    code : 200,
    message,
    data

});
exports.NegativeRes = (message, error = null) => ({
    status : "error",
    code : 400,
    message,
    errors : error ? {details: error.message || error
     } : null
});