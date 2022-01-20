import { documentType } from '../documentType';
export { getNextStatus };
declare function getNextStatus({ publicationCategory, status, route, }: Pick<documentType, 'status' | 'publicationCategory' | 'route'>): documentType['status'];
