import { userType } from '../userType';

export { formatEmail };

function formatEmail(email: userType['email']) {
  return email.trim().toLowerCase();
}
