const path = __dirname + '/swagger.json';
exports.swaggerOptions = {
    routePrefix:'/doc',
    mode: 'static',
    specification: {
        path: path,
    },
    exposeRoute: true
}