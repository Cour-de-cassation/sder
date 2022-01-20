export { environmentHandler };
declare const environmentHandler: {
    convertClientPortToServerPort: typeof convertClientPortToServerPort;
    convertServerPortToClientPort: typeof convertServerPortToClientPort;
};
declare function convertClientPortToServerPort(clientPort: number): number;
declare function convertServerPortToClientPort(serverPort: number): number;
