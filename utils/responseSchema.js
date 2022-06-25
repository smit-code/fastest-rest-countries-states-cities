exports.schema = (name) => {
    const names = {};
    names[name] = {type: 'string'};
    console.log("names",names);
    return {
        params: {
            type: 'object',
            properties:names
        },
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
}