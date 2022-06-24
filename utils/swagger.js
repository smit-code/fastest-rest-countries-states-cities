exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: String,
            description: String,
            version: String
        },
        externalDocs: Object,
        host: String,
        schemes: [ String ],
        consumes: [ String ],
        produces: [ String ],
        tags: [ Object ],
        securityDefinitions: Object
    },
}