/**
 * root Indecision component (maintains options array state)
 */
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    // bind this to the event handlers
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    // component state
    this.state = {
      options: ["option1", "option2"],
    };
  }

  // remove all options
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  // select random option
  handlePick() {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }

  // add option to options array (validates the option first)
  handleAdd(option) {
    if (!option) {
      return "Add a value first!";
    } else if (this.state.options.indexOf(option) > -1) {
      // duplicate
      return "Already exists!";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer.";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAdd={this.handleAdd} />
      </div>
    );
  }
}

/**
 * Header component
 */
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

/**
 * Action component (what should I do?)
 */
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

/**
 * all Options component (contains <Option />)
 */
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
        {this.props.options.map((opt) => (
          <Option key={opt} optionText={opt} />
        ))}
      </div>
    );
  }
}

/**
 * individual Option component
 */
class Option extends React.Component {
  render() {
    return <div> Option: {this.props.optionText} </div>;
  }
}

/**
 * Add Option component
 */
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = "";
    const error = this.props.handleAdd(option);
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// renders the output
ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
