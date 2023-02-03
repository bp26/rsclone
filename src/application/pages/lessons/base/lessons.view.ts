import { getSafeElement } from '../../../utils/helpers';
import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import sloth from '../../../modules/sloth';

class LessonsView {
  private root: HTMLElement;

  constructor() {
    const root = document.querySelector('#root');
    this.root = getSafeElement(root);

    this.subscribe();
  }

  public render(): void {
    this.root.innerHTML = '';
    const html = document.createElement('main');
    if (html)
      html.innerHTML = `<div class="container-fluid">
    <button
    class="btn btn-primary position-absolute d-flex align-items-center justify-content-center rounded-end"
    style="z-index: 50"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseWidthExample"
    aria-expanded="false"
    aria-controls="collapseWidthExample"
  >
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
</svg>
  </button>
  <div class="row position-relative vh-100">
    <div class="p-0 col-md-2 collapse show collapse-horizontal" id="collapseWidthExample">
      <div class="h-100 bg-secondary shadow shadow-offset-end-lg">
        <div class="bg-dark-theme position-relative">
          <div class="d-flex flex-column align-items-center">
            <p class="mt-5 text-center fw-bold">JavaScript Fundamental</p>
            <button class="btn btn-primary p-2 mb-3 w-75">Lessons 1</button>
            <button class="btn btn-primary p-2 mb-3 w-75 disabled">
              Lessons 2
              <span class="badge"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.56216 10.4167V7.29166C6.56216 5.63405 7.20543 4.04434 8.35047 2.87224C9.49551 1.70014 11.0485 1.04166 12.6678 1.04166C14.2872 1.04166 15.8401 1.70014 16.9852 2.87224C18.1303 4.04434 18.7735 5.63405 18.7735 7.29166V10.4167H19.7911C21.4772 10.4167 22.844 11.8157 22.844 13.5417V20.8333C22.844 22.5593 21.4772 23.9583 19.7911 23.9583H5.54454C3.85851 23.9583 2.4917 22.5593 2.4917 20.8333V13.5417C2.4917 11.8157 3.85851 10.4167 5.54454 10.4167H6.56216ZM9.78959 4.34537C10.553 3.56398 11.5883 3.12499 12.6678 3.12499C13.7474 3.12499 14.7827 3.56398 15.5461 4.34537C16.3095 5.12678 16.7383 6.18658 16.7383 7.29166V10.4167H8.59738V7.29166C8.59738 6.18658 9.02624 5.12678 9.78959 4.34537ZM5.54454 12.5C4.98253 12.5 4.52693 12.9663 4.52693 13.5417V20.8333C4.52693 21.4086 4.98253 21.875 5.54454 21.875H19.7911C20.3532 21.875 20.8088 21.4086 20.8088 20.8333V13.5417C20.8088 12.9663 20.3532 12.5 19.7911 12.5H5.54454Z"
                    fill="#BCBEC1"
                  />
                </svg>
              </span>
            </button>
            <button class="btn btn-primary p-2 mb-2 w-75 disabled">
              Lessons 3
              <span class="badge"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.56216 10.4167V7.29166C6.56216 5.63405 7.20543 4.04434 8.35047 2.87224C9.49551 1.70014 11.0485 1.04166 12.6678 1.04166C14.2872 1.04166 15.8401 1.70014 16.9852 2.87224C18.1303 4.04434 18.7735 5.63405 18.7735 7.29166V10.4167H19.7911C21.4772 10.4167 22.844 11.8157 22.844 13.5417V20.8333C22.844 22.5593 21.4772 23.9583 19.7911 23.9583H5.54454C3.85851 23.9583 2.4917 22.5593 2.4917 20.8333V13.5417C2.4917 11.8157 3.85851 10.4167 5.54454 10.4167H6.56216ZM9.78959 4.34537C10.553 3.56398 11.5883 3.12499 12.6678 3.12499C13.7474 3.12499 14.7827 3.56398 15.5461 4.34537C16.3095 5.12678 16.7383 6.18658 16.7383 7.29166V10.4167H8.59738V7.29166C8.59738 6.18658 9.02624 5.12678 9.78959 4.34537ZM5.54454 12.5C4.98253 12.5 4.52693 12.9663 4.52693 13.5417V20.8333C4.52693 21.4086 4.98253 21.875 5.54454 21.875H19.7911C20.3532 21.875 20.8088 21.4086 20.8088 20.8333V13.5417C20.8088 12.9663 20.3532 12.5 19.7911 12.5H5.54454Z"
                    fill="#BCBEC1"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-8 mx-auto">
      <div id="carouselExampleFade" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="content-block p-4">
              <h3 class="text-center">Variable</h3>
              <div
                class="d-flex align-items-center justify-content-center task__video m-auto mb-5 h-md-30"
              >
                <iframe
                  class="w-md-80 h-md-30"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5V8IeATHr4w"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="theory">
                <h4 class="theory__title">Variable</h4>
                <p class="">
                  Most of the time, a JavaScript application needs to work with
                  information. Here are two examples: <br />
                  An online shop – the information might include goods being
                  sold and a shopping cart. <br />
                  A chat application – the information might include users,
                  messages, and much more. <br />
                  Variables are used to store this information.<br />
                  A variable <br />
                  A variable is a “named storage” for data. We can use variables
                  to store goodies, visitors, and other data.<br />
                  To create a variable in JavaScript, use the let keyword.<br />
                  The statement below creates (in other words: declares) a
                  variable with the name “message”:
                </p>
                <div
                  class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"
                  style="height: 50px"
                >
                  <p class="m-0 ms-3">let message;</p>
                </div>
                <p>
                  Now, we can put some data into it by using the assignment
                  operator =:
                </p>
              </div>
              <div
                class="content-controller d-flex align-items-center justify-content-end"
              >
                <button
                  class="switch-button btn btn-primary"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true">Let's Practice</span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-block p-5">
              <h3>Tasks</h3>
              <div
                class="d-flex align-items-center justify-content-center task__video m-auto mb-5"
              >
                <!-- <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5V8IeATHr4w"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe> -->
              </div>
              <div class="tasks">
                <h4 class="task__title">Working with variables</h4>
                <p class="task__price">Price: 2 point</p>
                <p class="">
                  1. Declare two variables: admin and name. <br />
                  2. Assign the value "John" to name.<br />
                  3. Copy the value from name to admin.<br />
                  4. Show the value of admin using alert (must output “John”).
                </p>
                <div class="mb-3">
                  <textarea
                    class="form-control bg-secondary text-light mb-3"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    style="resize: none"
                  ></textarea>
                  <button class="btn btn-primary ms-auto d-block ms-auto">
                    Submit
                  </button>
                  <hr />
                </div>
                <div class="tasks">
                <h4 class="task__title">Working with variables</h4>
                <p class="task__price">Price: 2 point</p>
                <p class="">
                  1. Declare two variables: admin and name. <br />
                  2. Assign the value "John" to name.<br />
                  3. Copy the value from name to admin.<br />
                  4. Show the value of admin using alert (must output “John”).
                </p>
                <div class="mb-3">
                  <textarea
                    class="form-control bg-secondary text-light mb-3"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    style="resize: none"
                  ></textarea>
                  <button class="btn btn-primary ms-auto d-block ms-auto">
                    Submit
                  </button>
                  <hr />
                </div>
              </div>
              <div
                class="content-controller d-flex align-items-center justify-content-end"
              >
                <button
                  class="switch-button btn btn-primary d-block me-auto"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span aria-hidden="true">Back to theory</span>
                  <span class="visually-hidden">Previous</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
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
  </div>
</div>
`;
    this.root.append(html);
    console.log('append html');
    // const addButton = new Element(this.root, HTMLTag.BUTTON, 'home__add', 'Add');
    // addButton.node.onclick = () => lessonsController.add();
    window.addEventListener('DOMContentLoaded', () => {
      sloth.render();
      setTimeout(() => {
        sloth.startTutorial();
      }, 0);
    });
  }

  private subscribe() {
    emitter.subscribe(EmitterViewEvents.HOME_UPDATE, this.render.bind(this));
  }
}

export const lessonsView = new LessonsView();
