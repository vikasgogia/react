import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <button onClick={props.handleRemoveAll}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map((opt) => (
      <Option key={opt} optionText={opt} handleRemove={props.handleRemove} />
    ))}
  </div>
);

export default Options;
