export { dependencyManager };

const dependencyManager = {
  inject<T>({ defaultValue, testValue }: { defaultValue: T; testValue?: T }) {
    switch (process.env.RUN_MODE) {
      case 'TEST':
        return testValue || defaultValue;
      default:
        return defaultValue;
    }
  },
};
