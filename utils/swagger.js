const path = __dirname + '/swagger.json';
// exports.swaggerOptions = {
//     routePrefix: '/doc',
//     mode: 'static',
//     specification: {
//         path: path,
//         postProcessor: function (swaggerObject) {
//             return swaggerObject
//         }
//     },
//     // swagger: {
//
//         // info: {
//         //     title: ' Fastest Api for Countries, States, Cities',
//         //     description: 'Get Fastest Response from Our Api...',
//         //     version: '0.1.0'
//         // },
//         // externalDocs: {
//         //     url: 'https://swagger.io',
//         //     description: 'Find more info here'
//         // },
//         // host: '127.0.0.1:3000',
//         // schemes: ['http'],
//         // consumes: ['application/json'],
//         // produces: ['application/json']
//
//     // },
//     exposeRoute: true
// }


exports.swaggerOptions = {
    routePrefix:'/doc',
    mode: 'static',
    specification: {
        path: path,
    },
    exposeRoute: true
}