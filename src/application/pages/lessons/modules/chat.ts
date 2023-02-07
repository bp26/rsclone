import { chatCloud } from '../../../utils/constants/chat/chatIcon';

class Chat {
  render() {
    return `
      <div class="chat-block">
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          class="bg-transparent border-0 chat-button position-fixed"
          style="
            height: 50px;
            width: 50px;
            bottom: 100px;
            right: 3rem;
            z-index: 50;
          "
        >
       ${chatCloud}
        </button>
        <div
          class="offcanvas offcanvas-end text-light"
          tabindex="-1"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header bg-secondary">
            <h5 id="offcanvasRightLabel">Online chat</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Закрыть"
            ></button>
          </div>
          <div
            class="d-flex flex-column justify-content-between offcanvas-body bg-secondary"
          >
            <div
              class="chat-window flex-grow-1 p-3 mb-3 bg-dark rounded-4 overflow-auto"
              data-mdb-perfect-scrollbar="true"
            >
              <div class="message">
                <p class="p-0 mb-0">
                  <span class="text-danger">User:</span>
                  asdasdasAsdasdssssssssssss asdAdasdsddddddd asddsadasd asdasd
                </p>
                <p class="message-data text-end fs-6">02.02.2023 14:23</p>
              </div>
              <div class="message">
                <p class="p-0 mb-0">
                  <span class="text-danger">User:</span>
                  asdasdasAsdasdssssssssssss asdAdasdsddddddd asddsadasd asdasd
                </p>
                <p class="message-data text-end fs-6">02.02.2023 14:23</p>
              </div>
              <div class="message">
                <p class="p-0 mb-0">
                  <span class="text-danger">User:</span>
                  asdasdasAsdasdssssssssssss asdAdasdsddddddd asddsadasd asdasd
                </p>
                <p class="message-data text-end fs-6">02.02.2023 14:23</p>
              </div>
              <div class="message">
                <p class="p-0 mb-0">
                  <span class="text-danger">User:</span>
                  asdasdasAsdasdssssssssssss asdAdasdsddddddd asddsadasd asdasd
                </p>
                <p class="message-data text-end fs-6">02.02.2023 14:23</p>
              </div>
              <div class="message">
                <p class="p-0 mb-0">
                  <span class="text-danger">User:</span>
                  asdasdasAsdasdssssssssssss asdAdasdsddddddd asddsadasd asdasd
                </p>
                <p class="message-data text-end fs-6">02.02.2023 14:23</p>
              </div>
              <div class="message">
                <p class="p-0 mb-0">
                  <span class="text-danger">User:</span>
                  asdasdasAsdasdssssssssssss asdAdasdsddddddd asddsadasd asdasd
                </p>
                <p class="message-data text-end fs-6">02.02.2023 14:23</p>
              </div>
            </div>
            <form action="#" class="send-message align-content-end">
              <textarea
                class="bg-dark w-100 rounded-4 text-light"
                style="height: 100px"
              ></textarea>
              <div>
                <button class="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

export const chat = new Chat();
