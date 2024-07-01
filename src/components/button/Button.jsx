import React from "react";
import "./Button.css";
function Button({ name }) {
  return (
    <>
      <div class="button">
        <button>{name} </button>
      </div>
    </>
  );
}

export default Button;
