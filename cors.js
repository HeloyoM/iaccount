const allowedOrigins = [
    "*"
]

const corsOptions = {
    origin: (origin, cb) => {
        console.log({ origin })
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            cb(null, true);
        } else {
            cb(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionSuccessStatus: 200,
};

module.exports = corsOptions;
