exports.helper = async (queryName, model) => {
    // for country wise City
    const replaceWords = queryName.replace(/ /g, '%');
    const words = replaceWords.split("%");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    const propertyName = words.join(" ");
    const result = await model.find({name: propertyName});
    if (!result.length) {
        return {
            message: "No Data From This Input ! ",
            statusCode:400
        };
    }

    return {
        result: result,
        statusCode:200
    };
}