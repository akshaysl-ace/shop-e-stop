export const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

export const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Check for mongoose bad ObjectId
    if (err.name === "CastError" && err.kind === "ObjectId") {
        message = "Rource not found !";
        statusCode = 404;
    }

    res.status(statusCode).json({ message, stack: process.env.NODE_ENV === "production" ? 'Unknown error ! Contact Admin.' : err.stack })
}