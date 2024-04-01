// error.js - custom error messages

export const errorHandler = (statusCode, message) => {
    // Error() is a javascript constructor that creates a custom error
    const error = new Error();
    
    error.statusCode = statusCode;
    error.message = message;

    return error;
}