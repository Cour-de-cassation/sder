import { idType } from '../../id';
import { buildJwtSigner } from '../../../lib';

export { buildGetTokenForUser };

function buildGetTokenForUser(privateKey: string) {
  return getTokenForUser;

  async function getTokenForUser(user: { _id: idType }) {
    const jwtSigner = buildJwtSigner(privateKey);

    const token = jwtSigner.sign(user._id);

    return token;
  }
}
