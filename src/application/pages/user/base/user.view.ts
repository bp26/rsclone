import { IFormatedUser, IUser } from '../../../types/interfaces';
import { getSafeInputElement, queryHTMLElement, queryHTMLInputElement } from '../../../utils/helpers';
import { uploadSvg } from '../../../utils/constants/icons/upload';
import { userController } from './user.controller';
import { EmitterEventName, UserPasswordError } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { profileSvg } from '../../../utils/constants/icons/profileSvg';
import { userRank } from '../data/userRank';

class UserView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.main__root');
  }

  public render(user: IFormatedUser): void {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `
      <div class="user container-xxl">
        <div class="user__upper-row row">
          <div class="user__data col-md-6 col-12">
            <div class="d-flex align-items-center flex-column gap-3">
              <div class="position-relative">
                <div class="user__image-block d-block"></div>
                <span title="Choose avatar" role="button" class="user__upload-button position-absolute top-0 translate-middle badge rounded-pill">${uploadSvg}</span>
                <form class="d-none" method="post" enctype="multipart/form-data">
                  <input class="user__upload-input" name="avatar" type="file" accept="image/*">
                </form>
              </div>
              <p class="user__name mb-0">${user.login}</p>
            </div>
          </div>
          <div class="user__settings col-md-6 col-12 d-flex flex-column">
            <div>
              <form novalidate='true'>
                <p>Change password:</p>
                <div class='user__password-settings d-flex align-items-center gap-3 p-3 rounded'>
                  <div class='d-flex flex-column gap-3'>
                    <div class='form-group'>
                      <input class='user__password-input form-control' placeholder='New password' type='password' required>
                      <span class='user__password-error invalid-feedback'></span>
                    </div>
                    <div class='form-group'>
                      <input class='user__password-repeatinput form-control' placeholder='Repeat password' type='password' required>
                      <span class='user__password-repeaterror invalid-feedback'></span>
                    </div>
                  </div>
                  <button type='submit' class='user__password-submit btn btn-primary button'>Submit</button>
                </div>
              </form>
              <form novalidate='true' class='mt-4'>
                <p>Chat settings:</p>
                <div class='user__chat-settings d-flex align-items-center justify-content-between rounded p-3'>
                  <div class='d-flex flex-column gap-3 '>
                    <div class='form-group d-flex align-items-center gap-4'>
                      <span>User color:</span>
                      <input role='button' class='user__color-input' type='color' value=${user.chat.color} >
                    </div>
                    <div class='form-group d-flex align-items-center gap-3'>
                      <span>Notifications:</span>
                      <div class="form-check form-switch">
                        <input role="button" class="user__notifications-switch form-check-input" type="checkbox" ${user.chat.notifications ? 'checked' : ''}>
                      </div>
                    </div>
                  </div>
                  <button type='submit' class='user__chat-submit btn btn-primary button'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="w-100 d-flex justify-content-center"><h5 class="user__separator d-flex w-100">Rank</h5></div>

        <div class="row p-5">
          <div class="col-8">
            <div class="user__rank w-100 d-inline-flex flex-column align-items-start">
              ${userRank[user.rank]}
            </div>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-end">
            <div class="coins d-flex gap-3 align-items-center justify-content-around bg-primary p-2 rounded-5">
              <span>${user.coins}</span>
              <img class="w-50" src="./images/coin.svg" alt="coin" />
            </div>
          </div>
        </div>

        <div class="w-100 d-flex justify-content-center"><h5 class="user__separator d-flex w-100">Progress</h5></div>

        <div class="row p-5 mb-4">
          <div class="col-6 p-0">
            <p>My progress</p>
          </div>
          <div class="col-6 p-0 text-end">
            <p>${user.progress}</p>
          </div>
          <div class="row m-0">
            <div class="col-12 py-2 rounded-2 bg-light position-relative">
              <div class="user__progress-bar py-2 position-absolute translate-middle-y rounded-2 start-0" style="width: ${user.progress}"></div>
            </div>
          </div>
        </div>
      </div>
`;

    this.root.append(html);
    this.setUserAvatar(user.avatar);
    this.bind();
    this.subscribe();
  }

  private setUserAvatar(link: string): void {
    const avatar = queryHTMLElement('.user__image-block');
    const userIcon = link ? `<img class="user__image" style="min-width:30%;" src=${link} alt="profile" />` : profileSvg;
    avatar.innerHTML = userIcon;
  }

  public showPasswordError(type: UserPasswordError, message: string): void {
    const input = queryHTMLInputElement('.user__password-input');
    const repeatInput = queryHTMLInputElement('.user__password-repeatinput');
    const error = queryHTMLElement('.user__password-error');
    const repeatError = queryHTMLElement('.user__password-repeaterror');

    switch (type) {
      case UserPasswordError.NEW:
        error.textContent = message;
        input.classList.add('is-invalid');
        break;
      case UserPasswordError.REPEAT:
        repeatError.textContent = message;
        repeatInput.classList.add('is-invalid');
        break;
    }
  }

  private clearPasswordErrors(): void {
    const input = queryHTMLInputElement('.user__password-input');
    const repeatInput = queryHTMLInputElement('.user__password-repeatinput');

    input.classList.remove('is-invalid');
    repeatInput.classList.remove('is-invalid');
  }

  public clearPasswordInput(): void {
    const password = queryHTMLInputElement('.user__password-input');
    const passwordRepeat = queryHTMLInputElement('.user__password-repeatinput');

    password.value = '';
    passwordRepeat.value = '';
  }

  private bindUpload(): void {
    const uploadInput = queryHTMLInputElement('.user__upload-input');
    const uploadButton = queryHTMLElement('.user__upload-button');

    uploadButton.onclick = () => uploadInput.click();
    uploadInput.onchange = (e) => {
      const files = getSafeInputElement(e.target).files;
      if (files) {
        const file = files[0];
        userController.changeAvatar(file);
      }
    };
  }

  private bind(): void {
    const passwordInput = queryHTMLInputElement('.user__password-input');
    const passwordRepeatInput = queryHTMLInputElement('.user__password-repeatinput');
    const passwordSubmit = queryHTMLElement('.user__password-submit');

    passwordSubmit.onclick = (e) => {
      e.preventDefault();
      userController.changePassword(passwordInput.value, passwordRepeatInput.value);
    };
    passwordInput.oninput = () => this.clearPasswordErrors();
    passwordRepeatInput.oninput = () => this.clearPasswordErrors();

    const colorInput = queryHTMLInputElement('.user__color-input');
    const notifications = queryHTMLInputElement('.user__notifications-switch');
    const chatSubmit = queryHTMLElement('.user__chat-submit');

    chatSubmit.onclick = (e) => {
      e.preventDefault();
      userController.changeChatSettings(colorInput.value, notifications.checked);
    };

    this.bindUpload();
  }

  private subscribe(): void {
    emitter.on(EmitterEventName.GLOBAL_USER_UPDATE_AVATAR, (user: IUser) => this.setUserAvatar.call(this, user.avatar.secure_url));
  }
}

export const userView = new UserView();
