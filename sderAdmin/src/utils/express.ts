import { RequestHandler } from 'express';

export { buildHandlingErrorController };

export type { expressRequestHandlerType };

type expressRequestHandlerType<expressReqBodyType = any> = RequestHandler<any, any, expressReqBodyType, any>;

const buildHandlingErrorController = (controller: expressRequestHandlerType): expressRequestHandlerType => async (
  req,
  res,
  next,
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response = await controller(req, res, next);
    res.status(200);
    res.send(response);
  } catch (error) {
    res.status(500);
    next(error);
  }
};
