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
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 45.8333H50.4166M32.9166 45.8333H33.3333M66.6666 45.8333H67.0833"
              stroke="black"
              stroke-width="4.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M78.375 67.625L83.3333 87.5L62.7083 77.1667C58.6039 78.4979 54.315 79.1729 50 79.1667C29.1667 79.1667 12.5 64.25 12.5 45.8333C12.5 27.4167 29.1667 12.5 50 12.5C70.8333 12.5 87.5 27.4167 87.5 45.8333C87.4315 54.0123 84.1548 61.8375 78.375 67.625Z"
              stroke="black"
              stroke-width="4.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
