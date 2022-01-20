export { buildCallAttemptsRegulator };
declare function buildCallAttemptsRegulator(maxAttempts: number, delayBetweenAttemptsInSeconds: number): {
    checkCallAttempts: (identifier: string) => void;
};
