import he from 'he';

export { htmlDecode };

function htmlDecode(obj) {
  const output = {};
  for (const i in obj) {
    if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
      output[i] = htmlDecode(obj[i]);
    } else if (Object.prototype.toString.apply(obj[i]) === '[object Array]') {
      if (output[i] === undefined) {
        output[i] = [];
      }
      output[i].push(htmlDecode(obj[i][0]));
    } else {
      try {
        output[i] = he.decode(obj[i]);
      } catch (ignore) {
        output[i] = obj[i];
      }
    }
  }
  return output;
}
