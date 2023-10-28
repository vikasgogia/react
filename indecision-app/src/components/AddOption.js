import React from "react";

export default class AddOption extends React.Component {
  state = { error: undefined };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = "";

    const error = this.props.handleAdd(option);
    this.setState(() => ({ error }));
    if (!error) {
      // clear the input
      e.target.elements.option.value = "";
    }
  };

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
