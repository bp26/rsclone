import { queryHTMLElement, queryHTMLInputElement } from '../../../utils/helpers';
import { AuthSwitchName, EmitterEventName, HTMLTag } from '../../../types/enums';
import { Element } from '../../../utils/element';
import { emitter } from '../../../utils/emitter';
import { authController } from './auth.controller';
import { AuthMode, AuthErrorType } from '../../../types/enums';
import { Modal } from 'bootstrap';

class AuthView {
  public render(): void {
    const wrapper = new Element(document.body, HTMLTag.DIV, 'auth modal fade data-keyboard="false"');
    wrapper.node.id = 'authModal';

    wrapper.node.innerHTML = `
      <div class='auth__container modal-dialog modal-dialog-centered'>
        <div class='auth__content modal-content'>

          <div class='preloader auth__preloader d-none position-absolute'>
            <div class='preloader__circle auth__circle'></div>
          </div>

          <div class='auth__main'>
            <div class='auth__header modal-header d-flex justify-content-center'>
              <h2 class='auth__title modal-title'>Sign in</h2>
            </div>

            <div class='auth__body modal-body d-flex justify-content-center'>
              <form novalidate='true' class='w-75'>
                <div class='auth__login form-group'>
                  <label for='authLogin' class='auth__label form-label'>Login</label>
                  <input id='authLogin' class='auth__input form-control' type='text' minlength=3 required>
                  <span class='auth__error invalid-feedback'></span>
                </div>
                <div class='auth__password form-group'>
                  <label for='authPassword' class='auth__label form-label'>Password</label>
                  <input id='authPassword' class='auth__input form-control' type='password' minlength=6 required>
                  <span class='auth__error invalid-feedback'></span>
                </div>
                <div class='form-group d-flex justify-content-center mt-3'>
                  <button type='submit' class='auth__submit btn btn-primary w-100'>Submit</button>
                </div>
              </form>
            </div>

            <div class='auth__footer modal-footer text-center'>
              <p class='auth__switch' role='button'>Don't have an account yet?</p>
            </div>
          </div>

        </div>
      </div>
    `;

    this.bind();
    this.subscribe();
  }

  public showModal() {
    const element = queryHTMLElement('#authModal');
    const modal = new Modal(element);
    modal.show();
  }

  private hideModal() {
    const element = queryHTMLElement('#authModal');
    const modal = Modal.getInstance(element);
    if (modal) {
      modal.hide();
    }
  }

  public showPreloader(): void {
    const preloader = queryHTMLElement('.auth__preloader');
    preloader.classList.remove('d-none');
    document.body.classList.add('pe-none');
  }

  private hidePreloader(): void {
    const preloader = queryHTMLElement('.auth__preloader');
    preloader.classList.add('d-none');
    document.body.classList.remove('pe-none');
  }

  private switchMode(mode: AuthMode) {
    const authTitle = queryHTMLElement('.auth__title');
    const authSwitch = queryHTMLElement('.auth__switch');

    this.clearInputs();
    this.clearErrors();

    switch (mode) {
      case AuthMode.LOGIN:
        authTitle.textContent = AuthMode.LOGIN;
        authSwitch.textContent = AuthSwitchName.NOT;
        break;
      case AuthMode.REGISTER:
        authTitle.textContent = AuthMode.REGISTER;
        authSwitch.textContent = AuthSwitchName.ALREADY;
        break;
    }
  }

  public showError(type: AuthErrorType, message: string) {
    const input = queryHTMLElement(`.auth__${type} .auth__input`);
    const error = queryHTMLElement(`.auth__${type} .auth__error`);

    input.classList.add('is-invalid');
    error.textContent = message;
  }

  private clearInputs() {
    const login = queryHTMLInputElement('.auth__login .auth__input');
    const password = queryHTMLInputElement('.auth__password .auth__input');

    login.value = '';
    password.value = '';
  }

  private clearErrors() {
    const login = queryHTMLInputElement('.auth__login .auth__input');
    const password = queryHTMLInputElement('.auth__password .auth__input');

    login.classList.remove('is-invalid');
    password.classList.remove('is-invalid');
  }

  private bind(): void {
    const submit = queryHTMLElement('.auth__submit');
    const login = queryHTMLInputElement('#authLogin');
    const password = queryHTMLInputElement('#authPassword');
    const authSwitch = queryHTMLElement('.auth__switch');

    submit.onclick = (e) => {
      e.preventDefault();
      authController.submit(login.value, password.value);
    };
    authSwitch.onclick = () => authController.switchMode();
    login.oninput = () => this.clearErrors();
    password.oninput = () => this.clearErrors();
  }

  private subscribe(): void {
    emitter.on(EmitterEventName.AUTH_SWITCH, this.switchMode.bind(this));
    emitter.on(EmitterEventName.AUTH_ERROR, this.showError.bind(this));
    emitter.on(EmitterEventName.AUTH_ERROR, this.hidePreloader.bind(this));
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, () => {
      this.hideModal();
      this.hidePreloader();
      this.clearInputs();
    });
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_ERROR, this.hidePreloader.bind(this));
  }
}

export const authView = new AuthView();
