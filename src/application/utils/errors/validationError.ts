import { AuthErrorType } from '../../types/enums';

export class ValidationError extends Error {
  type: AuthErrorType;
  constructor(type: AuthErrorType, message: string) {
    super(message);
    this.type = type;
  }
}
