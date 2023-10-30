import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  // state object (class's member variable out of constructor using transform-class-properties plugin)
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) this.setState(() => ({ options }));
    } catch(e) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  /**
   * handler function to remove/clear all options
   * passed to Options component
   */
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  /**
   * handler function to remove an option
   * passed to Options component to Option component
   */
  handleRemove = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };

  /**
   * handler function to close modal
   * passed to OptionModal component
   */
  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  /**
   * handler function to select random option
   * passed to Action component
   */
  handlePick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[index] }));
  };

  /**
   * handler function to add an option
   * passed to AddOption component
   */
  handleAdd = (option) => {
    if (!option) return "Add a value first!";
    else if (this.state.options.indexOf(option) > -1) return "Already exists!";

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  render() {
    const subtitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleRemove={this.handleRemove}
            />
            <AddOption handleAdd={this.handleAdd} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
