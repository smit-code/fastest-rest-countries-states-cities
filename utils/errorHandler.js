module.exports = (error, reqest, replay) => {
    console.log(error);
    let status = error.statusCode || 500
    return replay.status(status).send({
        success: false,
        message: "something went wrong !"
    })
}