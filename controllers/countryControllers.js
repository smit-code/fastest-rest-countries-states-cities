let Country = require('../model/country')

exports.getCountries = (req, reply) => {
    try {
        let countries = Country.find();

        return reply.send(countries);
    } catch (e) {
        console.log(e);
    }
}

// exports.getCountry = (req, reply) => {
//     try {
//         const {id} = req.params;
//
//         const country = Country.find(id);
//
//         return reply.send(country);
//     } catch (e) {
//         console.log(e);
//     }
//
// }