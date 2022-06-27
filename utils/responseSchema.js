const schema = {
    response: {
        200: {
            type: 'object',
            required: [
                "success",
                "result"
            ],
            properties: {
                success: { type: 'boolean',default: true },
                result: { type: 'array' }
            }
        },
        400:{
            type: 'object',
            required: [
                "success",
                "message"
            ],
            properties: {
                success: { type: 'boolean',default: false },
                message: { type: 'string' }
            }
        }
    }
}

exports.primarySchema = () => {
    return schema;
}

exports.secondarySchema = (name) => {
    const names = {};
    names[name] = {type: 'string'};
    schema['params'] = {
        type: 'object',
        properties:names
    }
    return schema;
}