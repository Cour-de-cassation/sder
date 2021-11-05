export { convertKeysToLowerCase };
function convertKeysToLowerCase(obj) {
    var output = {};
    for (var i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
            output[i.toLowerCase()] = convertKeysToLowerCase(obj[i]);
        }
        else if (Object.prototype.toString.apply(obj[i]) === '[object Array]') {
            if (output[i.toLowerCase()] === undefined) {
                output[i.toLowerCase()] = [];
            }
            output[i.toLowerCase()].push(convertKeysToLowerCase(obj[i][0]));
        }
        else {
            output[i.toLowerCase()] = obj[i];
        }
    }
    return output;
}
