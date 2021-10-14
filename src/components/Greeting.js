import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>... it is good to see you.</Output>}
      {changedText && <Output>Changed</Output>}
      <button onClick={changeTextHandler}></button>
    </div>
  );
};

export default Greeting;
