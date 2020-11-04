import React from "react";

function Button(props) {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
export default Button;
