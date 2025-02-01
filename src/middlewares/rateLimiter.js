let rateLimiter = require("express-rate-limit");
let limiter = rateLimiter({
    windowMs: 100 * 600, 
    max: 150, 
    message: {
        status: "error",
        code: 429, 
        message: "Too many failed requests!",
    },
    headers: true,
});

export default limiter;