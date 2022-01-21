import { idModule } from '../../id';
import { computeHashedPassword } from './computeHashedPassword';
import { formatEmail } from './formatEmail';

export { buildBaseUser };

async function buildBaseUser({ email, name, password }: { email: string; name: string; password: string }) {
  const hashedPassword = await computeHashedPassword(password);

  return {
    deletionDate: undefined,
    email: formatEmail(email),
    hashedPassword,
    _id: idModule.lib.buildId(),
    isActivated: true,
    passwordLastUpdateDate: new Date().getTime(),
    name,
  };
}
