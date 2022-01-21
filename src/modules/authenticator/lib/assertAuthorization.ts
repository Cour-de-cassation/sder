import { errorHandlers } from '../../../lib';

export { assertAuthorization };

function assertAuthorization(user: { email: string; isActivated: boolean; deletionDate: number }) {
  if (!user.isActivated) {
    throw errorHandlers.authenticationErrorHandler.build(`The user ${user.email} is deactivated`);
  }

  if (!!user.deletionDate) {
    throw errorHandlers.authenticationErrorHandler.build(`The user ${user.email} has been deleted`);
  }
}
