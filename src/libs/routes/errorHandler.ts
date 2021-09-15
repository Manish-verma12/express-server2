const errorHandler = (err, req, res, next) =>{
    console.log('res.headersSent' , res.headersSent);


if(res.headersSent){
    console.log('hello');
    return next(err);
}
    const {message, status, error} = err;
    const errorResponse = {
    error: error || "Not Found",
    message: message || "error",
    status: status || 500,
    timestamp: new Date(),
    };
    res.status(errorResponse.status).json(errorResponse);
}
export default errorHandler;