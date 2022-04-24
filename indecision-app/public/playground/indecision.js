const appRoot = document.getElementById("root");

const app = {
  title: "lucifer",
  subtitle: "lord of hell",
  options: ["one", "two"],
};

/**
 * form submit "Add option" callback - adds element to app.options
 */
const submitForm = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

/**
 * button "Remove all options" onClick callback
 */
const removeAllOptions = () => {
  app.options.length = 0;
  render();
};

/**
 * button "What should I do?" onClick callback
 */
const onMakeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  alert(app.options[index]);
};

function render() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options ? "Here are your options:" : "No options"}</p>
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAllOptions}>Remove all</button>
      <ol>
        {
          // Array in JSX
          app.options.map((opt) => (
            <li key={opt}>{opt}</li>
          ))
        }
      </ol>
      <form onSubmit={submitForm}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

render();
