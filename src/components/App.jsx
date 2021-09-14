import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleClick() {
    setHeadingText(fullName.fName);
  }

  function hanldeMouseOut() {
    setMouseOver(false);
    console.log("moused out");
  }
  function handleMouseOver() {
    setMouseOver(true);
    console.log("moused over");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello! {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          value={fullName.fName}
          onChange={handleChange}
          type="text"
          placeholder="First Name"
        />

        <input
          name="lName"
          value={fullName.lName}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
        />

        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={hanldeMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
