import { getSafeElement } from '../../../utils/helpers';
import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class UserView {
  private root: HTMLElement;

  constructor() {
    const root = document.querySelector('.main__root');
    this.root = getSafeElement(root);

    this.subscribe();
  }

  public render(): void {
    this.root.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = ` <div class="container-fluid">
        <div class="row p-5">
          <div class="col-6">
            <div class="user-data d-flex align-items-center flex-column flex-md-row gap-3">
              <img class="d-block" style="min-width:30%;" src="./images/Profile.svg" alt="profile" />
              <p class="user__name mb-0">User Name</p>
            </div>
          </div>
          <div class="col-6 d-flex align-items-center justify-content-end">
            <div class="coins d-flex gap-3 align-items-center justify-content-around bg-primary p-2 rounded-5">
              <span>150</span>
              <img class="w-25" src="./images/coin.svg" alt="coin" />
            </div>
          </div>
        </div>
        <hr />
        <div class="row p-5">
          <div class="col">
            <div class="user__rang me-auto d-inline-block">
              <span>Rang:</span>
              <img class="w-50" src="./images/RangBabe.svg" alt="BabeImg" />
            </div>
          </div>
        </div>
        <hr />
        <div class="row p-5">
          <div class="col-6 p-0">
            <p>My progress</p>
          </div>
          <div class="col-6 p-0 text-end">
            <p>25%</p>
          </div>
          <div class="row m-0">
            <div class="col-12 p-2 rounded-2 bg-light position-relative">
              <div class="position-absolute p-2 w-25 translate-middle-y rounded-2 progress-bar-collor start-0"></div>
            </div>
          </div>
        </div>
      </div>
`;
    this.root.append(html);
    // const addButton = new Element(this.root, HTMLTag.BUTTON, 'home__add', 'Add');
    // addButton.node.onclick = () => userController.add();
  }

  private subscribe() {
    emitter.subscribe(EmitterViewEvents.HOME_UPDATE, this.render.bind(this));
  }
}

export const userView = new UserView();
