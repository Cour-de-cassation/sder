export { keysOf };
declare function keysOf<T extends string | number | symbol>(object: Record<T, any>): T[];
