export { convertKeysToLowerCase };

function convertKeysToLowerCase(obj) {
  const output = {};
  for (const i in obj) {
    if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
      output[i.toLowerCase()] = ConvertKeysToLowerCase(obj[i]);
    } else if (Object.prototype.toString.apply(obj[i]) === '[object Array]') {
      if (output[i.toLowerCase()] === undefined) {
        output[i.toLowerCase()] = [];
      }
      output[i.toLowerCase()].push(ConvertKeysToLowerCase(obj[i][0]));
    } else {
      output[i.toLowerCase()] = obj[i];
    }
  }
  return output;
}
