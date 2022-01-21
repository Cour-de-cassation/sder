import { idModule } from '../../id';
import { errorHandlers, buildJwtSigner } from '../../../lib';

export { buildExtractUserIdFromAuthorizationHeader };

function buildExtractUserIdFromAuthorizationHeader(privateKey: string) {
  return extractUserIdFromAuthorizationHeader;

  function extractUserIdFromAuthorizationHeader(authorization: string | undefined) {
    const jwtSigner = buildJwtSigner(privateKey);

    if (authorization) {
      const token = authorization.split(' ')[1];
      const userId = jwtSigner.verifyToken(token);

      return idModule.lib.buildId(userId);
    } else {
      throw errorHandlers.authenticationErrorHandler.build('No authorization value provided');
    }
  }
}
