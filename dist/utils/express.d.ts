import { RequestHandler } from 'express';
export { buildHandlingErrorController };
export type { expressRequestHandlerType };
declare type expressRequestHandlerType<expressReqBodyType = any> = RequestHandler<any, any, expressReqBodyType, any>;
declare const buildHandlingErrorController: (controller: expressRequestHandlerType) => expressRequestHandlerType;
