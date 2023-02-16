export const practice = `
 <div class="carousel-item">
            <div class="content-block p-5">
              <h3>Tasks</h3>
              <div
                class="lesson-practice task__video m-auto mb-5"
              >

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
`;
export const theory1 = `<div class="carousel-item active">
  <div class="content-block p-4">
       <h3 class="text-center">Variable</h3>
          <div class="d-flex align-items-center justify-content-center task__video m-auto mb-5 h-md-30">
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
              Most of the time, a JavaScript application needs to work with information. Here are two examples: <br />
              An online shop – the information might include goods being sold and a shopping cart. <br />
              A chat application – the information might include users, messages, and much more. <br />
              Variables are used to store this information.<br />
              A variable <br />
              A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.<br />
              To create a variable in JavaScript, use the let keyword.<br />
              The statement below creates (in other words: declares) a variable with the name “message”:
            </p>
            <div class="code-block bg-secondary rounded-4 d-flex align-items-center p-1 mb-2">
              <p class="m-0 ms-3">let message;</p>
            </div>
            <p>Now, we can put some data into it by using the assignment operator =:</p>
            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <p class="m-0 ms-3">let message;</p>
              <p class="m-0 ms-3">message = 'Hello'; <span class="text-success">// store the string 'Hello' in the variable named message</span></p>
            </div>

            <p>The string is now saved into the memory area associated with the variable. We can access it using the variable name:</p>

            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <p class="m-0 ms-3">let message;</p>
              <p class="m-0 ms-3">message = 'Hello!';</p>
              <p class="m-0 ms-3">alert(message); <span class="text-success">// shows the variable content</span></p>
            </div>

            <p>To be concise, we can combine the variable declaration and assignment into a single line:</p>

            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <p class="m-0 ms-3">let message = 'Hello!';<span class="text-success"> // define the variable and assign the value</span></p>
              <p class="m-0 ms-3">alert(message);<span class="text-success">// Hello!</span></p>
            </div>

            <p>We can also declare multiple variables in one line:</p>

            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <p class="m-0 ms-3">let user = 'John', age = 25, message = 'Hello';</p>
            </div>

            <p>That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.</p>
            <p>The multiline variant is a bit longer, but easier to read:</p>

            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <p class="m-0 ms-3">let user = 'John';</p>
              <p class="m-0 ms-3">let age = 25;</p>
              <p class="m-0 ms-3">let message = 'Hello';</p>
            </div>

            <p>Some people also define multiple variables in this multiline style:</p>

            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <p class="m-0 ms-3">let user = 'John',</p>
              <p class="m-0 ms-3">age = 25,</p>
              <p class="m-0 ms-3">message = 'Hello';</p>
            </div>

            <p>…Or even in the “comma-first” style:</p>

            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <p class="m-0 ms-3">let user = 'John'</p>
              <p class="m-0 ms-3">, age = 25</p>
              <p class="m-0 ms-3">, message = 'Hello';</p>
            </div>

            <p>Technically, all these variants do the same thing. So, it’s a matter of personal taste and aesthetics.</p>

            <h3>A real-life analogy</h3>
            <p>We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.</p>
            <p>We can put any value in the box. We can also change it as many times as we want:</p>
            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <pre class="p-2">
  let message;

  message = 'Hello!';

  message = 'World!'; // value changed

  alert(message);
              </pre>
            </div>

            <p>When the value is changed, the old data is removed from the variable</p>
            <p>We can also declare two variables and copy data from one into the other.</p>
            <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <pre class="p-2">
let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!
              </pre>
            </div>

            <div class="border border-2 p-2 rounded-4 mb-2">
              <h4 class="text-danger">Declaring twice triggers an error</h4>
              <p>A variable should be declared only once.</p>
              <p>A repeated declaration of the same variable is an error:</p>
              <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
                <pre class="p-2">
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
              </pre
                >
              </div>
              <p>So, we should declare a variable once and then refer to it without let.</p>
            </div>

            <h3>Variable naming</h3>
            <p>There are two limitations on variable names in JavaScript:</p>
            <p>1. The name must contain only letters, digits, or the symbols $ and _.</p>
            <p>2. The first character must not be a digit.</p>
            <p>Examples of valid names:</p>
             <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <pre class="p-2">
let userName;
let test123;
              </pre>
            </div>

            <p>When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.</p>
            <p>What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.</p>
            <p>These names are valid:</p>

                <div class="code-block bg-secondary rounded-4 align-items-center justify-content-start mb-2">
              <pre class="p-2">
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3
              </pre>
            </div>

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
${practice}
`;

export const theory2 = `<div class="carousel-item active">
  <div class="content-block p-4">
    <h3 class="text-center">Data types</h3>
    <div
      class="d-flex align-items-center justify-content-center task__video m-auto mb-5 h-md-30"
    >
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/g7jDucodUzQ"
        title="Типы данных JAVASCRIPT. Null String Undefined Boolean Number и другие. Уроки JAVASCRIPT с нуля 2020"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="theory">
      <h4 class="theory__title">Data types</h4>
      <p>
        A value in JavaScript is always of a certain type. For example, a string or a number.
      </p>
      <p>There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.</p>
      <p>We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:</p>
      <div
        class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

      >
        <pre  class="p-2">
// no error
let message = "hello";
message = 123456;
        </pre>
      </div>

      <p>
        Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
      </p>

      <h3>Number</h3>
         <div
        class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

      >
        <pre  class="p-2">
let n = 123;
n = 12.345;
        </pre>
      </div>
      <p>The number type represents both integer and floating point numbers.</p>
      <p>There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.</p>
      <p>Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.</p>
      <p>Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.</p>
      <p>We can get it as a result of division by zero:</p>
        <div
        class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

      >
        <pre  class="p-2">
alert( 1 / 0 ); // Infinity
        </pre>
      </div>
      <p>NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:</p>
            <div
        class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

      >
        <pre  class="p-2">
alert( "not a number" / 2 ); // NaN, such division is erroneous
        </pre>
      </div>

      <p>NaN is sticky. Any further mathematical operation on NaN returns NaN:</p>
              <div
        class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

      >
        <pre  class="p-2">
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
        </pre>
      </div>

      <p>So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).</p>

      <p>Special numeric values formally belong to the “number” type. Of course they are not numbers in the common sense of this word.</p>
      <p>We’ll see more about working with numbers in the chapter Numbers.</p>

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
${practice}
`;

export const theory3 = `
 <div class="carousel-item active">
            <div class="content-block p-4">
              <h3 class="text-center">Functions</h3>
              <div
                class="d-flex align-items-center justify-content-center task__video m-auto mb-5 h-md-30"
              >
        <iframe width="853" height="480" src="https://www.youtube.com/embed/6cKoB5ijaGA" title="Функции в JAVASCRIPT. Стрелочные функции, рекурсия, планирование: setTimeout и setInterval." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div class="theory">
                 <h4 class="theory__title">Functions</h4>
<p>
 Quite often we need to perform a similar action in many places of the script.
</p>
<p>For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.</p>
<p>Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.</p>
<p>We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.</p>
<h4>Function Declaration</h4>
<p>To create a function we can use a function declaration.</p>
<p>It looks like this:</p>
<div
  class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

>
  <pre  class="p-2">
function showMessage() {
  alert( 'Hello everyone!' );
}
  </pre>
</div>

<p>The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.</p>

<div
  class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

>
  <pre  class="p-2">
function name(parameter1, parameter2, ... parameterN) {
 // body
}
  </pre>
</div>

<p>Our new function can be called by its name: showMessage().</p>
<p>For instance:</p>
<div
  class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"

>
  <pre class="p-2">
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
  </pre>
</div>
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
          ${practice}
`;
