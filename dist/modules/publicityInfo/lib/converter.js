export { converter };
var converter = {
    convertParameters: convertParameters,
};
function convertParameters(params) {
    var _id = parseInt(params._id);
    var sourceDb = params.sourceDb === 'jurica' || params.sourceDb === 'jurinet' ? params.sourceDb : undefined;
    if (isNaN(_id) || sourceDb === undefined) {
        return undefined;
    }
    return { _id: _id, sourceDb: sourceDb };
}
