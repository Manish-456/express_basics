const allowedOrigins = [
  "https://yoursite.com",
  "https://www.yoursite.com"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      return callback(null, true);
    }
    return callback(new Error("Blocked by cors ⚠"));
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
