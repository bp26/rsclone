import { queryHTMLElement, queryHTMLInputElement } from '../../../utils/helpers';
import { EmitterEventName, HTMLTag } from '../../../types/enums';
import { Element } from '../../../utils/element';
import { emitter } from '../../../utils/emitter';
import { authController } from './auth.controller';
import { AuthMode } from '../../../types/enums';

class AuthView {
  public render(): void {
    const wrapper = new Element(document.body, HTMLTag.DIV, 'auth');
    wrapper.node.innerHTML = `
      <div class='auth__container'>
        <p class='auth__title'></p>
        <div class='auth__block auth__login'>
          <div class='auth__block-name'>Login</div>
          <input class='auth__input' type='text' minlength=3 required>
        </div>
        <div class='auth__block auth__password'>
          <div class='auth__block-name'>Password</div>
          <input class='auth__input' type='text' minlength=6 required>
        </div>
        <div class='auth__error'></div>
        <button class='auth__submit'></button>
        <p class='auth__switch'>Switch</p>
      </div>
    `;

    this.bind();
    this.subscribe();
  }

  private remove(): void {
    const auth = document.querySelector('.auth');
    if (auth) {
      auth.remove();
    }
  }

  private switchMode(mode: AuthMode) {
    const authTitle = queryHTMLElement('.auth__title');
    const authSwitch = queryHTMLElement('.auth__switch');

    authTitle.textContent = mode;
  }

  private showError(message: string) {
    const error = queryHTMLElement('.auth__error');
    error.textContent = message;
  }

  private clearError() {
    const error = queryHTMLElement('.auth__error');
    error.textContent = '';
  }

  private bind(): void {
    const submit = queryHTMLElement('.auth__submit');
    const login = queryHTMLInputElement('auth__login auth__input');
    const password = queryHTMLInputElement('auth__password auth__input');
    const authSwitch = queryHTMLElement('.auth__switch');

    submit.onclick = () => authController.submit(login.value, password.value);
    authSwitch.onclick = () => authController.switchMode();
    login.oninput = () => this.clearError();
    password.oninput = () => this.clearError();
  }

  private subscribe(): void {
    emitter.on(EmitterEventName.AUTH_SWITCH, this.switchMode.bind(this));
    emitter.on(EmitterEventName.AUTH_ERROR, this.showError.bind(this));
  }
}

export const authView = new AuthView();
