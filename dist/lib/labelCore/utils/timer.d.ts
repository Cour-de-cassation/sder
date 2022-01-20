export { buildTimer };
declare function buildTimer(): {
    start: (taskName: string) => void;
    screenshot: (taskName: string) => void;
    stop: () => void;
};
