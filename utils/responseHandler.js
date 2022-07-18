function prepareSuccessResponse(data, message) {
    return {
        success: true,
        data: { data: data },
        message: message,
    };
}

function prepareErrorResponse(message) {
    return {
        success: false,
        message: message,
    };
}

module.exports = {
    prepareSuccessResponse,
    prepareErrorResponse,
};
