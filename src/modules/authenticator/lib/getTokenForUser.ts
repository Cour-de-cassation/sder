import { idType } from '../../id';
import { buildJwtSigner } from '../../../lib';
import { passwordHandler } from './passwordHandler';

export { buildGetTokenForUser };

function buildGetTokenForUser(privateKey: string) {
  return getTokenForUser;

  async function getTokenForUser(user: {
    _id: idType;
    email: string;
    password: string;
    hashedPassword: string;
    passwordLastUpdateDate: number;
  }) {
    const jwtSigner = buildJwtSigner(privateKey);

    if (!(await passwordHandler.checkUser(user, user.password))) {
      throw new Error(`The received password does not match the stored one for ${user.email}`);
    }

    const token = jwtSigner.sign(user._id);

    return token;
  }
}
