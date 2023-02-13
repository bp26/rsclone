class Task {
  render() {
    return `
<div class="task">
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
    <button class="btn btn-primary ms-auto d-block ms-auto">Submit</button>
    <hr />
  </div>
</div>
`;
  }
}

export const task = new Task();
