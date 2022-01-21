import { hasher } from '../../../lib';

export { computeHashedPassword };

async function computeHashedPassword(password: string) {
  return hasher.hash(password);
}
