module.exports = (error, reqest, replay) => {
    let status = error.statusCode || 500
    return replay.status(status).send({
        success: false,
        message: "something went wrong !"
    })
}