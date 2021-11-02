import { publicityInfoType } from '../types';

export { converter };

const converter = {
  convertParameters,
};

function convertParameters(params: {
  _id: string;
  sourceDb: string;
}): Pick<publicityInfoType, '_id' | 'sourceDb'> | undefined {
  const _id = parseInt(params._id);
  const sourceDb = params.sourceDb === 'jurica' || params.sourceDb === 'jurinet' ? params.sourceDb : undefined;
  if (isNaN(_id) || sourceDb === undefined) {
    return undefined;
  }
  return { _id, sourceDb };
}
