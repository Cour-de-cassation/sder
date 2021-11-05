export { dependencyManager };
var dependencyManager = {
    inject: function (_a) {
        var defaultValue = _a.defaultValue, testValue = _a.testValue;
        switch (process.env.RUN_MODE) {
            case 'TEST':
                return testValue || defaultValue;
            default:
                return defaultValue;
        }
    },
};
