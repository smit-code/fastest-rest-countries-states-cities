exports.helper = async (queryName, model) => {

    // let dbName = require(`../model/${modelName}`);

    // for country wise City
    const replaceWords = queryName.replace(/ /g, '%');
    const words = replaceWords.split("%");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    const propertyName = words.join(" ");
    const result = await model.findOne({name: propertyName});

    if (!result) {
        return {
            success: false,
            message: "No Data From This Input ! "
        };
    }

    return {
        success: true,
        result: result
    };
}