class Theory {
  render() {
    return `
<h4 class="theory__title">Variable</h4>
<p class="">
  Most of the time, a JavaScript application needs to work with information.
  Here are two examples: <br />
  An online shop – the information might include goods being sold and a shopping
  cart. <br />
  A chat application – the information might include users, messages, and much
  more. <br />
  Variables are used to store this information.<br />
  A variable <br />
  A variable is a “named storage” for data. We can use variables to store
  goodies, visitors, and other data.<br />
  To create a variable in JavaScript, use the let keyword.<br />
  The statement below creates (in other words: declares) a variable with the
  name “message”:
</p>
<div
  class="code-block bg-secondary rounded-4 d-flex align-items-center mb-2"
  style="height: 50px"
>
  <p class="m-0 ms-3">let message;</p>
</div>
<p>Now, we can put some data into it by using the assignment operator =:</p>
`;
  }
}

export const theory = new Theory();
