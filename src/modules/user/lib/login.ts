import { buildJwtSigner, errorHandlers } from '../../../lib';
import { userType } from '../userType';
import { formatEmail } from './formatEmail';
import { passwordHandler } from './passwordHandler';

export { buildLogin };

function buildLogin({
  checkCallAttempts,
  findByEmail,
  privateKey,
}: {
  checkCallAttempts: (identifier: string) => void;
  findByEmail: (email: string) => Promise<userType>;
  privateKey: string;
}) {
  return login;

  async function login({ email, password }: { email: string; password: string }) {
    const jwtSigner = buildJwtSigner(privateKey);
    try {
      checkCallAttempts(formatEmail(email));
      const user = await findByEmail(email);

      if (!(await passwordHandler.checkUser(user, password))) {
        throw new Error(`The received password does not match the stored one for ${user.email}`);
      }

      const token = jwtSigner.sign(user._id);

      const passwordTimeValidityStatus = passwordHandler.getPasswordTimeValidityStatus(user);

      return {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        token,
        passwordTimeValidityStatus,
      };
    } catch (err) {
      console.error(err);
      throw errorHandlers.authenticationErrorHandler.build(`Login failed`);
    }
  }
}
